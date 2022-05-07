import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import {Button}from "../components/Button"

const WindowsWidth = Dimensions.get("window").width;
const Home = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Images/Rectangle.png")}
        style={styles.Rectangle}
      >
        <Image
          source={require("../../assets/Images/Group280.png")}
          style={styles.group}
        />
      </ImageBackground>
      <View style={styles.lowContainer}>
        <Image source={require("../../assets/Images/Choozley.png")} style={styles.logo}  />
        <Text style={{fontSize:22,fontWeight:"700",marginTop:27}}>Log In Or Sign Up</Text>
        <Text style={[styles.text,{width:200}]}>
          Log in to your existing account or Sign up as a User or a Freelancer
        </Text>
        <Button color={"#323B6E"} style={styles.btn} text={"Login"} textColor={'white'} textStyle={'bold'} onPress={()=>{navigation.navigate('Login')}}/>
        <Button color={"#EB6060"} style={styles.btn} text={"Sign Up"} textColor={"white"} textStyle={'bold'}  onPress={()=>{navigation.navigate('SignUp')}}/>
    <View style={{flexDirection:"row",width:180,justifyContent:"space-between",marginTop:20}}>
        <Text style={styles.text}>Privacy Policy</Text>
        <Text style={styles.text}>Terms Of Service</Text>

    </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"#323B6E",
    // justifyContent:'center',
    // alignItems:'center'
  },
  Rectangle: {
    width: WindowsWidth,
    height: 338,
    resizeMode: "contain",
    alignItems: "center",
    // justifyContent: "center",
  },
  group: {
    width: 321,
    height: 180,
    resizeMode: "contain",
    position:"absolute",
    bottom:50
  },
  lowContainer: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  logo:{
    width:232,
    height:50,
    resizeMode:"contain"
  },
  btn:{
    height:48,width:343,marginTop:20
  },
  text:{
    textAlign:"center",
    // width:200,
    fontSize:11,
    marginTop:6,
    color:"#6A6A6A"

  }
});
