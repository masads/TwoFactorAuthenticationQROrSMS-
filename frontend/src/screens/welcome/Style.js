import { StyleSheet } from "react-native";
import { normalize } from "../../styles/Style";
import Theme from "../../styles/Theme";

export default StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: Theme.color.seconday,

    },
    header: {
        alignItems: 'center',
    },
    headerTitle:
    {
        color: Theme.color.black,
        fontSize: normalize(26),
        // fontWeight: "bold"
        fontFamily: "Poppins-Bold"
    },
    headerTagLine: {
        fontSize: normalize(16),
        color: Theme.color.gray,
        fontFamily: "Poppins"
    },
    img: {
        width: "100%",
        height: "25%"
    },
    brand: {
        alignItems: 'center',
    },
    brandTitle:
    {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
    },
    brandTitleStart: {
        color: Theme.color.black,
        fontFamily: "Poppins-Bold",
        fontSize: normalize(20),
    },
    brandTitleEnd: {
        color: Theme.color.primary,
        fontSize: normalize(20),
        fontFamily: "Poppins-Bold"
    },
    brandTagLine: {
        fontSize: normalize(12),
        color: Theme.color.gray,
        fontFamily: "Poppins"
    },
    footer: {
        width: "100%",
        display: 'flex',
        alignItems: 'center',
    },
    footerText: {
        fontSize: normalize(8),
        fontFamily: "Poppins"
    }
});