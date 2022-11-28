import { StyleSheet } from "react-native";
import { normalize } from "../../styles/Style";
import Theme from "../../styles/Theme";

export default StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: Theme.color.seconday,
        alignItems: "center",
    },
    title: {
        fontSize: normalize(24),
        fontFamily: "Poppins-Bold",
        color: Theme.color.black,
    }
});
