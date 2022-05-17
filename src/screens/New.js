import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import CustomImage from '../components/ImageAnimation'

// list of image uris
const images = [
  "https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFeIg4QX6bZL0yimHbFFrArx07otCq3re_r7SNpcUrGqAfIjDvDBOClMccUepVB1rLD4&usqp=CAU",
  "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLKqtPopwbYPiCjLq6hkMjorpmORRR9apUC2Uy7eiYnl9ij9Cczi0RCz3xUKXvYQrE3g&usqp=CAU",
];
const New = ({ navigation }) => {

  const onImagePress = (uri, imageSpecs) => {
    navigation.navigate("New2", {
      uri,
      imageSpecs
    });
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        {images.map((uri) => (
          <CustomImage key={uri} onPress={onImagePress} source={{ uri }}/>
        ))}
      </View>
    </ScrollView>
  );
};
export default New;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    width: width - 300,
    marginHorizontal: 15,
    height: 50,
    marginBottom: 15,
    borderRadius: 10,
    resizeMode: "stretch",
  },
});
