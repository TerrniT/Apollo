import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ALButton from "../components/ALButton";
import ASButton from "../components/ASButton";
import APInput from "../components/APInput";
import APInputPassword from "../components/APInputPassword";
import APClickableText from "../components/APClickableText";

export default function RegisterUser() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Welcome to </Text>
        <Text style={styles.heading}>Apollo</Text>
      </View>
      <APInput
        title="Name"
        secureTextEntry={false}
        onChangeText={(text) => setEmail(text)}
      />
      <APInputPassword
        title="Password"
        placeholder="No"
        onChangeText={(text) => setPassword(text)}
      />
      <APClickableText text={"Forgot about Password?"} onPress={""} />
      <ASButton title="Log In" onPress={SignInUser} />
      <ALButton title="Register" onPress={RegisterUser} />

      {!isSignedIn ? null : navigation.navigate("Main")}
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
  heading: {
    color: "white",
    fontSize: 40,
    alignSelf: "center",
  },
});
