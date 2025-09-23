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

export default function TrilhasScreen({ navigation }) {
  const items = [
    {
      name: "Trilha das Sete Praias",
      location: "Ubatuba",
      description: "Caminhada que conecta praias paradisíacas e desertas.",
      image: require("../../assets/images/7praias.jpg"),
    },
    {
      name: "Trilha da Água Branca",
      location: "Ilhabela",
      description: "Contato direto com a Mata Atlântica preservada.",
      image: require("../../assets/images/trilhaagua.jpg"),
    },
  ];

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Trilhas</Text>
        </View>

        <Text style={styles.subtitle}>
          Explore trilhas incríveis em meio à Mata Atlântica no Litoral Norte.
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
