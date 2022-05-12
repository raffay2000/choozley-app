import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {Textarea} from "./Textarea"
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
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
            <FontAwesome name="filter" size={20} color="white" />
          </View>
          <View>
            <Ionicons name="notifications" size={20} color="white" />
          </View>
        </View>
      </View>
      
  );
}

const styles = StyleSheet.create({
 
   header: {
    backgroundColor: "#323B6E",
    height: hp("17%"),
    borderBottomLeftRadius: hp("4%"),
    borderBottomRightRadius: hp("4%"),
  },
  searchArea: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "relative",
    bottom: -70,
  },
});