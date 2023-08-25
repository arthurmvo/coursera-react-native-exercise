import * as React from "react";
import {
  View,
  StyleSheet,
  Alert,
  TextInput,
  Image,
  Text,
  Pressable,
} from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  let [email, setEmail] = React.useState("");
  let [isValidEmail, setIsValidEmail] = React.useState(false);

  const handleEmailChange = (email) => {
    setEmail(email);
    setIsValidEmail(validateEmail(email));
  };

  return (
    <View>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        style={styles.image}
      />
      <Text style={styles.text}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        placeholder={"Type your email"}
        onChangeText={handleEmailChange}
        value={email}
        style={[
          styles.textInput,

          isValidEmail ? null : styles.textInputInvalid,
        ]}
      ></TextInput>
      <Pressable
        style={[
          styles.button,
          isValidEmail ? styles.buttonEnabled : styles.buttonDisabled,
        ]}
        disabled={!isValidEmail}
        onPress={() => {
          setEmail("");
          setIsValidEmail(false);
          Alert.alert("Thank you for subscribing, stay tuned!");
        }}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  textInput: {
    height: 40,
    top: "20%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: "#495e57",
  },
  textInputInvalid: {
    borderColor: "#b10202",
  },
  button: {
    backgroundColor: "#D3D3D3",
    top: "25%",
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
    margin: 10,
  },
  buttonEnabled: {
    backgroundColor: "#495e57",
  },
  buttonDisabled: {
    backgroundColor: "#D3D3D3",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    alignSelf: "center",
  },
  image: {
    top: 20,
    resizeMode: "contain",
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  text: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    flexWrap: "wrap",
    top: "15%",
  },
});
export default SubscribeScreen;
