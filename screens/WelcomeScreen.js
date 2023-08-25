import * as React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // I want to add a pressable button here that will navigate to the SubscribeScreen.
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo.png")}
        style={styles.image}
      />
      <Text style={styles.text}>
        Little Lemon, your local {"\n"} Mediterranean Bistro
      </Text>
      <Pressable
        onPress={() => navigation.navigate("Subscribe")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

//create a stylesheet for the WelcomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#495e57",
    color: "#000000",
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
    margin: 10,
    height: 40,
    bottom: 10,
    position: "absolute",
    width: "90%",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    resizeMode: "contain",
    height: 200,
    width: 200,
    alignSelf: "center",
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flexWrap: "wrap",
    marginVertical: 40,
  },
});

export default WelcomeScreen;
