import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Theme from "../styles/Theme";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { normalize } from '../styles/Style';



const Tab = createBottomTabNavigator();

const Tabs = [
  { route: 'Home', label: 'Home', component: Home, activeIcon: 'home', inActiveIcon: 'home-outline' },
  { route: 'MyProducts', label: 'My Products', component: Home, activeIcon: 'card-multiple', inActiveIcon: 'card-multiple-outline' },
  { route: 'Notifications', label: 'Notifications', component: Home, activeIcon: ['bell', 'bell-badge'], inActiveIcon: ['bell-outline', 'bell-badge-outline'], },
  { route: 'Profile', label: 'Profile', component: Profile, activeIcon: 'account-circle', inActiveIcon: 'account-circle-outline' },
]


const TabButton = (props) => {
  const [notification, setNotification] = useState(0);
  const { item, onPress, accessibilityState } = props
  const focused = accessibilityState.selected;
  const animatedIconScaleUp = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(focused ? 1 : 0.8, { duration: 250 })
        }
      ]
    }
  });

  useEffect(() => {
    if (item.route === "Notifications") {
      setNotification(0);//get value from selector and place it here 
    }
  }, [notification])
  return (
    <Pressable
      onPress={onPress}
      style={Style.container}
    >
      <Animated.View style={animatedIconScaleUp} >
        {item.route === "Notifications" ?
          <MaterialCommunityIcons name={focused ? notification > 0 ? item.activeIcon[1] : item.activeIcon[0] : notification > 0 ? item.inActiveIcon[1] : item.inActiveIcon[0]} color={focused ? Theme.color.primary : Theme.color.gray} size={normalize(24)} /> : <MaterialCommunityIcons name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? Theme.color.primary : Theme.color.gray} size={normalize(24)} />}

      </Animated.View>
    </Pressable >
  )
}
export default function AppNavigation() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: Style.tab,
      }}
    >
      {
        Tabs.map((item, index) => (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: true,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        ))
      }
    </Tab.Navigator>
  )
}


const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    left: 15,
    borderRadius: 15,
    height: 60,
    elevation: 50,
    borderTopWidth: 0
  }
});
