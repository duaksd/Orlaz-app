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

export default function ListScreen({ navigation, route }) {
  const { title, subtitle, items } = route.params;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>

        {/* Subtítulo */}
        <Text style={styles.subtitle}>{subtitle}</Text>

        {/* Grid de cards */}
        <View style={styles.grid}>
          {items.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.location}>
                  <Ionicons name="location-outline" size={14} color="#555" /> {item.location}
                </Text>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate("Detalhe", {
                      title: item.name,
                      description: item.fullDescription,
                      image: item.image,
                    })
                  }
                >
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

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  backButton: {
    paddingRight: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3, // sombra Android
    shadowColor: "#000", // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: "100%",
    height: 120,
  },
  cardContent: {
    padding: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  location: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    color: "#555",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#1E4F6E",
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
});