import Theme from "../../styles/Theme";
import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { normalize } from "../../styles/Style";

function ProductCard() {
  return (
    <Pressable>
      <View
        style={{
          flexDirection: "row",
          width: "100%"
        }}
      >
        <View
          style={{
            width: normalize(70),
            height: normalize(70),
          }}
        >
          <Image
            style={{
              flex: 1,
              borderRadius: 20,
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
            flex: 1
          }}
        >

          <View
            style={{
              justifyContent: "space-between",
              paddingLeft: 5,
              flex: 1
            }}
          >
            <Text numberOfLines={1} style={{ fontFamily: "Poppins", color: Theme.color.gray, fontSize: normalize(12) }} >Fri, Apr 22 · 21.00 Pm</Text>

            <View
              style={{
                flexDirection: "row",

              }}
            >
              <Text
                style={{
                  flex: 1,
                  fontSize: normalize(14),
                  // fontWeight: "bold",
                  color: Theme.color.black,
                  fontFamily: "Poppins-SemiBold"
                }}
                numberOfLines={1}
              >
                4-workweek sdjsdh djsd sdsdh
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Feather name="map-pin" size={normalize(13)} color={Theme.color.black} style={{ paddingTop: 2 }} />
              <Text style={{ paddingLeft: 5, fontSize: normalize(11), fontFamily: "Poppins" }} numberOfLines={1}>
                DHA phase 1, Karachi
              </Text>
            </View>
          </View>

          <View style={{ justifyContent: "space-between", paddingBottom: 5 }}>
            <Text
              style={{
                color: Theme.color.primary,
                fontSize: normalize(14),
                fontFamily: "Poppins-Bold",
                bottom: 2
              }}
            >
              400 Pkr
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Feather
                style={{ paddingRight: 10 }}
                name="heart"
                size={normalize(16)}
                color={Theme.color.gray}
              />
              <Feather name="share-2" size={normalize(16)} color={Theme.color.gray} />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default ProductCard;
