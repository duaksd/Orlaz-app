import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function CityPage({ 
  name, 
  headerImage, 
  description, 
  curiosities, 
  population, 
  area, 
  bestSeason, 
  attractions, 
  foods, 
  events 
}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={{ url: headerImage }} style={styles.headerImage} />
          <Text style={styles.headerTitle}>{name}</Text>
        </View>

        {/* Sobre a Cidade */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Sobre a Cidade</Text>
          <Text style={styles.paragraph}>{description}</Text>
        </View>

        {/* Curiosidades */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Curiosidades</Text>
          <Text style={styles.paragraph}>{curiosities}</Text>

          <View style={styles.infoRow}>
            <View style={styles.infoBox}>
              <FontAwesome name="users" size={18} color="#333" />
              <Text style={styles.infoText}>{population}</Text>
              <Text style={styles.infoLabel}>População</Text>
            </View>
            <View style={styles.infoBox}>
              <Ionicons name="map" size={18} color="#333" />
              <Text style={styles.infoText}>{area}</Text>
              <Text style={styles.infoLabel}>Área</Text>
            </View>
            <View style={styles.infoBox}>
              <MaterialIcons name="calendar-today" size={18} color="#333" />
              <Text style={styles.infoText}>{bestSeason}</Text>
              <Text style={styles.infoLabel}>Melhor Época</Text>
            </View>
          </View>
        </View>

        {/* Principais Atrações */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Principais Atrações</Text>
          <Text style={styles.subTitle}>Locais mais bem avaliados por nossos usuários</Text>
          <View style={styles.attractionsRow}>
            {attractions.map((item, i) => (
              <View key={i} style={styles.attraction}>
                <Image source={{ uri: item.image }} style={styles.attractionImage} />
                <Text style={styles.attractionText}>{item.name}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreButtonText}>Mais Atrações</Text>
          </TouchableOpacity>
        </View>

        {/* Gastronomia */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Gastronomia</Text>
          <Text style={styles.subTitle}>Comidas típicas da região</Text>
          {foods.map((food, i) => (
            <View key={i} style={styles.foodRow}>
              <Image source={{ uri: food.image }} style={styles.foodImage} />
              <View style={styles.foodTextBox}>
                <Text style={styles.foodTitle}>{food.name}</Text>
                <Text style={styles.foodDesc}>{food.desc}</Text>
              </View>
            </View>
          ))}
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreButtonText}>Mais...</Text>
          </TouchableOpacity>
        </View>

        {/* Eventos */}
        <View style={styles.events}>
          <Text style={styles.sectionTitleWhite}>Eventos e Festivais</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
            {events.map((event, i) => (
              <View key={i} style={styles.eventBox}>
                <Text style={styles.eventDate}>{event.date}</Text>
                <Text style={styles.eventTitle}>{event.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  header: { position: "relative", alignItems: "center" },
  headerImage: { width: "100%", height: 180 },
  headerTitle: {
    position: "absolute",
    bottom: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  card: {
    backgroundColor: "#fff",
    margin: 12,
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  paragraph: { fontSize: 14, color: "#555", marginBottom: 10 },
  infoRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  infoBox: { alignItems: "center", flex: 1 },
  infoText: { fontSize: 14, fontWeight: "bold", marginTop: 4 },
  infoLabel: { fontSize: 12, color: "#777" },
  subTitle: { fontSize: 14, color: "#777", marginBottom: 10 },
  attractionsRow: { flexDirection: "row", justifyContent: "space-between" },
  attraction: { flex: 1, marginRight: 8 },
  attractionImage: { width: "100%", height: 100, borderRadius: 12 },
  attractionText: { fontSize: 12, marginTop: 6, fontWeight: "500" },
  moreButton: {
    backgroundColor: "#3daff1",
    padding: 10,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
  },
  moreButtonText: { color: "#fff", fontWeight: "bold" },
  foodRow: { flexDirection: "row", marginBottom: 12, alignItems: "center" },
  foodImage: { width: 80, height: 80, borderRadius: 12, marginRight: 10 },
  foodTextBox: { flex: 1 },
  foodTitle: { fontWeight: "bold", fontSize: 14 },
  foodDesc: { fontSize: 12, color: "#666" },
  events: {
    backgroundColor: "#3daff1",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 12,
  },
  sectionTitleWhite: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  eventBox: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    marginRight: 12,
    alignItems: "center",
    minWidth: 120,
  },
  eventDate: { fontWeight: "bold", fontSize: 14, marginBottom: 4 },
  eventTitle: { fontSize: 12, textAlign: "center", color: "#333" },
});
