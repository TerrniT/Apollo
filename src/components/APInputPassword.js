import React from "react";
import { Akira } from "react-native-textinput-effects";

export default function APInputPassword({ title, onChangeText }) {

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
        width: "80%",
        borderBottomWidth: 1.0,
      }}
      inputStyle={{ color: "#fff", letterSpacing: 20 }}
      secureTextEntry={true}
    />
  );
}
