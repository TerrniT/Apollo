import { StyleSheet, View } from "react-native";
import React from "react";
import ASButton from "../components/ASButton";
import APInput from "../components/APInput";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <APInput />
      <ASButton />
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
