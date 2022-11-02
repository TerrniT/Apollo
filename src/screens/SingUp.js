import React, { useState } from 'react'
import { Text, View, StyleSheet } from "react-native"
import ASButton from '../components/ASButton';
import ALButton from '../components/ALButton';
import "firebase/auth";


export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
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
      <APInputPassword
        title="Password"
        placeholder="No"
        onChangeText={(text) => setPassword(text)}
      />
      <ASButton onClick={() => SignUp()} title="Sign Up" style={{ width: "48%" }} />
      <ALButton onClick={() => navigation.replace("Login")} title="Login" style={{ width: "48%", backgroundColor: "#344869" }} />

      {!isSignedIn ? null : navigation.navigate("Main") }
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
