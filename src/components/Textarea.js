import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export const Textarea = ({
  color,
  style,
  text,
  icon,
  placeholder,
  placeholderColor,
  width,
  borderWidth,
  borderColor,
  textSize,
  height,
  borderRadius,
  value,
  onChangeText,
  OnSubmitPress,
  inputRef,
}) => {
  return (
    <>
      <View style={style}>
        {/* <Text
          style={{
            color: "black",
            alignSelf: "flex-start",
            marginLeft: 10,
            marginBottom: 6,
            fontSize:textSize
          }}
        >
          {text}
        </Text> */}
        <TextInput
        ref={inputRef}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={OnSubmitPress}
          style={[
            styles.textInputStyle,
            { backgroundColor: color, padding: 12,width:width,borderWidth:borderWidth ,borderColor:borderColor,height:height,borderRadius:borderRadius},
          ]}
        />
        <View style={styles.icon}>
            {icon}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: "#0C1326",
    width: 327,
    height: 54,
    borderRadius: 12,
  },
  icon:{
    position:"relative",
    alignItems:"flex-end",
    top:-36,
    right:20
  }
});
