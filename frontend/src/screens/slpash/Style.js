import { StyleSheet } from "react-native";
import { normalize } from "../../styles/Style";
import Theme from "../../styles/Theme";

export default StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.color.primary
    },
    text: {
        fontSize: normalize(32),
        fontWeight: "bold",
        color: Theme.color.seconday,
    }
});