import { useState, useImperativeHandle, forwardRef } from "react";
import { Keyboard, Text, StyleSheet, TextInput, View } from "react-native";
import { normalize } from "../../styles/Style";

import Theme from "../../styles/Theme";

function InputWithLabel(
  {
    keyboardType = "default",
    placeholder,
    label,
    type,
    styles,
    secureTextEntry = false,
  },
  ref
) {
  const [value, setValue] = useState("");
  useImperativeHandle(
    ref,
    () => ({
      getValue: () => value,
    }),
    [value]
  );
  return (
    <View style={[Style.container, styles]}>
      <Text style={Style.label}>{label}</Text>
      <TextInput
        style={Style.input}
        onChangeText={(e) => setValue(e)}
        value={value}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onSubmitEditing={Keyboard.dismiss}
      />
    </View>
  );
}

const Style = StyleSheet.create({
  container: {},
  label: {
    color: Theme.color.black,
    marginBottom: 5,
    fontSize: normalize(14),
    fontFamily: "Poppins",
    paddingTop: 5
  },
  input: {
    // borderWidth:1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Theme.color.lightGray,
    borderRadius: 10,
    fontSize: normalize(14),
    color: Theme.color.gray,
    fontFamily: "Poppins",
  },
});
export default forwardRef(InputWithLabel);
