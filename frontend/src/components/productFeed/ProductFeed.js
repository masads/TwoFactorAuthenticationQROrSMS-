import { View, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import ProductCard from "../productCard/ProductCard";
import ProductCard2 from "../productCard2/ProductCard2";
import { normalize } from "../../styles/Style";

function ProductFeed({ data }) {
  return (
    <FlashList
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      data={data}
      estimatedItemSize={normalize(16)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => index == 0 ? <ProductCard2 /> : <ProductCard />}
    />
  );
}

export default ProductFeed;
