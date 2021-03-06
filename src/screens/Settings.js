import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import React, { useContext,useEffect,useState } from "react";
import { removeItem } from "../persist-storage";
import { AuthContext } from "../context";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import SearchArea from "../components/SearchArea";
import * as Animatable from "react-native-animatable";
import AwesomeAlert from 'react-native-awesome-alerts';

const Settings = ({navigation}) => {
  const [showAlert, setShowAlert] = useState(false)
  const context = useContext(AuthContext);
  const Logout = async () => {
    await removeItem("user");
    await removeItem("token");
    context.updateState();
  };
  const NewComponent = async () => {
    navigation.navigate('New')
  };
  const viewRef = React.useRef(null);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      viewRef.current.animate({
        0: { opacity: 0,translateZ:1000,fade:0.5},
        1: { opacity: 1, translateZ:0,fade:1}
      });
    });
    return () => unsubscribe;
  }, [navigation]);
  return (
    <>
      <SearchArea/>
      <Animatable.View ref={viewRef} duration={1000} easing={"ease-in-out-back"}>
        <Text
          style={{
            marginTop: 15,
            marginLeft: 20,
            fontSize: 20,
            color: "#323B6E",
          }}
        >
          Settings
        </Text>
        <View style={styles.options}>
          <Ionicons name="people" size={34} color="#323B6E" />
          <Text style={{ marginLeft: 20, fontSize: 20, color: "#323B6E" }}>
            Profile settings
          </Text>
        </View>
        <View style={styles.options}>
          <MaterialIcons name="payment" size={34} color="#323B6E" />
          <Text style={{ marginLeft: 20, fontSize: 20, color: "#323B6E" }}>
            Payment method
          </Text>
        </View>
        <View style={styles.options}>
          <MaterialIcons name="subscriptions" size={34} color="#323B6E" />
          <Text style={{ marginLeft: 20, fontSize: 20, color: "#323B6E" }}>
            Subscription
          </Text>
        </View>
        <View style={styles.options}>
        <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>{NewComponent()}}>
          <MaterialIcons name="policy" size={34} color="#323B6E"   />
          <Text style={{ marginLeft: 20, fontSize: 20, color: "#323B6E" }}>
            Privacy & Policy
          </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.options}>
          <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>{setShowAlert(true)}}>
          <Entypo name="log-out" size={34} color="#323B6E" />
          <Text style={{ marginLeft: 20, fontSize: 20, color: "#323B6E" }}>
            Log out
          </Text>
          </TouchableOpacity>
          <AwesomeAlert
          ref={viewRef}
          show={showAlert}
          showProgress={false}
          title="LOGOUT"
          message="Do You Want To Sign Out !"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No"
          cancelButtonColor="#EB6060"
          confirmText="Yes, Log out"
          confirmButtonColor="#323B6E"
          alertContainerStyle={{}}
          onCancelPressed={() => {
            setShowAlert(false)
          }}
          onConfirmPressed={() => {
            alert("Logout"),
            Logout()
          }}
        />
        </View>
      </Animatable.View>

      {/* <View style={styles.container}>
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
      </View> */}
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchArea: {
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
  options: {
    flexDirection: "row",
    margin: 8,
    marginLeft: 25,
    alignItems: "center",
  },
});
