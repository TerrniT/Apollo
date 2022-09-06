import { StyleSheet, View } from "react-native";
import React from "react";
import ASButton from "../components/ASButton";
import APInput from "../components/APInput";
import { authentication } from "../../firebase/firebase";
import { signOut } from "firebase/auth"
import {useNavigation} from "@react-navigation/native";

export default function Main() {

  const navigation = useNavigation()

  const SignOutUser = () => {
    signOut(authentication)
      .then(() => {
        navigation.replace("LoginScreen")
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <APInput placeholder={"Yay"} />
      <ASButton title="Sign Out" onPress={SignOutUser} />
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
