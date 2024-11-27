import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from "react-native";
import React from "react";

export default function ImageButton(props: {
  source: ImageSourcePropType | undefined;
  loginStyle: StyleProp<ImageStyle>;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={props.onPress}>
      <Image style={props.loginStyle} source={props.source} />
    </Pressable>
  );
}
