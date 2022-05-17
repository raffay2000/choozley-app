import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
const { width, height } = Dimensions.get("window");
const New2 = ({ route, navigation }) => {
  const { uri,imageSpecs } = route.params;
  const anim = useSharedValue(0);
  useEffect(() => {
    //reset to zero
    anim.value = 0;
    //start animation
    anim.value = withTiming(1,{duration:1000});
  }, []);
  const imageContainerStyle = useAnimatedStyle(
    () => ({
      position: 'absolute',
      top: interpolate(anim.value, [0, 1], [imageSpecs.pageY, 70]),
      left: interpolate(anim.value, [0, 1], [imageSpecs.pageX, 0]),
      width: interpolate(anim.value, [0, 1], [imageSpecs.width, width]),
      height: interpolate(anim.value, [0, 1], [imageSpecs.height, 250]),
      borderRadius: interpolate(anim.value, [0, 1], [imageSpecs.borderRadius, 0]),
      overflow: 'hidden'
    }),
    []
  ); 
  return (
    <View
      style={styles.container}
    >
      <Animated.View style={[styles.imageContainer, imageContainerStyle]}>
        <Image style={styles.image} source={{ uri }} />
      </Animated.View>
    </View>
  );
};
export default New2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 250
  },
  image: {
    width: '100%',
    height: '100%'
  },
  btnClose: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#000'
  },
  text: {
    color: '#fff'
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'red'
  }
});
