import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Logo(props: { size: number }) {
  return (
    <View>
      <Text style={[styles.title, { fontSize: props.size }]}>FLYR</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    padding: 20,
    width: 300,
    borderWidth: 3,
    textAlign: "center",
    borderColor: "rgba(110,115,249, 0.8)",
  },
});
