import Theme from "../../styles/Theme";
import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { normalize } from "../../styles/Style";

function CategoryChipButton({ title }) {
  return (
    <Pressable>
      <View
        style={{
          borderColor: Theme.color.primary,
          borderWidth: 2,
          borderRadius: 120,
          paddingHorizontal: 20,
          // paddingVertical: 12,
          paddingTop: 8,
          paddingBottom: 5,
          backgroundColor: "rgba(13, 205, 170, 0.1)",
        }}
      >
        <Text style={{ color: Theme.color.primary, fontFamily: "Poppins-Medium", fontSize: normalize(12) }}>{title}</Text>
      </View>
    </Pressable>
  );
}

export default CategoryChipButton;
