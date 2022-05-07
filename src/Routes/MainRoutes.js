import * as React from "react";
import { Text, View ,Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "../screens/Welcome";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {white,black,Red,primary} from "../../assets/colors/index"
import SVGImage from "../components/SVGImage";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              shadowColor: black,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 1,
              backgroundColor: white,
              borderTopLeftRadius:hp('1.5%'),
                borderTopRightRadius:hp('1.5%'),
                borderTopRightRadius:hp('2%'),
                borderTopWidth:0,
              tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: white,
                tabBarShowLabel: false,
                tabBarStyle:{
                    backgroundColor:white,
                    height:hp('9%'),
                    borderTopLeftRadius:hp('2%'),
                    borderTopRightRadius:hp('2%'),
                    borderTopWidth:0,
                },
            }}
          />
        ),
      }}
    >
      <Tab.Screen  options={{
                // tabBarLabel: true,
                headerShown:false,
                tabBarIcon: () => (
                    <Image source={require('../../assets/Images/lock.png')} style={{height:20,width:20}} />
                ),  
                
            }}name="Welcome" component={Welcome} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
