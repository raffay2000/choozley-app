import React from 'react';
import CustomToast, {BaseToast} from 'react-native-toast-message';
// import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { black, primary, white } from '../../assets/colors';
// import { regular } from '../../assets/fonts';


 
const SnackBar = ({position}) => {

    // const {colors} = useTheme();
    
    const toastConfig = {
        success: ({ text1, text2, props, ...rest }) => (
          <BaseToast
            {...rest}
            style={[{ 
                height: text2 ? 50 : 40,
                width:"85%",
                borderLeftColor: 'red',
                marginLeft:3,
                marginRight:3,
                marginBottom:0,
                marginTop:5,
                borderRadius:3,
                backgroundColor:'white',

            }, props.style]}
            contentContainerStyle={{ paddingHorizontal: 5 }}
            text1Style={[{
                color:'black',
                fontSize:15
            },props.text1Style]}
            text2Style={[{
                color:'black',
                fontSize:15
            },props.text2Style]}
            text1={text1}
            text2={text2}
            // trailingIcon={props.icon && null}
            onTrailingIconPress={()=>CustomToast.hide()}

          />
        )
    };
      
    return(
        <CustomToast 
            config={toastConfig}
            position={position}
            // ref={(ref) => CustomToast.setRef(ref)}
            visibilityTime={2000}
        /> 
    )
}
export default SnackBar;