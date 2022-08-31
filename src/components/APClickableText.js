import { Text, StyleSheet } from "react-native";
import React from "react";

export default function APClickableText({ onPress, text }) {
  return (
    <Text onPress={onPress} style={styles.text}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#D1187C",
  },
});
