import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../components/ListScreen";

export default function GastronomiaScreen({ navigation }) {
  const items = [
    {
      name: "Restaurante Caiçara's",
      location: "Caraguatatuba",
      description: "Pratos típicos com frutos do mar frescos.",
      image: { uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/21/7f/93/visual-da-nossa-varanda.jpg?w=1200&h=-1&s=1" },
      route: "RestauranteCaicara"
    },
    {
      name: "Sabores do Mar",
      location: "Ubatuba",
      description: "Variedade de frutos do mar preparados com tradição.",
      image: { uri: "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL0s2UEhxR3dHUjNhcVhZcjlPTzNrZmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=" },
      route: "SaboresDoMar"
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

                {/* Botão Ver Mais */}
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate(item.route)}
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
