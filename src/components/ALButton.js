import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function ALButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.ALButtonContainer}>
      <Text style={styles.ALButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ALButtonContainer: {
    width: 345,
    height: 82,
    backgroundColor: "#D1187C",
    borderRadius: 15,
    paddingVertical: 12,
    paddingVertical: 12,
    marginTop: 25,
    marginHorizontal: 50,
  },
  ALButtonText: {
    fontSize: 22,
    alignSelf: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
