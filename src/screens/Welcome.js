import { StyleSheet, Text, View } from "react-native";
import React, { useContext ,useEffect,useState} from "react";
import { Button } from "../components/Button";
import { useSelector } from "react-redux";
import { removeItem } from "../persist-storage";
import { AuthContext } from "../context";

const Welcome = () => {
  // const user = getUser()
  const context = useContext(AuthContext)
  // const { user } = useSelector((state) => state.RegisterReducer);
  // console.log("user", typeof user);
  const Logout = async () => {
    await removeItem("user")
    await removeItem("token");
    context.updateState();
  };
 
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}> Welcome  </Text>
      <Button
        color={"red"}
        style={{ width: 100, height: 30 }}
        text={"Logout"}
        textStyle={"bold"}
        textSize={16}
        onPress={() => {
          Logout();
        }}
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
