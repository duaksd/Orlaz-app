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
      image: { uri: "https://scontent.fpoa10-1.fna.fbcdn.net/v/t39.30808-6/482053788_3490971341047763_5679505573610082876_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=XoUksaxVtVcQ7kNvwEAnG_F&_nc_oc=Admxpg1ztG8jAoOeD9xdWNajfkqlq3eFOmQ6mQ6oXxscyPyolRBsU__x9R5CRewpxaA&_nc_zt=23&_nc_ht=scontent.fpoa10-1.fna&_nc_gid=ENXmD7K3lbmGYkYRxD41zg&oh=00_AffT4DRA38qAoVnAhRkhVkevDddFuCPi5N36JK6fCN2Yzg&oe=68EB4EE5" },
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
