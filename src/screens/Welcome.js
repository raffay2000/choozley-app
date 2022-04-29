import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setIsSignIn } from '../redux/Actions/RegisterAction'
import { useDispatch,useSelector } from 'react-redux'

const Welcome = ({route,navigation}) => {
    // const {email} = route.params
    const dispatch = useDispatch()
    const {email} = useSelector(state=>state.RegisterReducer)
    const Logout = async()=>{
        await AsyncStorage.removeItem("users")
        // navigation.goBack()
        dispatch(setIsSignIn(false))
    }
   
  return (
    <View style={styles.container}>
      <Text style={{ fontSize:25}}>WELcome Screen {email}</Text>
      <Button color={'red'} style={{width:100,height:30}} text={"Logout"} textStyle={'bold'} textSize={16} onPress={()=>{Logout()}}/>
      {/* <Button color={'red'} style={{width:100,height:30}} text={"Go To Login"} textStyle={'bold'} textSize={16} onPress={()=>{GoToLogin()}}/> */}
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})