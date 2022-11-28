import { View, Text } from "react-native";
import { useCallback, useRef } from "react";
import CustomButton from "../../components/button/CustomButton";
import Theme from "../../styles/Theme";
import Style from "./Style";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PinCode from "../../components/pinCode/PinCode";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../../store/slices/AuthSlice";
import Alert from "../../components/alert/Alert";
import Header from "../../components/header/header";
import auth from "../../services/auth/Auth";
import { setToken } from "../../store/actions/AppActions";

export default function Otp({ previous, navigation }) {

  const code = useRef(null);
  const dispatch = useDispatch();
  //State from store
  const { alert } = useSelector(({ authSlice }) => authSlice);
  const { userId, mobileNumber } = useSelector(({ appSlice }) => appSlice);
  // code.current.getValue()
  const CheckPin = useCallback(async () => {
    if (code.current.getValue().length == 4 && typeof code.current.getValue() == "string") {
      const response = await auth.vertifyOtp(code.current.getValue(), userId);
      if (response.status) {
        console.log(response.token)
        dispatch(setToken({ token: response.token, secure: true, userId }))
      } else {
        dispatch(
          authSlice.actions.setAlert({
            text: "Pin is invalid",
          })
        );
      }
    } else {
      dispatch(
        authSlice.actions.setAlert({
          text: "Pin is 4 digit",
        })
      );
    }
  });

  return (
    <View style={Style.container}>
      <Header navigation={navigation} />

      <View style={Style.otp}>
        <View>
          <Text style={Style.title}>Verify your number </Text>
          <View style={Style.Account}>
            <Text style={Style.AccountText}>
              Enter verification code send to your number{" "}
              <Text style={Style.AccountPhoneNumber}>{'+92' + mobileNumber}</Text>
            </Text>
          </View>
        </View>


        <PinCode ref={code} />


        <CustomButton
          text="Confirm "
          style={{ marginBottom: 10 }}
          onClick={CheckPin}
        />
      </View>
      {alert ? <Alert /> : <></>}
    </View>
  );
}
