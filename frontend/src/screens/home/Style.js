import { StyleSheet } from "react-native";
import Theme from "../../styles/Theme";
import { normalize } from "../../styles/Style"
export default StyleSheet.create({
  container: { flex: 1, paddingVertical: 40, paddingHorizontal: 20, backgroundColor: Theme.color.seconday, },
  header: { flexDirection: "row", justifyContent: "space-between", },
  headerText: { color: Theme.color.primary, fontSize: normalize(16), fontFamily: "Poppins-SemiBold", },
  categoriesWrapper: { paddingVertical: 10 },
  categoriesHeader: { flexDirection: "row", justifyContent: "space-between" },
  categoriesHeaderTextLeft: { fontSize: normalize(15), fontFamily: "Poppins-Medium", color: Theme.color.black },
  categoriesHeaderTextRight: {
    color: Theme.color.primary,
    fontSize: normalize(14), fontFamily: "Poppins-Medium",
    textDecorationLine: "underline",
  },
});
