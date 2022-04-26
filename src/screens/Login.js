import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Textarea } from "../components/Textarea";
import { Button } from "../components/Button";

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/LoginImg.png")} style={styles.img} />
      <Textarea
        color={"#EEEEEE"}
        placeholder={"email address"}
        style={{ marginTop: 10 }}
        width={343}
        // height={49}
        icon={<Image source={require("../../assets/email.png")}/>}
      />
      <Textarea
        color={"#EEEEEE"}
        placeholder={"password"}
        width={343}
        // height={49}
        icon={<Image source={require("../../assets/lock.png")}/>}
      />
      <Button
        color={"#323B6E"}
        style={{
          marginTop: 10,
          width: 343,
          height: 55,
        }}
        text={"Login"}
        textColor={"white"}
        textStyle={"bold"}
        textSize={16}
        onPress={()=>{navigation.goBack()}}
      />
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity>
          <Text>Don't have an account ?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "#323B6E", fontWeight: "bold", marginLeft: 8 }}>
            Create account
          </Text>
        </TouchableOpacity>

      </View>
      
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  img: {
    marginTop: 68,
    width: 300,
    height: 300,
  },
});
