import React from "react";
import { View, Text, StyleSheet, TouchableOpacity ,ActivityIndicator} from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const Button = ({
  color,
  style,
  textColor,
  text,
  onPress,
  textStyle,
  textSize,
  textalign,
  borderWidth,
  borderColor,
  loader
}) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: color,borderWidth:borderWidth,borderColor:borderColor }, style]}
        onPress={onPress}
      >
        {loader 
            ?
            <ActivityIndicator color={'white'}/>
            :
            <Text
              style={{
                color: textColor,
                fontSize: textSize,
                fontWeight: textStyle,
              }}
            >
              {text}
            </Text>
        }
       
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "80%",
    height: "7%",
    backgroundColor: "#C63520",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
