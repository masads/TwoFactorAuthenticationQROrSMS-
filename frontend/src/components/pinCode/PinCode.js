import {
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";
import { Keyboard, StyleSheet, TextInput, View } from "react-native";

import Theme from "../../styles/Theme";

const PIN_LENGTH=4;

function PinCode({ styles }, ref) {
  const [active,setActive]=useState(0);
  const [value, setValue] = useState(new Array(PIN_LENGTH));
  useImperativeHandle(
    ref,
    () => ({
      getValue: () => value.join(""),
    }),
    [value]
  );
  const pin = [];
  for (let i = 0; i < PIN_LENGTH; i++) {
    pin.push(useRef());
  }

  const onChangeBox = (e, index) => {
    if (index != pin.length - 1 && index >= 0 && e.length > 0) {
      pin[index + 1].current.focus();
    }
    let temp = Object.assign(value);
    temp[index] = e;
    setValue(temp);
    if(index==PIN_LENGTH-1 && e.length != 0)
    {
      Keyboard.dismiss()
    }
  };
  const DeletePin = (e, index) => {
    
    if (e.nativeEvent.key === "Backspace" && index > 0) {
      pin[index - 1].current.focus();
    }
  };

  return (
    <View style={[Style.container, styles]}>
      {pin.map((_, index) => {
        
        return (
          <View style={[Style.box,active==index?Style.active:{}]} key={index}>
            <TextInput
              autoFocus={index == 0}
              ref={pin[index]}
              keyboardType="number-pad"
              maxLength={1}
              style={Style.pin}
              placeholder="-"
              placeholderTextColor={Theme.color.gray}
              onChangeText={(e) => {
                setActive();
                onChangeBox(e, index);
              }}
              onKeyPress={(e) => {
                DeletePin(e, index);
              }}
              onFocus={(e)=>{setActive(index)}}
            />
          </View>
        );
      })}
    </View>
  );
}

const Style = StyleSheet.create({
  container: { display: "flex", flexDirection: "row" },
  box: {
    marginHorizontal: 8 / 2,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    borderColor:Theme.color.seconday,
    borderWidth:2
  },
  active:{
    borderRadius: 10,
    borderColor:Theme.color.primary,
    borderWidth:2
  },
  pin: {
    fontSize: 30,
    textAlign: "center",
  },
});
export default forwardRef(PinCode);
