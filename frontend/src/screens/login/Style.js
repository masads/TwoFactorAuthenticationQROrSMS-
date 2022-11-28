import { StyleSheet } from "react-native";
import { call } from "react-native-reanimated";
import Theme from "../../styles/Theme";
import { normalize } from "../../styles/Style";
export default StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: Theme.color.seconday,

  },
  Account: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 3
  },
  title: {
    fontSize: normalize(24),
    display: "flex",
    flexDirection: "row",
    color: Theme.color.black,
    fontFamily: "Poppins-Bold"
  },
  AccountText: {
    fontSize: normalize(14),
    fontFamily: "Poppins"
  },
  signup: {
    color: Theme.color.primary,
    fontSize: normalize(14),
    fontFamily: "Poppins"
  },
  login: {
    paddingTop: 10,
    width: "100%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputs: {
    width: "80%",
  },
  remember: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    width: "80%",

  },
});
