import { Text, View, Pressable, Image, Switch } from "react-native";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Style from "./Style";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from '../../store/actions/AppActions';
import { normalize } from "../../styles/Style";
import Theme from "../../styles/Theme";
import { changeAuthType } from "../../store/actions/AppActions"

function Profile({ navigation }) {
    const { name, type } = useSelector(({ appSlice }) => appSlice);
    const dispatch = useDispatch();


    const toggleSwitch = () => {
        console.log("google")
        if (type == 'otp') {
            dispatch(changeAuthType("qr"));
        } else {
            dispatch(changeAuthType("otp"));
        }
    };

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
            <View style={Style.dividerView} >
                <View style={Style.divider} >
                </View>
            </View>
            <View style={Style.list}>
                <View style={Style.item}>
                    <View style={Style.itemLeft} >
                        <MaterialCommunityIcons name="two-factor-authentication" size={normalize(20)} color={Theme.color.black} />
                        <Text style={[{ color: Theme.color.black }, Style.itemText]} >{type.toUpperCase()}</Text>
                    </View>

                    <View style={{ marginLeft: 5 }} >
                        <Switch
                            trackColor={{ false: Theme.color.lightGray, true: Theme.color.primaryLite }}
                            thumbColor={type == 'qr' ? Theme.color.primary : Theme.color.gray}
                            onValueChange={toggleSwitch}
                            value={type == 'qr'}

                        />
                    </View>
                </View>
                <View style={Style.item}>

                    <View style={Style.itemLeft} >
                        <Feather name="edit" size={normalize(20)} color={Theme.color.black} />
                        <Text style={[{ color: Theme.color.black }, Style.itemText]} >Profile</Text>
                    </View>
                    <Pressable onPress={() => { console.log("goto") }} >
                        <AntDesign name="right" size={normalize(20)} color={Theme.color.black} />
                    </Pressable>

                </View>
                <View style={Style.item}>
                    <View style={Style.itemLeft} >
                        <Feather name="settings" size={normalize(20)} color={Theme.color.black} />
                        <Text style={[{ color: Theme.color.black }, Style.itemText]} >Setting</Text>
                    </View>
                    <Pressable onPress={() => { console.log("goto") }} >
                        <AntDesign name="right" size={normalize(20)} color={Theme.color.black} />
                    </Pressable>
                </View>
                <View style={Style.item}>
                    <View style={Style.itemLeft} >
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