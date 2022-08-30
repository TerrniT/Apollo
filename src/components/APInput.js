import React from "react";
import { Akira } from "react-native-textinput-effects";
import { View, StyleSheet } from "react-native";
export default function APInput({ title, onChangeText, secureTextEntry }) {
  return (
    <Akira
      onChangeText={onChangeText}
      label={title}
      borderColor={"#464646"}
      inputPadding={16}
      labelHeight={24}
      backgroundColor={"#37474F"}
      labelStyle={{ color: "#686868" }}
      style={{
        borderRadius: 15,
        alignItems: "center",
      }}
      secureTextEntry={secureTextEntry}
    />
  );
}