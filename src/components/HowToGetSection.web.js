import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HowToGetSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como chegar</Text>
      <View style={styles.mapContainer}>
        <Text style={styles.webText}>
          O mapa está disponível apenas no app mobile
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, marginTop: 20 },
  title: {
    backgroundColor: "#F39C12",
    color: "#fff",
    fontWeight: "700",
    fontSize: 19,
    textAlign: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 6,
  },
  mapContainer: {
    backgroundColor: "#65adccff",
    borderRadius: 10,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  webText: { color: "#fff", fontWeight: "600" },
});
