import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Textarea } from "../components/Textarea";
import { Button } from "../components/Button";

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, alignSelf: "flex-start", marginLeft: 35,fontWeight:"bold" }}>
        Sign up as User
      </Text>
      <Text
        style={{
          fontSize: 14,
          alignSelf: "flex-start",
          marginLeft: 35,
          marginTop:12,
          color: "grey",
          width:333
        }}
      >
        Sign up as a user and hire freelancers to get your job done within your
        budget.
      </Text>
      <View style={{ flexDirection: "row" ,marginTop:29}}>
        <Textarea
          text={"First Name"}
          borderColor={"#B9C9DE"}
          borderWidth={1}
          width={164}
          height={48}
          style={{ alignSelf: "flex-start", marginLeft: 25 }}
        />
        <Textarea
          text={"Last Name"}
          height={48}
          borderColor={"#B9C9DE"}
          borderWidth={1}
          width={164}
          style={{ alignSelf: "flex-start", marginLeft: 15 }}
        />
      </View>
      <Textarea
        text={"Email Address"}
        height={48}
        borderColor={"#B9C9DE"}
        borderWidth={1}
        width={343}
        style={{ alignSelf: "flex-start", marginLeft: 25,marginTop: 10 }}
      />
      <Textarea
        text={"Address"}
        borderColor={"#B9C9DE"}
        borderWidth={1}
        height={48}
        width={343}
        style={{ alignSelf: "flex-start", marginLeft: 25 ,marginTop: 10 }}
      />
      <Textarea
        text={"Country"}
        borderColor={"#B9C9DE"}
        borderWidth={1}
        height={48}
        width={343}
        style={{ alignSelf: "flex-start", marginLeft: 25 ,marginTop: 10 }}
      />
      <View style={{ flexDirection: "row" }}>
        <Textarea
          text={"State"}
          borderColor={"#B9C9DE"}
          borderWidth={1}
          height={48}
          width={164}
          style={{ alignSelf: "flex-start", marginLeft: 25,marginTop: 10  }}
        />
        <Textarea
          text={"City"}
          borderColor={"#B9C9DE"}
          borderWidth={1}
          height={48}
          width={164}
          style={{ alignSelf: "flex-start", marginLeft: 15 ,marginTop: 10 }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Textarea
          text={"Zip Code"}
          borderColor={"#B9C9DE"}
          borderWidth={1}
          height={48}
          width={164}
          style={{ alignSelf: "flex-start", marginLeft: 25 ,marginTop: 10 }}
        />
        <Button color={'#323B6E'} style={{marginTop:35,width:164,marginLeft:15,height:48 }} text={'Sign Up'} textColor={'white'} textStyle={'bold'} textSize={16} onPress={()=>{navigation.goBack()}}/>
      </View>
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
});
