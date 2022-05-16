import { StyleSheet, Pressable,Image,Dimensions } from 'react-native'
import React,{useRef} from 'react'

const CustomImage = ({ source, onPress,imageStyle }) => {
  const imageRef = useRef();
    const onImagePress = () => {
      imageRef.current?.measure?.((x, y, width, height, pageX, pageY) => {
        onPress &&
        // alert(pageY)
          onPress(source.uri, { width, height, pageX, pageY, borderRadius: 10 });
      });
    };
  return (
    <>
      <Pressable onPress={onImagePress}>
        <Image ref={imageRef} source={source} style={[styles.image,imageStyle]} />
      </Pressable>
    </>
  );
}

export default CustomImage;
const {width} = Dimensions.get('window')
const styles  = StyleSheet.create({
  image:{
    width: width - 300,
    marginHorizontal: 15,
    height: 50,
    marginBottom: 15,
    borderRadius: 10,
    resizeMode: "stretch",
  }
})