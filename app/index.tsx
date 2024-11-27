import { View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import ImageButton from "@/components/ImageButton";
import Logo from "@/components/Logo";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleLogin() {
    if (username == "fulano" && password == "123") {
      if (router.canDismiss()) {
        router.dismissAll();
      }
      router.replace("/home/home");
    }
  }

  return (
    <View style={styles.container}>
      <Stack.Screen />
      <View>
        <Logo size={50} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="username"
          style={styles.input}
          value={username}
          onChangeText={(e) => setUsername(e)}
        />
        <TextInput
          placeholder="password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={(e) => setPassword(e)}
        />
        <ImageButton
          source={require("../assets/images/login.png")}
          loginStyle={styles.login}
          onPress={handleLogin}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    width: 200,
    height: 50,
  },
  input: {
    borderRadius: 50,
    backgroundColor: "#ddd",
    width: 280,
    height: 50,
    padding: 14,
  },
  inputContainer: {
    gap: 40,
    alignItems: "center",
    justifyContent: "center",
    flex: 0.5,
  },
});
