import React, { useState, useEffect } from "react";
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
import RegistrationScreen from "./Main";
import {useNavigation} from "@react-navigation/native";

// TODO: add registration for new users
// TODO: when user entered the wrong data make visual (pop up or just red text with shaking inputs)
// TODO: check for existing users or if data not in database create new user and log-in after that

export default function LoginScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Main")
      }
    })

    return unsubscribe
  }, [])
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
