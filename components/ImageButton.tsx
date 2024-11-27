import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";

export default function ImageButton(props: {
  source: any;
  loginStyle: any;
  onPress: any;
}) {
  return (
    <Pressable onPress={props.onPress}>
      <Image style={props.loginStyle} source={props.source} />
    </Pressable>
  );
}
