import { View, Text, StyleSheet, SectionList } from "react-native";
import React from "react";

import Logo from "@/components/Logo";

import data from "../../../services/data-passengers";
import convertData from "@/helpers/convertData";
import Separator from "@/components/Separator";
import Passenger from "@/components/Passenger";

export default function home() {
  /* 
  id: number;
  passenger_name: string;
  passenger_avatar: string;
  origin: string;
  destination: string;
  */
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Logo size={50} />
      </View>
      <View style={styles.sectionList}>
        <SectionList
          contentContainerStyle={styles.sectionList}
          ItemSeparatorComponent={() => <Separator />}
          sections={convertData(data)}
          renderItem={({ item }) => <Passenger item={item} />}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionTitle}>{section.title}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  sectionTitle: {
    marginTop: 16,
    fontWeight: "bold",
    fontSize: 28,
    color: "#fff",
  },
  sectionList: {
    alignItems: "center",
    margin: 15,
    padding: 1,
    width: "90%",
    borderRadius: 20,
    gap: 10,
    backgroundColor: "#606060",
  },
});
