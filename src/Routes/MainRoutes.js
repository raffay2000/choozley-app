import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "../screens/Welcome";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { white, black, Red, primary } from "../../assets/colors/index";
import {
  Entypo,
  MaterialIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import Expolre from "../screens/Expolre";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Settings from "../screens/Settings";
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
function Settings2() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings 2!</Text>
    </View>
  );
}
function Settings3() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings 3!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: hp("11%"),
          borderTopWidth: 0,
          
        },
        tabBarLabelPosition:"below-icon",
        tabBarLabelStyle:{paddingBottom:15,color:white},
        tabBarActiveTintColor:"#323B6E",
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: Red,
              borderTopLeftRadius: hp("4%"),
              borderTopRightRadius: hp("4%"),
              borderTopWidth:0,
            }}
          />
        ),
      }}
    >
      <Tab.Screen
        options={{
          // tabBarLabel: true,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={34} color="#323B6E" />
            ) : (
              <Entypo name="home" size={34} color="white" />
            ),
        }}
        name="HOME"
        component={Welcome}
      />
      <Tab.Screen
        options={{
          // tabBarLabel: true,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="explore" size={34} color="#323B6E" />
            ) : (
              <MaterialIcons name="explore" size={34} color="white" />
            ),
        }}
        name="EXPLORE"
        component={Expolre}
      />
      <Tab.Screen
        options={{
          headerShown: false,        
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: "#323B6E",
                height: 56,
                width: 56,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                position:"relative",
                top:-20
              }}
            >
              <FontAwesome
                name="briefcase"
                size={24}
                color="white"
              />
            </View>
          ),
        }}
        name="Manage Jobs"
        component={SettingsScreen}
      />
      <Tab.Screen
        options={{
          // tabBarLabel: true,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="chatbox" size={34} color="#323B6E" />
            ) : (
              <Ionicons name="chatbox" size={34} color="white" />
            ),
        }}
        name="CHATS"
        component={Settings2}
      />
      <Tab.Screen
        options={{
          // tabBarLabel: true,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="settings" size={34} color="#323B6E" />
            ) : (
              <MaterialIcons name="settings" size={34} color="white" />
            ),
        }}
        name="SETTINGS"
        component={Settings}
      />
    </Tab.Navigator>
  );
}
