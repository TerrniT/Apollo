import { StyleSheet, View } from "react-native";
import React from "react";
import ASButton from "../components/ASButton";
import APInput from "../components/APInput";
import { authentication } from "../../firebase/firebase";
import LoginScreen from "../screens/LoginScreen";

export default function RegistrationScreen({ navigation }) {
  const signOut = () => {
    authentication
      .signOut()
      .then((re) => navigation.navigate("LoginScreen"))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <APInput placeholder={"Yay"} />
      <ASButton title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#263238",
  },
});
