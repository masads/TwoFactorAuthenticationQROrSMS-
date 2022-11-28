import { StyleSheet, KeyboardAvoidingView } from "react-native";
import AppNavigation from "./navigation/AppNavigation";
import AuthNavigation from "./navigation/AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getToken } from "./store/actions/AppActions";
import Splash from "./screens/slpash/Splash";
import Theme from "./styles/Theme";

export default function MainApp() {
  const { loading, token } = useSelector(({ appSlice }) => appSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToken())
  }, [])
  if (loading) return <Splash />;
  return (
    <NavigationContainer>
      {token ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}

