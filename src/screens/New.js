import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
// import {SharedElement} from 'react-navigation-shared-element/build/v4'

const New = ({navigation}) => {
    const uid = 0
  return (
    <View style={styles.container}>
        {/* <SharedElement id={uid}> */}
        <TouchableOpacity onPress={()=>{navigation.navigate('New2')}}>
      <Image source={require("../../assets/Images/MaskGroup.png")}/>
        </TouchableOpacity>
        {/* </SharedElement> */}
    </View>
  )
}

export default New

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center'
    }
})