import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { removeItem } from "../persist-storage";
import { AuthContext } from "../context";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Textarea } from "../components/Textarea";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Thumbnail from "../components/Thumbnail";

// import {
//   SharedElement
// } from "react-navigation-shared-element";

const WindowsWidth = Dimensions.get("window").width;

const Welcome = ({ navigation }) => {
  // const context = useContext(AuthContext);
  // const Logout = async () => {
  //   await removeItem("user");
  //   await removeItem("token");
  //   context.updateState();
  // };
 const uid = 0
  return (
    <>
      <ImageBackground style={styles.imageBackground}>
        <View style={styles.searchArea}>
          <View>
            <Textarea
              borderRadius={100}
              color={"white"}
              height={hp("4.8%")}
              width={hp("32%")}
              placeholder={"Search services"}
              placeholderColor={"#BBBCC5"}
              textSize={10}
            />
          </View>
          <View>
            <FontAwesome name="filter" size={16} color="white" />
          </View>
          <View>
            <Ionicons name="notifications" size={16} color="white" />
          </View>
        </View>
        <View style={styles.header}>
          <View>
            <Text style={{ color: "white", fontSize: 22, width: hp("19%") }}>
              Hire the Digital Pros
            </Text>
            <Text style={{ color: "#BBBCC5", fontSize: 10 }}>
              view services
            </Text>
          </View>
          <View>
            <Image
              source={require("../../assets/Images/Group1.png")}
              style={styles.imageStyle}
            />
          </View>
        </View>
      </ImageBackground>
      <View
        style={styles.container}
      >
        <View style={styles.heading}>
          <Text style={styles.Text}>Digital Services</Text>
          <Text style={{ fontSize: 12, color: "#323B6E", fontWeight: "bold" }}>
            view all
          </Text>
        </View>
        <ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Manage Jobs",{uid});
              }}
            >

                <Thumbnail
                  decs={
                    "I will create minimalist and business logo design for you"
                  }
                  price={"$200"}
                  imageSource={require("../../assets/Images/MaskGroup.png")}
                />
               
            </TouchableOpacity>

            <TouchableOpacity>
              <Thumbnail
                decs={
                  "I will create minimalist and business logo design for you"
                }
                price={"$300"}
                imageSource={require("../../assets/Images/MaskGroup10.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Thumbnail
                decs={
                  "I will create minimalist and business logo design for you"
                }
                price={"$300"}
                imageSource={require("../../assets/Images/MaskGroup12.png")}
              />
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.heading}>
            <Text style={styles.Text}>Local Services</Text>
            <Text
              style={{ fontSize: 12, color: "#323B6E", fontWeight: "bold" }}
            >
              view all
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <Thumbnail
                decs={
                  "I will create minimalist and business logo design for you"
                }
                price={"$200"}
                imageSource={require("../../assets/Images/MaskGroup.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Thumbnail
                decs={
                  "I will create minimalist and business logo design for you"
                }
                price={"$300"}
                imageSource={require("../../assets/Images/MaskGroup11.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Thumbnail
                decs={
                  "I will create minimalist and business logo design for you"
                }
                price={"$300"}
                imageSource={require("../../assets/Images/MaskGroup1000.png")}
              />
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
        {/* <Text style={{ fontSize: 20 }}> Welcome </Text>
        <Button
          color={"red"}
          style={{ width: 100, height: 30 }}
          text={"Logout"}
          textStyle={"bold"}
          textSize={16}
          onPress={() => {
            Logout();
          }}
        /> */}
      </View>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  // container: {

  // },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  imageBackground: {
    backgroundColor: "#323B6E",
    width: WindowsWidth,
    flex: 2,
    borderBottomEndRadius: hp("5%"),
    borderBottomStartRadius: hp("5%"),
    justifyContent: "flex-end",
  },
  imageStyle: {
    height: hp("18%"),
    width: hp("18%"),
  },
  searchArea: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "relative",
    top: -10,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  Text: {
    fontSize: 15,
    color: "#323B6E",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});
