import { Text, View, KeyboardAvoidingView } from "react-native";
import InputWithLabel from "../../components/inputWithLabel/InputWithLabel";
import CustomButton from "../../components/button/CustomButton";
import Style from "./Style";
import { Feather } from "@expo/vector-icons";
import Theme from "../../styles/Theme";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useState, useEffect, useRef, useCallback } from "react";
import Alert from "../../components/alert/Alert";
import { useDispatch, useSelector } from "react-redux";
import auth from "../../services/auth/Auth";
import { authSlice } from "../../store/slices/AuthSlice";
import Header from "../../components/header/header";

function Register({ previous, navigation }) {
  const dispatch = useDispatch();
  //State from store
  const { alert } = useSelector(({ authSlice }) => authSlice);
  //states
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [submit, setSubmit] = useState(false);
  //ref
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const mobileNumberRef = useRef("");
  //functions
  const goToLogin = () => {
    navigation.navigate("Login");
  };
  const handleAcceptTerm = () => {
    setAcceptTerms(!acceptTerms);
  };
  //Effects
  useEffect(() => {
    console.log("useEffect - Register Component");
  });
  const handleRegister = useCallback(async () => {
    const response = await auth.Register({
      mobileNumber: Number(mobileNumberRef.current.getValue()),
      password: passwordRef.current.getValue(),
      email: emailRef.current.getValue(),
      name: usernameRef.current.getValue(),
    });
    if (response.status) {
      dispatch(setToken({ token: response.token, secure: true, userId: response.userId }))
    } else {
      if (alert) return;
      if (response.duplicate) {
        dispatch(
          authSlice.actions.setAlert({
            text: "Mobile number already used",
          })
        );
      } else {
        dispatch(
          authSlice.actions.setAlert({
            text: "Email or Password in invalid",
          })
        );
      }
    }
  });
  console.log("Register Component");
  return (
    <KeyboardAvoidingView behavior="padding" style={Style.container}>
      <Header navigation={navigation} />
      <View style={Style.register}>
        <View>
          <Text style={Style.title}>Create your account </Text>
          <View style={Style.Account}>
            <Text style={Style.AccountText}>
              Already have an account?
            </Text>
            <Pressable onPress={goToLogin}>
              <Text style={Style.signin}> Sign in</Text>
            </Pressable>
          </View>
        </View>
        <View style={Style.inputs}>
          <InputWithLabel
            label="Username"
            styles={{ marginBottom: 5 }}
            placeholder="Enter Name"
            ref={usernameRef}
          />
          <InputWithLabel
            label="Mobile Number"
            styles={{ marginBottom: 5 }}
            placeholder="Enter Mobile Number"
            keyboardType="number-pad"
            ref={mobileNumberRef}
          />
          <InputWithLabel
            label="Email"
            styles={{ marginBottom: 5 }}
            placeholder="Enter Email"
            ref={emailRef}
          />
          <InputWithLabel
            label="Password"
            secureTextEntry={true}
            placeholder="Enter Passowrd"
            ref={passwordRef}
          />
          <Pressable style={Style.acceptTerms} onPress={handleAcceptTerm}>
            {acceptTerms ? (
              <Feather
                name="check-circle"
                size={24}
                color={Theme.color.primary}
              />
            ) : (
              <Feather name="circle" size={24} color={Theme.color.primary} />
            )}

            <Text style={Style.acceptTermsText}>
              I accept the term and privacy policy
            </Text>
          </Pressable>
        </View>
        <CustomButton
          text="Continue "
          styles={{ marginBottom: 10 }}
          onClick={handleRegister}
        />
      </View>
      {alert ? <Alert /> : <></>}
    </KeyboardAvoidingView>
  );
}

export default Register;
