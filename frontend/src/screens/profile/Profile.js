import { Text, View, Pressable, Image } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import Style from "./Style";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from '../../store/actions/AppActions';
import { normalize } from "../../styles/Style";
import Theme from "../../styles/Theme";

function Profile({ navigation }) {
    const { name } = useSelector(({ appSlice }) => appSlice);
    const dispatch = useDispatch();

    return (
        <View style={Style.container}>
            <View style={Style.header} >
                <View style={Style.headerTop} >
                    <AntDesign name="home" size={normalize(24)} color={Theme.color.primary} />
                    <Text style={Style.headerTopText} >Profile</Text>
                </View>
                <View style={Style.headerProfile}>
                    <Image
                        style={Style.headerProfileImage}
                        source={{
                            uri: "https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Pigeon.jpg",
                        }}
                        resizeMode="cover"
                    />

                    <Text style={Style.headerProfileText} >{name}</Text>
                </View>
            </View>
            {/* <Pressable onPress={() => { dispatch(logOut()) }}>
                <Text>Log out</Text>
            </Pressable>
            <View>
                <Text>{name}</Text>
            </View> */}
            <View style={Style.dividerView} >
                <View style={Style.divider} >
                </View>
            </View>
            <View style={Style.list}>
                <View style={Style.item}>
                    <View style={Style.itemLeft} onPress={() => { console.log("first") }}>
                        <Feather name="edit" size={normalize(20)} color={Theme.color.black} />
                        <Text style={[{ color: Theme.color.black }, Style.itemText]} >Profile</Text>
                    </View>
                    <Pressable onPress={() => { console.log("goto") }} >
                        <AntDesign name="right" size={normalize(20)} color={Theme.color.black} />
                    </Pressable>

                </View>
                <View style={Style.item}>
                    <View style={Style.itemLeft} onPress={() => { console.log("first") }}>
                        <Feather name="settings" size={normalize(20)} color={Theme.color.black} />
                        <Text style={[{ color: Theme.color.black }, Style.itemText]} >Setting</Text>
                    </View>
                    <Pressable onPress={() => { console.log("goto") }} >
                        <AntDesign name="right" size={normalize(20)} color={Theme.color.black} />
                    </Pressable>
                </View>
                <View style={Style.item}>
                    <View style={Style.itemLeft} onPress={() => { console.log("first") }}>
                        <Feather name="help-circle" size={normalize(20)} color={Theme.color.black} />
                        <Text style={[{ color: Theme.color.black }, Style.itemText]} >Help Center</Text>
                    </View>
                    <Pressable onPress={() => { console.log("goto") }} >
                        <AntDesign name="right" size={normalize(20)} color={Theme.color.black} />
                    </Pressable>
                </View>
            </View>
            <View style={Style.dividerView} >
                <View style={Style.divider} >
                </View>
            </View>
            <View style={Style.list}>
                <View style={Style.item}>
                    <Pressable style={Style.itemLeft} onPress={() => { dispatch(logOut()) }}>
                        <AntDesign name="logout" size={normalize(20)} color={Theme.color.red} />
                        <Text style={[{ color: Theme.color.red }, Style.itemText]} >Logout</Text>
                    </Pressable>
                    {/* <AntDesign name="right" size={normalize(26)} style={{ color: Theme.color.black }} /> */}
                </View>
            </View>
        </View>
    );
}

export default Profile;