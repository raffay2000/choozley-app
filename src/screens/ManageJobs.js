import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import SearchArea from "../components/SearchArea";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ShowText from "../components/ShowText";
import * as Animatable from "react-native-animatable";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

const ManageJobs = ({ navigation ,route}) => {
  const {width} =Dimensions.get("window")
  const { uri,imageSpecs } = route.params;
  console.log(uri,imageSpecs)
  // console.log({ uri, imageSpecs });
  const anim = useSharedValue(0);
  useEffect(() => {
     //reset to zero
     anim.value = 0;
     //start animation
     anim.value = withTiming(1,{duration:1000});
  }, []);
  const imageContainerStyle = useAnimatedStyle(
    () => ({
      position: 'absolute',
      top: interpolate(anim.value, [0, 1], [imageSpecs.pageY, 50]),
      left: interpolate(anim.value, [0, 1], [imageSpecs.pageX, 0]),
      width: interpolate(anim.value, [0, 1], [imageSpecs.width, "95%"]),
      height: interpolate(anim.value, [0, 1], [imageSpecs.height, 200]),
    }),
    []
  );
  const [img, setImg] = useState({uri});
  return (
    <View >
      <SearchArea />
      <View
      >
        <ScrollView style={{marginBottom:250}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 15,
              paddingTop: 15,
            }}
          >
            <Text style={{ width: 220, fontSize: 20 }}>
              I Will Design Custom Minimalist Logo Design
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="heart" size={24} color="red" />
              <Entypo
                name="share"
                size={24}
                color="black"
                style={{ marginLeft: 15 }}
              />
            </View>
          </View>
          <Animated.View style={[
            styles.imageContainer, 
                imageContainerStyle
                ]}
                >
            {/* <Animatable.View style={[styles.imageContainer, 
                imageContainerStyle
                ]}> */}
              <Image
                source={img}
                style={{
                  height: 200,
                  width: "95%",
                  resizeMode: "stretch",
                  marginTop: 15,
                  borderRadius: 10,
                }}
              />
              {/* </Animatable.View> */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setImg(require("../../assets/Images/MaskGroup.png"));
                }}
              >
                <Image
                  source={require("../../assets/Images/MaskGroup10.png")}
                  style={{ height: 90, width: 120, borderRadius: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setImg(require("../../assets/Images/MaskGroup100.png"));
                }}
              >
                <Image
                  source={require("../../assets/Images/MaskGroup100.png")}
                  style={{
                    height: 90,
                    width: 120,
                    borderRadius: 10,
                    marginHorizontal: 5,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setImg(require("../../assets/Images/MaskGroup1000.png"));
                }}
              >
                <Image
                  source={require("../../assets/Images/MaskGroup1000.png")}
                  style={{ height: 90, width: 120, borderRadius: 10 }}
                />
              </TouchableOpacity>
            </View>
            <ShowText Text1={"Pricing"} Text2={"$ 200"} />
            <ShowText Text1={"Delivery"} Text2={"2/3 Days"} />
          </Animated.View>
          <View style={{ marginLeft: 15 }}>
            <Text
              style={{
                color: "#323B6E",
                fontSize: 15,
                marginTop: 15,
                marginBottom: 15,
                fontWeight: "bold",
              }}
            >
              About The Services
            </Text>
            <Text style={{ color: "#BBBCC5" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#BBBCC5",
                height: 1,
                width: 360,
                marginTop: 10,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              marginLeft: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18, color: "#323B6E" }}>Reviews</Text>
            <View
              style={{
                flexDirection: "row",
                marginRight: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#323B6E" }}>Total Reviews </Text>
              <Text style={{ color: "#323B6E" }}>
                <AntDesign name="star" size={24} color="#D1D112" /> 4.5
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ManageJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer:{
    alignItems:"center"
  }
});
