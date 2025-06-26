import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.buttons} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttons: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(48, 45, 45, 0.45)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  text: {
    color: "white",
  },
});
