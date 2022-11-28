import MainApp from "./src/MainApp";
import "react-native-gesture-handler";
import { connectToDevTools } from "react-devtools-core";
import { Provider } from "react-redux";
import { store } from "./src/store/Store";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Style from "./src/styles/Style";
import Theme from "./src/styles/Theme";
import { useFonts } from 'expo-font';
import { useEffect, useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { View } from "react-native";
connectToDevTools({
  host: "localhost",
  port: 8097,
});

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <View style={Style.container} onLayout={onLayoutRootView}>
      <StatusBar animated={true} backgroundColor={Theme.color.seconday} />
      <Provider store={store}>
        <MainApp />
      </Provider>
    </View>
  );
}
