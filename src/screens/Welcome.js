import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Textarea } from "../components/Textarea";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Thumbnail from "../components/Thumbnail";
import CustomImage from "../components/ImageAnimation";

const WindowsWidth = Dimensions.get("window").width;

const Welcome = ({ navigation }) => {
  const onImagePress = (uri, imageSpecs) => {
    console.log("uri", uri, "imageSpecs", imageSpecs);
    navigation.navigate("Manage Jobs", {
      uri,
      imageSpecs,
    });
  };
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
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.Text}>Digital Services</Text>
          <Text style={{ fontSize: 12, color: "#323B6E", fontWeight: "bold" }}>
            view all
          </Text>
        </View>
        <ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CustomImage
              onPress={onImagePress}
              source={{uri:"https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300"}}
              // style={{
              //   position: "absolute",
              //   height: 110,
              //   width: 170,
              //   left: 10,
              //   top: 20,
              // }}
            />
            <Thumbnail
              decs={"I will create minimalist and business logo design for you"}
              price={"$200"}
              // imageSource={require("../../assets/Images/MaskGroup.png")}
              // onPress1={onImagePress}
            />
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
              View all
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
