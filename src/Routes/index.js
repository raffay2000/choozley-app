import React, { useEffect,useContext,useState } from "react";
import Home from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Welcome from "../screens/Welcome";
import { getItem } from "../persist-storage/index";
import { useDispatch, useSelector } from "react-redux";
import { PUT_USER_DATA } from "../redux/Constants";
import { AuthContext } from "../context/index";
import AuthScreen from "../screens/AuthScreen";
import { setEmail } from "../redux/Actions/RegisterAction";
import { isReadyRef, navigationRef } from "../navigation";
import MainRoutes from './MainRoutes'

const Stack = createNativeStackNavigator();

const Routes = () => {
  const dispatch = useDispatch();
  // const { isSignIn } = useSelector((state) => state.RegisterReducer);
  const [isSignIn, setIsSignIn] = useState(null)

  useEffect(() => {
    checkToken();
  }, []);
 
  const checkToken = async () => {
    const user = await getItem("user");
    console.log("user", user);
    if (user) {
      setIsSignIn(true)
      dispatch({
        type: PUT_USER_DATA,
        payload: JSON.parse(user),
      });
    }else{
      setIsSignIn(false)
    }
    // getItem("users").then((user) => {
    //   if (user){
    //     setIsSignIn(true)
    //     dispatch({
    //       type: PUT_USER_DATA,
    //       payload: JSON.parse(user),
    //     });
    //   } else {
    //     setIsSignIn(false)
    //   }
    // });
  };
  if(isSignIn === null){
    return <AuthScreen/>
}

  return (
    <>
      <AuthContext.Provider value={{ updateState: checkToken }}>
        <NavigationContainer
        theme={{colors:{background:'white'}}}
        ref={navigationRef}
        onReady={() => {
            isReadyRef.current = true;
        }}
        >
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isSignIn ? 
              <>
                <Stack.Screen name="MainRoutes" component={MainRoutes} />
              </>
             :
              <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
              </>
            }
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
};

export default Routes;
