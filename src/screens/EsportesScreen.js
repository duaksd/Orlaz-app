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


export default function EsportesScreen({ navigation }) {
  const items = [
    {
      name: "Surf",
      location: "Ubatuba",
      description: "Praias com ondas perfeitas para surfistas de todos os níveis.",
      image: require("../../assets/images/surf.jpg"),
    },
    {
      name: "Stand-up Paddle",
      location: "Caraguatatuba",
      description: "Atividade relaxante para explorar o mar tranquilo.",
      image: require("../../assets/images/standup.jpg"),
    },
  ];

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Esportes Aquáticos</Text>
        </View>

        <Text style={styles.subtitle}>
          Explore os esportes aquáticos e atividades ao ar livre no Litoral Norte.
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
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => {
                    if (item.name === "Surf") {
                      navigation.navigate("Surf");
                    } else if (item.name === "Stand-up Paddle") {
                      navigation.navigate("Standup");
                    }
                  }}
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