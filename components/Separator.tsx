import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Separator() {
  return (
    <View style={styles.separator}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderWidth: 1,
    height: 0,
    color: "#000",
    margin: 10,
  },
});
