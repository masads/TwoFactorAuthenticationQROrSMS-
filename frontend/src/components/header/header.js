import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import Theme from "../../styles/Theme";

function Header({navigation}) {
  
  return (
    <View style={Style.header}>
        
    <Ionicons
      name="arrow-back-outline"
      size={24}
      color={Theme.color.black}
      onPress={navigation.goBack}
    />

    </View>
  )
}

const Style = StyleSheet.create({
    header: {
        display:"flex",
        alignSelf:"flex-start",
        paddingHorizontal:30,
        paddingTop:40,
    },
});

export default Header;
