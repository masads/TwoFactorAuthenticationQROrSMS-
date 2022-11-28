import { Text, View } from "react-native";

import Style from "./Style";

function Splash({ navigation }) {

    return (
        <View style={Style.container}>
            <Text style={Style.text}>RENTAP </Text>
        </View>
    );
}

export default Splash;