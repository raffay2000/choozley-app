import { StyleSheet, Text, View, Platform } from "react-native";
import React, { useState,useEffect } from "react";
import { Textarea } from "../components/Textarea";
import { Button } from "../components/Button";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FormData from "form-data";
import { useDispatch,useSelector } from "react-redux";
import { setEmail } from "../redux/Actions/RegisterAction";

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setEmail(''))
  },[])
  const {email} = useSelector(state=> state.RegisterReducer)
  const [full_name, setFullName] = useState("");
  const [full_nameErr, setFullNameErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [username, setUserName] = useState("");
  const [usernameErr, setUserNameErr] = useState(false);

  // const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [Err, setErr] = useState("");

  const [date, setDate] = useState(new Date());
  const [dateErr, setDateErr] = useState(false);

  const [mode, setMode] = useState("Date");
  const [show, setShow] = useState(false);
  const [dob, setDob] = useState("");
  const [dobErr, setDobErr] = useState(false);

  const onChange = (event, seletedDate) => {
    const curruntDate = seletedDate || date;
    setShow(Platform.OS === "ios");
    setDate(curruntDate);
    let tempDate = new Date(curruntDate);
    let fDate =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();

    setDob(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const SignUp = async () => {
    if (
      email == "" ||
      username == "" ||
      email == "" ||
      password == "" ||
      dob == ""
    ) {
      alert("Some Values Is Missing");
      if (full_name == "") {
        setFullNameErr(true)
        setErr("Empty")
      }else{setFullNameErr(false)}
      if (username == "") {
        
        setUserNameErr(true)
        setErr("Empty")
      }else{
        setUserNameErr(false)
      }
      if (email == "") {
        
        setEmailErr(true)
        setErr("Empty")
      }else{
        setEmailErr(false)
      }
      if (password == "") {
        
        setPasswordErr(true)
        setErr("Empty")
      }else{
        setPasswordErr(false)
      }
      if (dob == "") {
        
        setDobErr(true)
        setErr("Empty")
      }else{
        setDobErr(false)
      }

    } else {
      setIsLoading(true)
      var data1 = new FormData();
      data1.append("email", email);
      data1.append("username", username);
      data1.append("full_name", full_name);
      data1.append("dob", dob);
      data1.append("password", password);
      // fetch(
      //   "https://webdesignpreviews.com/custom/storyshare/public/api/register",
      //   config
      // )
      //   .then((response) => response.json())
      //   .then((response) => {
      //     console.log(JSON.stringify(response));
      //   })
      //   .catch((error) => {
      //     console.log("err",error);
      //   });
      console.log(data1);
      const config = {
        method: "post",
        url: "https://webdesignpreviews.com/custom/storyshare/public/api/register",
        headers: { "Content-Type": "multipart/form-data" },
        data: data1,
      };
      const data = await axios(config)
      if (data.data.success == true) {
        setIsLoading(false)
        alert(data.data.message);
        navigation.navigate("Login");
      }
      if (data.data.success == false) {
        alert(data.data.message);
        setIsLoading(false)
      }
      console.log("data", JSON.stringify(data));
      // if () {

      // }
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
      {/* <View style={{ flexDirection: "row",marginTop:29}}>
        <Textarea
          text={"First Name"}
          borderColor={"#B9C9DE"}
          borderWidth={1}
          width={164}
          height={48}
          borderRadius={12}
          value={firstName}
          onChangeText={(e)=>{setFirstName(e)}}
          style={{ alignSelf: "flex-start", marginLeft: 25 }}
        />
        <Textarea
          text={"Last Name"}
          height={48}
          borderRadius={12}
          borderColor={"#B9C9DE"}
          borderWidth={1}
          width={164}
          style={{ alignSelf: "flex-start", marginLeft: 15 }}
        />
      </View> */}
      <Text  style={styles.text}>Full Name</Text>
      <Textarea
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
      {full_nameErr ===true ? (<Text style={styles.err}>{Err}</Text>):(null)}
      <Text  style={styles.text}>User Name</Text>
      <Textarea
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
      {usernameErr  === true ? (<Text style={styles.err}>{Err}</Text>):(null)}
      <Text  style={styles.text}>Email Address</Text>
      <Textarea
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
      {emailErr ===true ? ( <Text style={styles.err}>{Err}</Text>):(null)}
      <Text  style={styles.text}>Password</Text>
      <Textarea
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
      {passwordErr === true ? (<Text style={styles.err}>{Err}</Text>):(null)}
      <View>
        <Text style={styles.text}>
          Enter Your Date of Birth
        </Text>
        <Button
          // text={"Date Picker"}
          // textColor={"white"}
          borderColor={"#B9C9DE"}
          borderWidth={1}
          textStyle={"bold"}
          // color={""}

          style={{ height: 48, alignSelf: "center", marginTop: 15, width: 343 }}
          onPress={() => showMode("date")}
        />
        {dobErr  === true ? (<Text style={styles.err}>{Err}</Text>):(null)}
        <Text style={{ position: "absolute", top: 60, left: 40 }}>{dob}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display={"default"}
            onChange={onChange}
          />
        )}
      </View>
      {/* <View style={{ flexDirection: "row" }}>
        <Textarea
          text={"State"}
          borderRadius={12}
          borderColor={"#B9C9DE"}
          borderWidth={1}
          height={48}
          width={164}
          style={{ alignSelf: "flex-start", marginLeft: 25,marginTop: 10  }}
        />
        <Textarea
          text={"City"}
          borderRadius={12}
          borderColor={"#B9C9DE"}
          borderWidth={1}
          height={48}
          width={164}
          style={{ alignSelf: "flex-start", marginLeft: 15 ,marginTop: 10 }}
        />
      </View> */}
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
      {/* <View style={{ flexDirection: "row" }}>
        <Textarea
          text={"Zip Code"}
          borderColor={"#B9C9DE"}
          borderWidth={1}
          borderRadius={12}
          height={48}
          width={164}
          style={{ alignSelf: "flex-start", marginLeft: 25 ,marginTop: 10 }}
        />
        <Button color={'#323B6E'} style={{marginTop:35,width:164,marginLeft:15,height:48 }} text={'Sign Up'} textColor={'white'} textStyle={'bold'} textSize={16} onPress={()=>{OnClick()}}/>
      </View> */}
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
  text:{
    marginLeft:35,
    marginTop:5,
  },
  err: {
    position: "relative",
    left: 35,
    color: "red",
  },
});
