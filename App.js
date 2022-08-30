import React, { useState } from "react";
import { TextInput, StyleSheet, Button, View } from "react-native";
import { authentication } from "./firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default function App() {
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        {isSignedIn == true ? (
          <Button title="Sing Out" onPress={SignOutUser} />
        ) : (
          <Button title="Sign In" onPress={SignInUser} />
        )}
        <Button title="Register" onPress={RegisterUser} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#333",
  },
  text: {
    color: "white",
  },
  input: {
    color: "#123533",
    backgroundColor: "#909090",
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 5,
  },
  inputContainer: {
    width: "80%",
  },
  buttonContainer: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  button: {
    width: "100%",
    backgroundColor: "#787878",
    padding: 15,
    borderRadius: 9,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "#12de32",
    borderColor: "#123533",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
  },
  buttonOutlineText: {
    color: "#778899",
    fontWeight: "700",
    fontSize: 14,
  },
});
