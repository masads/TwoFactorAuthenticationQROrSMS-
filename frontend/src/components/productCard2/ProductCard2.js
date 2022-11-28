import Theme from "../../styles/Theme";
import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { normalize } from "../../styles/Style";

function ProductCard2() {
  return (
    <Pressable>
      <View
        style={{
          backgroundColor: Theme.color.lightGray,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            height: 150,
          }}
        >
          <Text
            style={{
              zIndex: 10,
              padding: 5,
              borderRadius: 20,
              top: 5,
              right: 5,
              color: "white",
              position: "absolute",
              alignSelf: "center",
              backgroundColor: Theme.color.primary,
              fontFamily: "Poppins-Medium",
              fontSize: normalize(10),
              paddingTop: 8
            }}
          >
            Sponsored
          </Text>

          <Image
            style={{
              flex: 1,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Pigeon.jpg",
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15,
            flex: 1,
          }}
        >
          <View style={{ flex: 1, justifyContent: "space-between", }}>
            <Text style={{ color: Theme.color.gray, fontSize: normalize(12), fontFamily: "Poppins" }} numberOfLines={1} >Fri, Apr 22 · 21.00 Pm</Text>
            <Text
              style={{
                fontSize: normalize(15),
                fontFamily: "Poppins-SemiBold",
                color: Theme.color.black,

              }}
              numberOfLines={1}
            >
              4-workweek 2nd Edition
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="map-pin" size={normalize(14)} color={Theme.color.black} style={{ paddingBottom: 3 }} />
              <Text style={{ paddingLeft: 5, fontSize: normalize(12), fontFamily: "Poppins", color: Theme.color.black }} numberOfLines={1}>DHA phase 1,Karachi</Text>
            </View>
          </View>
          <View style={{ justifyContent: "space-between" }}>
            <Text
              style={{
                color: Theme.color.primary,
                fontSize: normalize(16),
                fontFamily: "Poppins-SemiBold",
              }}
            >
              400 Pkr
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Feather
                style={{ paddingRight: 10, paddingBottom: 3 }}
                name="heart"
                size={normalize(16)}
                color={Theme.color.gray}
              />
              <Feather name="share-2" size={normalize(16)} color={Theme.color.gray} />
            </View>
          </View>
        </View>
      </View>
    </Pressable >
  );
}

export default ProductCard2;
