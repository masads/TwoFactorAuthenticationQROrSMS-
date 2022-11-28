import { StyleSheet } from "react-native";
import { call } from "react-native-reanimated";
import { normalize } from "../../styles/Style";
import Theme from "../../styles/Theme";

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
  signin: {
    color: Theme.color.primary,
    fontSize: normalize(14),
    fontFamily: "Poppins"
  },
  register: {
    paddingTop: 10,
    width: "100%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

  },
  inputs: {
    width: "80%",
  },
  acceptTerms: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    width: "100%",

  },
  acceptTermsText: {
    color: Theme.color.black,
    paddingLeft: 5,
    fontSize: normalize(12),
    fontFamily: "Poppins",
    paddingTop: 5
  }
});
