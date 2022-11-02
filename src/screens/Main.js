import { StyleSheet, View } from "react-native";
import React from "react";
import { authentication } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import ALButton from "../components/ALButton";

export default function Main() {
  const navigation = useNavigation();

  const SignOutUser = () => {
    signOut(authentication)
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <ALButton title={"Sign Out"} onPress={SignOutUser} />
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
  text: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#263238",
  },
});
