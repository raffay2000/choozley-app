import { StyleSheet, Text, View,ImageBackground,Pressable,Dimensions,TouchableOpacity } from "react-native";
import React,{useRef} from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AntDesign } from '@expo/vector-icons';
import CustomImage from "./ImageAnimation";

const Thumbnail = ({decs,price,imageSource,onPress1}) => {
  // const {width,height } = Dimensions.get("window")
  return (
    <View style={styles.component}>
      <View style={{ flex: 2 }}>
        <Pressable onPress={onPress1}>
        <CustomImage
          source={imageSource}
          onPress={onPress1}
          imageStyle={{height:100,width:150}}
          // style={{ height: "100%"}}
        />
            {/* <View style={{flexDirection:"row",justifyContent:"space-between" ,paddingHorizontal:10,paddingTop:5}}>
            <AntDesign name="star" size={18} color="#D1D112" />
            <AntDesign name="heart" size={18} color="#D4D1D1" />
            </View> */}
        {/* </CustomImage> */}
        </Pressable>
        
      </View>
      <View style={{ flex: 1.5, backgroundColor: "white" }}>
        <Text style={{ fontSize: 12, textAlign: "center", marginVertical: 10 }}>
          {decs}
        </Text>
        <View
          style={{
            width: hp("17%"),
            height: hp("0.1%"),
            backgroundColor: "black",
            alignSelf: "center",
          }}
        />
        <Text style={{textAlign: "center", marginVertical: 7,fontWeight:"bold"}}>
          Starting from {price}
        </Text>
      </View>
    </View>
  );
};

export default Thumbnail;

const styles = StyleSheet.create({
  component: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#F1EEEE",
    height: hp("27%"),
    width: hp("25%"),
    margin:8
  },
});
