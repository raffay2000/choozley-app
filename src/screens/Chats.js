import {
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import React, { useEffect, useRef } from "react";
import Colors from "../../assets/colors/index";
import * as Animatable from "react-native-animatable";
import SearchArea from "../components/SearchArea";
import Thumbnail from "../components/Thumbnail";


const Chats = ({ navigation }) => {
  const viewRef = useRef(null);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      viewRef.current.animate({
        0: { opacity: 0,translateY:1000,fade:0.5 },
        0.3: { opacity: 0.3,translateY:800 },
        0.5: { opacity: 0.5,translateY:600  },
        0.8: { opacity: 0.7,translateY:300},
        1: { opacity: 1, translateY:0,fade:1 },
      });
    });
    return () => unsubscribe;
  }, [navigation]);
  return (
    <View style={[Styles.container]}>
      <SearchArea />
      <Animatable.View
        ref={viewRef}
        easing={"ease-in"}
        duration={1000}
        style={Styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:"row",flexWrap:"wrap"}}>
        <Thumbnail imageSource={require("../../assets/Images/MaskGroup10.png")}/>
        <Thumbnail imageSource={require("../../assets/Images/MaskGroup100.png")}/>
        <Thumbnail imageSource={require("../../assets/Images/MaskGroup100.png")}/>
        <Thumbnail imageSource={require("../../assets/Images/MaskGroup1000.png")}/>
        <Thumbnail imageSource={require("../../assets/Images/MaskGroup11.png")}/>
        <Thumbnail imageSource={require("../../assets/Images/MaskGroup12.png")}/>
        <Thumbnail imageSource={require("../../assets/Images/MaskGroup1000.png")}/>
        </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Chats;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    height: 0.3,
    width: "100%",
    backgroundColor: Colors.gray,
    opacity: 0.8,
  },
  boldText: {
    fontWeight: "bold",
  },
  contentContainerStyle: {
    paddingBottom: 200,
  },
  contentContainerStyle2: {
    paddingBottom: 100,
  },
});
