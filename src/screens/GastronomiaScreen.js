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
import {styles} from "../components/ListScreen";

export default function GastronomiaScreen({ navigation }) {
  const items = [
    {
      name: "Restaurante Caiçara",
      location: "São Sebastião",
      description: "Pratos típicos com frutos do mar frescos.",
      image: { uri: "https://via.placeholder.com/300x200.png?text=Gastronomia+1" },
    },
    {
      name: "Sabores do Mar",
      location: "Caraguatatuba",
      description: "Variedade de frutos do mar preparados com tradição.",
      image: { uri: "https://via.placeholder.com/300x200.png?text=Gastronomia+2" },
    },
  ];

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Gastronomia</Text>
        </View>

        <Text style={styles.subtitle}>
          Conheça os restaurantes e sabores típicos da culinária caiçara.
        </Text>

        <View style={styles.grid}>
          {items.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.location}>
                  <Ionicons name="location-outline" size={14} color="#555" />{" "}
                  {item.location}
                </Text>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Ver Mais</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
