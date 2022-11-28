import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Animated, { ZoomInEasyUp, ZoomOutEasyUp } from "react-native-reanimated";
import Theme from "../../styles/Theme";
import { authSlice } from "../../store/slices/AuthSlice";
import { normalize } from "../../styles/Style";

function Alert() {
  const dispatch = useDispatch();
  const { alert, alertMessage } = useSelector(({ authSlice }) => authSlice);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        dispatch(authSlice.actions.AlertOff());
      }, 5000);
    }
  }, [alert]);

  return (
    <Animated.View
      style={Style.container}
      entering={ZoomInEasyUp}
      exiting={ZoomOutEasyUp}
    >
      <Text style={Style.text}>{alertMessage + " "}</Text>
    </Animated.View>
  )
}

const Style = StyleSheet.create({
  container: {
    position: "absolute",
    alignSelf: "center",
    padding: 20,
    zIndex: 2,
    backgroundColor: Theme.color.red,
    width: "90%",
    alignItems: "center",
    top: 20,
    borderRadius: 20,
  },
  text: {
    color: Theme.color.seconday,
    fontSize: normalize(14),
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});

export default Alert;
