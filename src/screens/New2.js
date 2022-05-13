import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
// import { SharedElement } from "react-navigation-shared-element";
const New2 = ({ route }) => {
  // const {uid} = route.params
  return (
    <>
      <View style={styles.container}>
        {/* <SharedElement > */}
        <Image
          source={require("../../assets/Images/MaskGroup.png")}
          style={{ width: "100%", resizeMode: "stretch", height: 200 }}
        />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
        </Text>
        {/* </SharedElement> */}
      </View>
    </>
  );
};

export default New2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    alignItems: "center",
  },
});
