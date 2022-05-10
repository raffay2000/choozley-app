import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Textarea } from "../components/Textarea";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Thumbnail from "../components/Thumbnail";

const Expolre = () => {
  return (
    <>
      <View style={styles.header}>
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
            <FontAwesome name="filter" size={24} color="white" />
          </View>
          <View>
            <Ionicons name="notifications" size={24} color="white" />
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: "#323B6E",
            fontSize: 18,
            fontWeight: "bold",
            margin: 5,
          }}
        >
          Popular Services
        </Text>
        <ScrollView>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Thumbnail
              decs={"I will create minimalist and business logo design for you"}
              price={"$300"}
              imageSource={require("../../assets/Images/MaskGroup.png")}
            />
            <Thumbnail
              decs={"I will create minimalist and business logo design for you"}
              price={"$300"}
              imageSource={require("../../assets/Images/MaskGroup10.png")}
            />
            <Thumbnail
              decs={"I will create minimalist and business logo design for you"}
              price={"$300"}
              imageSource={require("../../assets/Images/MaskGroup100.png")}
            />
            <Thumbnail
              decs={"I will create minimalist and business logo design for you"}
              price={"$300"}
              imageSource={require("../../assets/Images/MaskGroup1000.png")}
            />
          </View>
          <Text
            style={{
              color: "#323B6E",
              fontSize: 18,
              fontWeight: "bold",
              margin: 5,
            }}
          >
            Featured Services
          </Text>
          <View style={{flexDirection:"row",marginBottom:160}}>
            <Thumbnail
              decs={"I will create minimalist and business logo design for you"}
              price={"$300"}
              imageSource={require("../../assets/Images/MaskGroup11.png")}
            />
            <Thumbnail
              decs={"I will create minimalist and business logo design for you"}
              price={"$300"}
              imageSource={require("../../assets/Images/MaskGroup12.png")}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Expolre;

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "#323B6E",
    height: hp("16%"),
    borderBottomLeftRadius: hp("4%"),
    borderBottomRightRadius: hp("4%"),
  },
  searchArea: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "relative",
    bottom: -60,
  },
});
