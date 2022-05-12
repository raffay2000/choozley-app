import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShowText = ({Text2,Text1}) => {
  return (
    <View style={{height:50,width:365,borderRadius:8,borderWidth:0.3
        ,backgroundColor:"#00000029",marginTop:10}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,paddingHorizontal:25}}>
        <Text style={{fontSize:20,color:"#323B6E"}}>{Text1}</Text>
        <Text style={{fontSize:20,fontWeight:'bold',color:"#323B6E"}}>{Text2}</Text>
        </View>
    </View>

  )
}

export default ShowText

const styles = StyleSheet.create({})