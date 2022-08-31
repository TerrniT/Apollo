import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { authentication } from "../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import ALButton from "../components/ALButton";
import ASButton from "../components/ASButton";
import APInput from "../components/APInput";
import APInputPassword from "../components/APInputPassword";
import APClickableText from "../components/APClickableText";
import RegistrationScreen from "../screens/RegistrationScreen";

export default function loginScreen({ navigation }) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        setIsSignedIn(true);
      })
      .catch((re) => {
        console.log(re);
      });
  };

  const SignOutUser = () => {
    signOut(authentication)
      .then((re) => {
        setIsSignedIn(false);
        console.log("User: succesful sign out");
      })
      .catch((re) => {
        console.log(re);
      });
  };

  const RegisterUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        console.log(re);
        setIsSignedIn(true);
      })
      .catch((re) => {
        console.log(re);
      });
  };
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
        onChangeText={(text) => setPassword(text)}
      />
      <APClickableText text={"Forgot about Password?"} onPress={""} />
      <ASButton title="Log In" onPress={SignInUser} />
      <ALButton title="Register" onPress={RegisterUser} />
      {!isSignedIn ? null : navigation.navigate("RegistrationScreen")}
      <ALButton title="SignOut" onPress={SignOutUser} />
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
