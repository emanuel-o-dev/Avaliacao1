import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

interface PassengerProps {
  id: number;
  passenger_name: string;
  passenger_avatar: string;
  origin: string;
  destination: string;
}

export default function Passenger(props: { item: PassengerProps }) {
  return (
    <View style={styles.container}>
      <View style={styles.passengerName}>
        <Image
          source={{ uri: props.item.passenger_avatar }}
          height={50}
          width={50}
        />
        <Text style={styles.text}>{props.item.passenger_name}</Text>
      </View>
      <View style={styles.places}>
        <Text style={styles.text}>{props.item.origin}</Text>
        <Text style={styles.text}>{props.item.destination}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    flexDirection: "column",
    gap: 5,
    backgroundColor: "#ddd",
    width: "90%",
    borderRadius: 20,
  },
  passengerName: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingLeft: 15,
  },
  places: {
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 15,
    paddingBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
  },
});
