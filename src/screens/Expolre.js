import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Thumbnail from "../components/Thumbnail";
import SearchArea from "../components/SearchArea"
const Expolre = () => {

  return (
    <>
      <SearchArea/>
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
          <View  style={{ flexDirection: "row", flexWrap: "wrap" }}>
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
