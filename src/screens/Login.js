import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Keyboard
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Textarea } from "../components/Textarea";
import { Button } from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { login, setEmail } from "../redux/Actions/RegisterAction";
import {AuthContext} from "../context/index";
import Toast from "react-native-toast-message"
import SnackBar from "../components/SnackBar";

const Login = ({ navigation }) => {
  let passRef;
  const { email,loading } = useSelector((state) => state.RegisterReducer);
  const [password, setPassword] = useState("");
  const [Err, setErr] = useState(false);
  const context = useContext(AuthContext);
  const dispatch = useDispatch();

  const Login1 = () => {
    Keyboard.dismiss();
    console.log(context)
    if(email && password){
        dispatch(login(
            email,
            password,
            context,
        ))
    }else{
      setErr(true)
        Toast.show({text1: "Enter Username and Password"})
    }
  };
  const GoToHome = () => {
    navigation.popToTop();
  };
  useEffect(async () => {
    // const user = JSON.parse(getItem("users"));
    // console.log("user", typeof user);
    // if (user) {
    //   setIsLoading(false)
    //   // navigation.navigate("Welcome", { email: user.email });
    //   dispatch(setIsSignIn(true))
    // }
    dispatch(setEmail(''))
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../assets/Images/LoginImg.png")}
          style={styles.img}
        />
        <Textarea
          color={"#EEEEEE"}
          placeholder={"email"}
          style={{ marginTop: 35 }}
          width={343}
          borderRadius={12}
          value={email}
          OnSubmitPress={()=>passRef.focus()}
          onChangeText={(e) => {
            dispatch(setEmail(e));
          }}
          icon={<Image source={require("../../assets/Images/email.png")} />}
        />
        {Err &&  <Text style={{color:"red",alignSelf:"flex-start",marginLeft:35,position:"absolute",top:452}}>{email ? null :"Email Reqiured" }</Text>}
        <Textarea
          inputRef={ref=>passRef=ref}
          color={"#EEEEEE"}
          placeholder={"password"}
          width={343}
          borderRadius={12}
          value={password}
          onChangeText={(e) => {
            setPassword(e);
          }}
          icon={<Image source={require("../../assets/Images/lock.png")} />}
        />
        {Err && <Text style={{color:"red",alignSelf:"flex-start",marginLeft:35,position:"absolute",top:525}}>{password ? null :"Password Reqiured"}</Text>}
        <Button
          color={"#323B6E"}
          style={{
            width: 343,
            height: 55,
          }}
          text={"Login"}
          textColor={"white"}
          textStyle={"bold"}
          textSize={16}
          loader={loading}
          onPress={() => {
            Login1();
          }}
        />
        <Button
          color={"#323B6E"}
          style={{
            marginTop: 10,
            width: 343,
            height: 55,
          }}
          text={"Go to Home Screen"}
          textColor={"white"}
          textStyle={"bold"}
          textSize={16}
          onPress={() => {
            GoToHome();
          }}
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity>
            <Text>Don't have an account ?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{ color: "#323B6E", fontWeight: "bold", marginLeft: 8 }}
            >
              Create account
            </Text>
          </TouchableOpacity>
        </View>
      <SnackBar position={"top"} />
      </View>
    </>
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
