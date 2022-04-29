import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Textarea } from "../components/Textarea";
import { Button } from "../components/Button";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Toast from 'react-native-toast-message';
import { useDispatch ,useSelector} from "react-redux";
import {setIsSignIn,setEmail} from "../redux/Actions/RegisterAction"
const Login = ({ navigation }) => {
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [Err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch()
    const {email} = useSelector(state=>state.RegisterReducer)
   const showToast = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT,ToastAndroid.TOP);
  };
  // const showToast = () => {
  //   Toast.show({
  //     type: 'success',
  //     text1: 'Hello',
  //     text2:  "s",
  //   });
  // }

  const Login1 = () => {
    if (email == "" || password == "") {
      if(email == ""){
        showToast("EMAIL BLANK")

      }
      if(password == ""){
        showToast("PASSWORD BLANK")

      }else{
        showToast("email or password Blank")
      }
    }else{
      setIsLoading(true)
      var data = {
        email: email,
        password: password,
      };
      var config = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      };
      //   axios.post('https://webdesignpreviews.com/custom/storyshare/public/api/login',{data})
      // .then(function (response) {
      //   console.log(JSON.stringify(response.data));
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      fetch(
        "https://webdesignpreviews.com/custom/storyshare/public/api/login",
        config
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(JSON.stringify(response));
          showToast(response.message)
          setIsLoading(false)
          if (response.success === true){
            AsyncStorage.setItem("users",JSON.stringify(data)).then(()=>{
              // navigation.navigate("Welcome", { email:response.userData.email })
              dispatch(setEmail(response.userData.email))
              dispatch(setIsSignIn(true))
            })
          }
        })
        .catch((error) => {
          showToast(error)
          setIsLoading(false)
        });
    }
  };
  const GoToHome = () => {
    navigation.popToTop();
  };
  useEffect(async () => {
    const user = JSON.parse(await AsyncStorage.getItem("users"));
    console.log("user", typeof user);
    if (user) {
      setIsLoading(false)
      // navigation.navigate("Welcome", { email: user.email });
      dispatch(setIsSignIn(true))
    }
    dispatch(setEmail(''))
  }, []);
  return (
    <>
        <View style={styles.container}>
          <Image
            source={require("../../assets/LoginImg.png")}
            style={styles.img}
          />
          <Textarea
            color={"#EEEEEE"}
            placeholder={"email"}
            style={{ marginTop: 35 }}
            width={343}
            borderRadius={12}
            value={email}
            onChangeText={(e) => {
              dispatch(setEmail(e));
            }}
            icon={<Image source={require("../../assets/email.png")} />}
          />
          {emailErr === true ? <Text>{Err}</Text> : null}
          <Textarea
            color={"#EEEEEE"}
            placeholder={"password"}
            width={343}
            borderRadius={12}
            value={password}
            onChangeText={(e) => {
              setPassword(e)
            }}
            icon={<Image source={require("../../assets/lock.png")} />}
          />
          {passwordErr === true ? <Text>{Err}</Text> : null}
          <Button
            color={"#323B6E"}
            style={{
              width: 343,
              height: 55,
            }}
            // loader={ <ActivityIndicator color={"white"}/> }
            text={"Login"}
            textColor={"white"}
            textStyle={"bold"}
            textSize={16}
            loader={isLoading}
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
