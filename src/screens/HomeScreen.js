import { StyleSheet, Text, View, ImageBackground,Dimensions } from "react-native";
import React from "react";

const WindowsWidth = Dimensions.get("window").width

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/Images/ChoozleyPic.png")}
      style={styles.Background}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

    Background:{
        width:WindowsWidth,
        height:"100%"
    }
});
