

import Theme from "../../styles/Theme";
import { Pressable, Text, View, Image, Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/actions/AppActions";
import { appSlice } from "../../store/slices/AppSlice";
import { Fontisto, Ionicons, Feather } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import ProductFeed from "../../components/productFeed/ProductFeed";
import ProductCard2 from "../../components/productCard2/ProductCard2";
import Style from "./Style";
import CategoriesList from "../../components/categoriesList/CategoriesList";
import LocationSelector from "../../components/locationSelector/LocationSelector";

export default function Home() {
  const categories = [
    { title: "Trending" },
    { title: "Tools" },
    { title: "Kitchen" },
    { title: "Beauty" },
    { title: "Gaming" },
    { title: "School" },
  ];

  const dispatch = useDispatch();
  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <Fontisto name="nav-icon-grid-a" size={24} color={Theme.color.primary} />
        <Text style={Style.headerText}>RENTAP</Text>
        <Feather name="search" size={24} color={Theme.color.primary} />
      </View>
      <View style={Style.categoriesWrapper}>
        <View style={Style.categoriesHeader}>
          <Text style={Style.categoriesHeaderTextLeft}>
            Browse by categories
          </Text>
          <Text style={Style.categoriesHeaderTextRight}>View All</Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <CategoriesList data={categories} />
        </View>
      </View>
      <View >
        <LocationSelector />
      </View>
      <View style={{ marginTop: 5, flex: 1 }}>
        <ProductFeed data={categories} />
      </View>
    </View>
  );
}
