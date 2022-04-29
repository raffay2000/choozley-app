import React from 'react'
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';

import { useSelector } from 'react-redux'; 
import Settings from '../screens/Settings';
const Stack = createNativeStackNavigator();

const Routes = () => {
  // const dispatch = useDispatch()
  const {isSignIn} = useSelector(state=>state.RegisterReducer)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {isSignIn ? (
          <>
          <Stack.Screen name="Welcome" component={Welcome}/>
          {/* <Stack.Screen name="Home" component={Home}/> */}
          {/* <Stack.Screen name="Settings" component={Settings}/> */}
          </>
        ):
        (
          <>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes