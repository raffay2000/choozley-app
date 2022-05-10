import { StyleSheet, Text, View, Platform,Keyboard } from "react-native";
import React, { useState, useEffect } from "react";
import { Textarea } from "../components/Textarea";
import { Button } from "../components/Button";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, signUp } from "../redux/Actions/RegisterAction";
import { getDateFormat } from "../utils";
import axios from "axios";
import SnackBar from "../components/SnackBar";
import FormData from "form-data";

const SignUp = ({ navigation }) => {
  let UserNameRef,EmailRef,PassRef;
  const dispatch = useDispatch();

  // useEffect(() => {
  // }, []);

  const [isLoading, setIsLoading] = useState(false);

  const [full_name, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const { email } = useSelector((state) => state.RegisterReducer);
  const [password, setPassword] = useState("");

  const [Err, setErr] = useState(false);

  const [show, setShow] = useState(false);
  const [dob, setDob] = useState('');
  const onChange = (event, seletedDate) => {
    let curruntDate = seletedDate || dob;
    setShow(Platform.OS === "ios");
    setDob(curruntDate);
    console.log('date', curruntDate,dob)

  };

  const SignUp = async () => {
    if (
      full_name == "" ||
      username == "" ||
      email == "" ||
      password == "" ||
      dob == ""
    ) {
      setErr(true);
    } else {
      Keyboard.dismiss()
      dispatch(signUp(full_name,email,username,password,getDateFormat(dob)))
      setIsLoading(true);
      
    //   var data1 = new FormData();
    //   data1.append("email", email);
    //   data1.append("username", username);
    //   data1.append("full_name", full_name);
    //   data1.append("dob", getDateFormat(dob));
    //   data1.append("password", password);

    //   const config = {
    //     method: "post",
    //     url: "https://webdesignpreviews.com/custom/storyshare/public/api/register",
    //     headers: {
    //        'Content-Type': 'multipart/form-data' ,
    //       //  "Content-Type": "application/x-www-form-urlencoded"
    //       //  "Accept":"multipart/form-data",
    //       },
    //     data: data1
    //   };

    //   console.log(config); 
    //   try {
    //     const data = await axios(config);
    //     console.log(data.data)
    //     if (data.data.success == true) {
    //     setIsLoading(false);
    //     alert(data.data.message);
    //     navigation.navigate("Login");
    //     }else {
    //     alert(data.data.message);
    //     setIsLoading(false);
    //     }
        
    //     }   catch (error) {
    //       setIsLoading(false)
    //       console.log(error)
    //     }
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          alignSelf: "flex-start",
          marginLeft: 35,
          fontWeight: "bold",
        }}
      >
        Sign up as User
      </Text>
      <Text
        style={{
          fontSize: 14,
          alignSelf: "flex-start",
          marginLeft: 35,
          marginTop: 12,
          color: "grey",
          width: 333,
        }}
      >
        Sign up as a user and hire freelancers to get your job done within your
        budget.
      </Text>
      <Text style={styles.text}>Full Name</Text>
      <Textarea
        OnSubmitPress={()=>UserNameRef.focus()}
        text={"Full Name"}
        borderRadius={12}
        borderColor={"#B9C9DE"}
        borderWidth={1}
        height={48}
        width={343}
        value={full_name}
        onChangeText={(e) => {
          setFullName(e);
        }}
        style={{ alignSelf: "flex-start", marginLeft: 25, marginTop: 10 }}
      />
      {Err && (
        // <Text style={styles.err}>{errShown.full_nameErr}</Text>
        <Text style={styles.err}>{full_name ? "" : "Full name required"}</Text>
        ) }
      <Text style={styles.text}>User Name</Text>
      <Textarea
        inputRef={ref=>UserNameRef=ref}
        OnSubmitPress={()=>EmailRef.focus()}
        text={"User Name"}
        borderRadius={12}
        borderColor={"#B9C9DE"}
        borderWidth={1}
        height={48}
        width={343}
        value={username}
        onChangeText={(e) => {
          setUserName(e);
        }}
        style={{ alignSelf: "flex-start", marginLeft: 25, marginTop: 10 }}
      />
      {Err && (
        <Text style={styles.err}>{username ? "" : "User Name required"}</Text>
      )}
      <Text style={styles.text}>Email Address</Text>
      <Textarea
      inputRef={ref=>EmailRef=ref}
      OnSubmitPress={()=>PassRef.focus()}
        text={"Email Address"}
        borderRadius={12}
        height={48}
        borderColor={"#B9C9DE"}
        borderWidth={1}
        width={343}
        value={email}
        onChangeText={(e) => {
          dispatch(setEmail(e));
        }}
        style={{ alignSelf: "flex-start", marginLeft: 25, marginTop: 10 }}
      />
      {Err && (
        <Text style={styles.err}>{email ? "" : "Email required"}</Text>
      )}
      <Text style={styles.text}>Password</Text>
      <Textarea
      inputRef={ref=>PassRef=ref}
        text={"Password"}
        borderRadius={12}
        height={48}
        borderColor={"#B9C9DE"}
        borderWidth={1}
        width={343}
        value={password}
        onChangeText={(e) => {
          setPassword(e);
        }}
        style={{ alignSelf: "flex-start", marginLeft: 25, marginTop: 10 }}
      />
      {Err && (
        <Text style={styles.err}>{password ? "" : "Password required"}</Text>
      )}
      <View>
        <Text style={styles.text}>Enter Your Date of Birth</Text>
        <Button
          // text={"Date Picker"}
          // textColor={"white"}
          borderColor={"#B9C9DE"}
          borderWidth={1}
          textStyle={"bold"}
          // text={dob ? getDateFormat(dob) : "Select Date"}
          // color={""}

          style={{ height: 48, alignSelf: "center", marginTop: 15, width: 343 }}
          onPress={() => setShow(true)}
        />
        {Err && <Text style={styles.err}>{dob ? "" : "Date of Birth id equired"}</Text> }
        <Text style={{ position: "absolute", top: 60, left: 40 }}>{getDateFormat(dob)}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            maximumDate={new Date()}
            value={dob ? dob : new Date()}
            mode={'date'}
            display={"default"}
            onChange={onChange}
          />
        )}
      </View>

      <Button
        color={"#323B6E"}
        style={{ alignSelf: "center", width: 100, marginTop: 15 }}
        text={"Sign Up"}
        textSize={16}
        textStyle={"bold"}
        textColor={"white"}
        onPress={SignUp}
        loader={isLoading}
      />
      <SnackBar position={"bottom"}/>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    paddingTop: 100,
    // alignItems:"center",
    backgroundColor: "white",
  },
  text: {
    marginLeft: 35,
    marginTop: 5,
  },
  err: {
    position: "relative",
    left: 35,
    color: "red",
  },
});
