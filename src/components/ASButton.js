import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function ASButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.ALButtonContainer}>
      <Text style={styles.ALButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ALButtonContainer: {
    elevation: 8,
    width: 345,
    height: 82,
    backgroundColor: "#37474F",
    borderRadius: 15,
    paddingVertical: 10,
    paddingVertical: 12,
    marginTop: 50,
    marginHorizontal: 50,
  },
  ALButtonText: {
    fontSize: 17,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
