import { Text, View, KeyboardAvoidingView } from "react-native";
import InputWithLabel from "../../components/inputWithLabel/InputWithLabel";
import CustomButton from "../../components/button/CustomButton";
import Style from "./Style";
import { Ionicons, Feather } from "@expo/vector-icons";
import Theme from "../../styles/Theme";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useEffect, useState, useRef, useCallback } from "react";
import auth from "../../services/auth/Auth";
import Alert from "../../components/alert/Alert";
import { authSlice } from "../../store/slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/header";
import { appSlice } from "../../store/slices/AppSlice";

function Login({ previous, navigation }) {
  const dispatch = useDispatch();
  //State from store
  const { alert } = useSelector(({ authSlice }) => authSlice);
  //state
  const passwordRef = useRef("");
  const mobileNumberRef = useRef("");
  const [remember, setRemember] = useState(false);

  //functions
  const goToRegister = () => {
    navigation.navigate("Register");
  };
  const handleRemember = () => {
    setRemember(!remember);
  };
  //Effects
  useEffect(() => {
    console.log("useEffect - Login Component");
  }, []);
  const handleLogin = useCallback(async () => {
    console.log("button press")
    const response = await auth.Login({
      mobileNumber: Number(mobileNumberRef.current.getValue()),
      password: passwordRef.current.getValue(),
    });
    console.log(response)
    if (response.status) {
      dispatch(appSlice.actions.login(response.data))
      if (response.data.type == "otp") {

        navigation.navigate("otp");
      } else {
        navigation.navigate("qr");
      }

    } else {
      if (alert) return;
      dispatch(
        authSlice.actions.setAlert({
          text: "Incorrect mobile number or password",
        })
      );
    }
  }, []);
  console.log("Login Component");
  return (
    <KeyboardAvoidingView behavior="padding" style={Style.container}>

      <Header navigation={navigation} />
      <View style={Style.login}>
        <View>
          <Text style={Style.title}>Sign In your account </Text>
          <View style={Style.Account}>
            <Text style={Style.AccountText}>Don’t you have an account?</Text>
            <Pressable onPress={goToRegister}>
              <Text style={Style.signup}> Sign up</Text>
            </Pressable>
          </View>
        </View>
        <View style={Style.inputs}>
          <InputWithLabel
            label="Mobile Number"
            styles={{ marginBottom: 5 }}
            placeholder="Enter Mobile Number"
            keyboardType="number-pad"
            ref={mobileNumberRef}
          />
          <InputWithLabel
            label="Password"
            secureTextEntry={true}
            placeholder="Enter Passowrd"
            ref={passwordRef}
          />
        </View>
        <CustomButton
          text="Sign in "
          styles={{ marginBottom: 10 }}
          onClick={handleLogin}
        />
      </View>
      {alert ? <Alert /> : <></>}
    </KeyboardAvoidingView>
  );
}
export default Login;
