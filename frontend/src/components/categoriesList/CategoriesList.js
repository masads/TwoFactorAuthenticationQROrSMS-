import Theme from "../../styles/Theme";
import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import CategoryChipButton from "../categoryChipButton/CategoryChipButton";

function CategoriesList({ data }) {
  return (
    <FlashList
      onScroll={(event) => {
        console.log(event.nativeEvent.contentOffset.x);
      }}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      horizontal={true}
      data={data}
      renderItem={({ item, index }) => (
        <CategoryChipButton title={item.title} />
      )}
      estimatedItemSize={20}
    />
  );
}



export default CategoriesList;
