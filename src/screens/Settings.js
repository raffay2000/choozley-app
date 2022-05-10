import { StyleSheet, Text, View} from 'react-native'
import React,{useContext} from 'react'
import { Button } from '../components/Button';
import { removeItem } from '../persist-storage';
import { AuthContext } from '../context';
import { Textarea } from '../components/Textarea';
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FontAwesome ,Ionicons,MaterialIcons,Entypo} from "@expo/vector-icons";

const Settings = () => {
  const context =  useContext(AuthContext);
  const Logout = async () => {
    await removeItem("user");
    await removeItem("token");
    context.updateState();
  };

  return (
    <>
    <View style={styles.header}>
        <View style={styles.searchArea}>
          <View>
            <Textarea
              borderRadius={100}
              color={"white"}
              height={hp("4.8%")}
              width={hp("32%")}
              placeholder={"Search services"}
              placeholderColor={"#BBBCC5"}
              textSize={10}
            />
          </View>
          <View>
            <FontAwesome name="filter" size={24} color="white" />
          </View>
          <View>
            <Ionicons name="notifications" size={24} color="white" />
          </View>
        </View>
      </View>
      <View>
        <Text style={{marginTop:15,marginLeft:20,fontSize:20,color:"#323B6E"}}>Settings</Text>
        <View style={styles.options} >
        <Ionicons name="people" size={34} color="#323B6E" />
        <Text style={{marginLeft:20,fontSize:20,color:"#323B6E"}}>Profile settings</Text>
        </View>
        <View style={styles.options}>
        <MaterialIcons name="payment" size={34} color="#323B6E" />
        <Text style={{marginLeft:20,fontSize:20,color:"#323B6E"}}>Payment method</Text>
        </View>
        <View style={styles.options}>
        <MaterialIcons name="subscriptions" size={34} color="#323B6E" />
        <Text style={{marginLeft:20,fontSize:20,color:"#323B6E"}}>Subscription</Text>
        </View>
        <View style={styles.options}>
        <MaterialIcons name="policy" size={34} color="#323B6E" />
        <Text style={{marginLeft:20,fontSize:20,color:"#323B6E"}}>Privacy & Policy</Text>
        </View>
        <View style={styles.options}>
        <Entypo name="log-out" size={34} color="#323B6E" />
        <Text style={{marginLeft:20,fontSize:20,color:"#323B6E"}}>Log out</Text>
        </View>
      </View>
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}> Welcome </Text>
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
    </>
  )
}

export default Settings

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  searchArea:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "relative",
    top: 60,
  },
  header: {
    backgroundColor: "#323B6E",
    height: hp("16%"),
    borderBottomLeftRadius: hp("4%"),
    borderBottomRightRadius: hp("4%"),
  },
  options:{
    flexDirection:'row',
    margin:8,
    marginLeft:25,
    alignItems:'center'
  }
})