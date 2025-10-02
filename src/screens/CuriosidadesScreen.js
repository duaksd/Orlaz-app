import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../components/ListScreen";

export default function CuriosidadesScreen({ navigation }) {
  const items = [
    {
      name: "Ubatuba",
      location: "Litoral Norte",
      description: "Cidade das belas praias e natureza exuberante.",
      population: "90.000 habitantes",
      area: "723 km²",
      bestSeason: "Verão",
      image: require("../../assets/images/ubatuba.jpg"),
    },
    {
      name: "Caraguatatuba",
      location: "Litoral Norte",
      description: "Principal cidade da região.",
      population: "120.000 habitantes",
      area: "485 km²",
      bestSeason: "Primavera",
      image: require("../../assets/images/caraguatatuba.jpg"),
    },
  ];

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Curiosidades</Text>
        </View>

        <Text style={styles.subtitle}>
          Conheça mais sobre as cidades do Litoral Norte
        </Text>

        <View style={styles.grid}>
          {items.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.location}>
                  <Ionicons name="location-outline" size={14} color="#555" /> {item.location}
                </Text>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <View style={styles.cityInfoContainer}>
                  <Text style={styles.cityInfoText}>População: {item.population}</Text>
                  <Text style={styles.cityInfoText}>Área: {item.area}</Text>
                  <Text style={styles.cityInfoText}>Melhor época: {item.bestSeason}</Text>
                </View>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const additionalStyles = StyleSheet.create({
  cityInfoContainer: {
    marginVertical: 8,
  },
  cityInfoText: {
    fontSize: 12,
    color: "#555",
    marginBottom: 4,
  },
});

Object.assign(styles, additionalStyles);