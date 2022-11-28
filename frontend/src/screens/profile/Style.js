import { StyleSheet } from "react-native";
import { normalize } from "../../styles/Style";
import Theme from "../../styles/Theme";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.color.seconday,
    },
    header: {
        display: "flex",

        padding: 20,
        // justifyContent: "center",
        // alignItems: "flex-start",
    },
    headerTop: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

    },
    headerTopText: {
        paddingLeft: 10,
        fontSize: normalize(20),
        // fontWeight: "bold",
        color: Theme.color.black,
        fontFamily: "Poppins-SemiBold",
        paddingTop: 5
    },
    headerProfile: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    headerProfileImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    headerProfileText: {
        fontSize: normalize(18),
        color: Theme.color.black,
        fontFamily: "Poppins-SemiBold",
        paddingTop: 10,
    },
    list: {
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 40
    },
    item: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 15
    },
    itemLeft: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    itemText: {
        fontSize: normalize(15),
        paddingLeft: 10,
        fontFamily: "Poppins-Medium",
        paddingTop: 3,
    },
    dividerView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 15
    },
    divider: {
        borderBottomColor: Theme.color.lightGray,
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: "80%",
    }
});