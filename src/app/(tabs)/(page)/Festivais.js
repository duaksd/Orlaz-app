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
import { useRouter } from 'expo-router';
import { styles } from "../../../components/ListScreen";

export default function FestivaisScreen() {
  const router = useRouter();
  const items = [
    {
      name: "Festival de Verão",
      location: "Ilhabela",
      description: "Shows e apresentações culturais à beira-mar.",
      image: require("../../../../assets/images/fesilha.jpg"),
    },
    {
      name: "Festa de São Sebastião",
      location: "São Sebastião",
      description: "Tradição religiosa e cultural da região.",
      image: require("../../../../assets/images/religioso.jpg"),
    },
  ];

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Festivais e Eventos</Text>
        </View>

        <Text style={styles.subtitle}>
          Conheça os principais festivais e festas tradicionais do Litoral Norte.
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
                  onPress={() => {
                    if (item.name === "Festival de Verão") {
                      router.push('/FestivalDeVerao');
                    } else if (item.name === "Festa de São Sebastião") {
                      router.push('/FestaSaoSeba');
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
