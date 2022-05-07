import React from 'react';
import { 
   View, 
   Image,
} from 'react-native';
// import { splash_bg } from '../../assets/colors';

export default () => (
    <View style={{flex:1, backgroundColor: "white", justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../../assets/Images/Choozley.png')}/>
    </View>
)