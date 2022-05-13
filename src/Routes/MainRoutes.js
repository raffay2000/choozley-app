import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "../screens/Welcome";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { white, Red } from "../../assets/colors/index";
import Icon from "../components/Icon";
import Expolre from "../screens/Expolre";
import Settings from "../screens/Settings";
import * as Animatable from "react-native-animatable";
import {
  Entypo,
  MaterialIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import Chats from "../screens/Chats";
import ManageJobs from "../screens/ManageJobs";

const Tab = createBottomTabNavigator();

const TabBarBtn = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  const circle1 = {
    0: { scale: 0 },
    1: { scale: 1.25 },
  };
  const circle2 = { 0: { scale: 1 }, 1: { scale: 0 }};

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.8, translateY: 0 },
        1: { scale: 1, translateY: -24 },
      });
      circleRef.current.animate(circle1);
      textRef.current.animate({
        0: { scale: 0, translateY: 0 },
        1: { scale: 1, translateY: -15 },
      });
    } else {
      viewRef.current.animate({
        0: {  scale: 1, tranlateY: -24 },
        1: { scale: 0.8, tranlateY: 0 },
      });
      circleRef.current.animate(circle2);
      textRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
    }
  }, [focused]);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.btn}>
        <Animatable.View
          ref={circleRef}
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "#323B6E",
            borderRadius: 50,
            borderWidth: 3.5,
            borderColor: "#EB6060",
          }}
        />
        <Icon
          type={item.type}
          name={item.activeIcon}
          size={34}
          color={focused ? white : "#323B6E"}
        />
      </Animatable.View>
      <Animatable.Text
        style={{ textAlign: "center", fontSize: 12,color:white,fontWeight:"bold" }}
        ref={textRef}
      >
        {item.label}
      </Animatable.Text>
    </TouchableOpacity>
  );
};

export const TabArr = [
  {
    route: "HOME",
    label: "Home",
    type: Entypo,
    activeIcon: "home",
    inActiveIcon: "home",
    component: Welcome,
  },
  {
    route: "EXPOLRE",
    label: "Expolre",
    type: MaterialIcons,
    activeIcon: "explore",
    inActiveIcon: "explore",
    component: Expolre,
  },
  {
    route: "Manage Jobs",
    label: "Manage Jobs",
    type: FontAwesome,
    activeIcon: "briefcase",
    inActiveIcon: "briefcase",
    component: ManageJobs,
  },
  {
    route: "CHATS",
    label: "Chats",
    type: Ionicons,
    activeIcon: "chatbox",
    inActiveIcon: "chatbox",
    component: Chats,
  },
  {
    route: "SETTINGS",
    label: "Settings",
    type: MaterialIcons,
    activeIcon: "settings",
    inActiveIcon: "settings",
    component: Settings,
  },
];

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        
        tabBarStyle: {
          height: hp("11%"),
          borderTopWidth: 0,
        },
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: { paddingBottom: 15, color: white },
        tabBarActiveTintColor: "#323B6E",
        tabBarShowLabel: true,
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: Red,
              borderTopLeftRadius: hp("4%"),
              borderTopRightRadius: hp("4%"),
              borderTopWidth: 0,
            }}
          />
        ),
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            name={item.route}
            component={item.component}
            key={index}
            options={{
              headerShown: false,
              tabBarLabel: item.label,
              tabBarButton: (props) => {
                return <TabBarBtn {...props} item={item} />;
              },
              tabBarShowLabel: true,
              tabBarIcon: ({ color, focused }) => {
                return (
                  <Icon
                    type={item.type}
                    name={item.activeIcon}
                    size={24}
                    color={color}
                  />
                );
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    // flex:1,
    height: 50,
    width: 50,
    backgroundColor: Red,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
