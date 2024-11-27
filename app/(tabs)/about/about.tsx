import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Logo from "@/components/Logo";
import { Link, Stack } from "expo-router";

export default function about() {
  return (
    <View style={styles.container}>
      <Stack.Screen />
      <Logo size={46} />

      <View style={styles.info}>
        <Text style={styles.text}>Version 1.0</Text>
        <Text style={styles.text}>Developed by &copy; Emanuel </Text>
        <View>
          <Text style={styles.text}>Emanuel Oliveira Andrade </Text>
          <Link
            style={styles.link}
            href={{ pathname: "https://github.com/emanuel-o-dev" }}
          >
            https://github.com/emanuel-o-dev
          </Link>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
  },
  info: {
    padding: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#606060",
    borderRadius: 20,
    flex: 0.7,
    margin: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  link: {
    color: "blue",
    fontSize: 20,
  },
});
