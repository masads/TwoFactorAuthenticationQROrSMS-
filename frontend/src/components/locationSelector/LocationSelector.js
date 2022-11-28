import Theme from "../../styles/Theme";
import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { normalize } from "../../styles/Style";

function LocationSelector() {
  return (
    <>
      <Text style={{ color: Theme.color.gray }}>Find products in</Text>
      <Pressable
        onPress={() => {
          console.log("Button Pressed");
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather name="map-pin" size={normalize(14)} color={Theme.color.gray} style={{ paddingBottom: 5 }} />
          <Text
            style={{
              fontSize: normalize(16),
              color: Theme.color.black,
              paddingHorizontal: 4,
              fontFamily: "Poppins-Medium",
            }}
          >
            Karachi
          </Text>
          <Feather name="chevron-down" size={normalize(16)} color={Theme.color.black} />
        </View>
      </Pressable>
    </>
  );
}

export default LocationSelector;
