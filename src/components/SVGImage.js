import React from 'react';
import { SvgXml } from "react-native-svg"; 


export default ({image, width}) => {  
    return <SvgXml xml={image} width={width || "301px"} />;  
}