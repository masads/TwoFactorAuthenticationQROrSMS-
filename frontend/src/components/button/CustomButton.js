import { Pressable, Text, StyleSheet } from "react-native";
import Reanimated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { normalize } from "../../styles/Style";
import Theme from "../../styles/Theme";

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

function CustomButton({ text, styles, Icon = false, onClick, bg = false }) {
  //animation
  const down = useSharedValue(0);
  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      top: down.value,
    };
  });
  const pressableOnPress = () => {
    down.value = 1;
  };
  const pressableOnPressOut = () => {
    down.value = 0;
  };
  //animation

  return (
    <ReanimatedPressable
      onPressIn={pressableOnPress}
      onPressOut={pressableOnPressOut}
      onPress={onClick}
      style={[
        bg ? Style.containerWithoutBackground : Style.containerWithBackground,
        buttonAnimationStyle,
        styles,
      ]}
    >
      {Icon ? Icon : <></>}
      <Text style={bg ? Style.textWithoutBackground : Style.textWithBackground}>
        {text}
      </Text>
    </ReanimatedPressable>
  );
}

const Style = StyleSheet.create({
  containerWithBackground: {
    width: "60%",
    backgroundColor: Theme.color.primary,
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 10,
    shadowColor: Theme.color.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  containerWithoutBackground: {
    alignItems: "center",
    width: "60%",
  },
  textWithBackground: {
    paddingTop: 5,
    fontFamily: "Poppins-Bold",
    fontSize: normalize(16),
    color: Theme.color.seconday,
  },
  textWithoutBackground: {
    paddingTop: 5,
    fontFamily: "Poppins-Bold",
    fontSize: normalize(16),
    color: Theme.color.primary,
  },
});

export default CustomButton;
