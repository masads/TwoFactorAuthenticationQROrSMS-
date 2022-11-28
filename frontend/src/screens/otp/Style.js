import { StyleSheet } from "react-native";
import { normalize } from "../../styles/Style";
import Theme from "../../styles/Theme";

export default StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    backgroundColor: Theme.color.seconday,
  },
  otp: {
    paddingTop: 10,
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Account: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 3,
    width: "80%",
    paddingTop: 5
  },
  title: {
    fontSize: normalize(24),
    fontFamily: "Poppins-Bold",
    color: Theme.color.black,

  },
  AccountText: {
    fontSize: normalize(14),
    fontFamily: "Poppins"
  },
  AccountPhoneNumber: {
    fontSize: normalize(14),
    fontFamily: "Poppins-SemiBold",
    color: Theme.color.black,
  },
});
