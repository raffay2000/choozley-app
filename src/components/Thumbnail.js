import { StyleSheet, Text, View,ImageBackground,Pressable,Dimensions,TouchableOpacity } from "react-native";
import React,{useRef} from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AntDesign } from '@expo/vector-icons';

const Thumbnail = ({decs,price,imageSource,onPress1}) => {
  const {width,height } = Dimensions.get("window")
  const CustomImage = ({ source, onPress }) => {
    const imageRef = useRef();
    const onImagePress = () => {
      imageRef.current?.measure?.((x, y, width, height, pageX, pageY) => {
        onPress &&
          onPress(source.uri, { width, height, pageX, pageY, borderRadius: 10 });
      });
    };
    return (
      <>
        <Pressable onPress={onImagePress}>
          <ImageBackground ref={imageRef} source={source} style={{height:"100%"}} />
        </Pressable>
      </>
    );
  };
  return (
    <View style={styles.component}>
      <View style={{ flex: 2 }}>
        <Pressable onPress={onPress1}>
        <ImageBackground
          source={imageSource}
          style={{ height: "100%"}}
        >
            <View style={{flexDirection:"row",justifyContent:"space-between" ,paddingHorizontal:10,paddingTop:5}}>
            <AntDesign name="star" size={18} color="#D1D112" />
            <AntDesign name="heart" size={18} color="#D4D1D1" />
            </View>
        </ImageBackground>
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
