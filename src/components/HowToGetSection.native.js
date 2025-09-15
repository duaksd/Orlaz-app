import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function HowToGetSection() {
  const cities = [
    { name: "Ilhabela", latitude: -23.778, longitude: -45.358 },
    { name: "Caraguatatuba", latitude: -23.622, longitude: -45.414 },
    { name: "Ubatuba", latitude: -23.433, longitude: -45.093 },
    { name: "São Sebastião", latitude: -23.791, longitude: -45.415 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como chegar</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.622,
          longitude: -45.414,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {cities.map((city, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: city.latitude, longitude: city.longitude }}
            title={city.name}
          />
        ))}
      </MapView>
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
    paddingVertical: 8,
  },
  map: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
});
