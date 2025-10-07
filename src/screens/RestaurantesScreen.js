import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantesScreen({ navigation }) {
  const restaurantes = [
    {
      id: 1,
      nome: "Ben's Bar & Comidaria",
      cidade: "Ilhabela",
      descricao:
        "Bar e restaurante à beira-mar, conhecido por seus pratos de frutos do mar frescos e ambiente descontraído.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/01/03/2d/ben-s-bar-comidaria.jpg?w=700&h=-1&s=1",
      tela: "BensBarComidaria",
    },
    {
      id: 2,
      nome: "Restaurante Ravenala",
      cidade: "São Sebastião",
      descricao:
        "Restaurante descontraído, famoso por seus pratos de frutos do mar e ambiente acolhedor.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/40/ae/28/caldeirada.jpg?w=700&h=-1&s=1",
      tela: "RestauranteRavenala",
    },
    {
      id: 3,
      nome: "Garage Bar Steakhouse",
      cidade: "Caraguatatuba",
      descricao:
        "Especializado em carnes nobres, oferece um ambiente moderno e uma carta de vinhos selecionada.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/7f/41/42/nossa-decoracao-novo.jpg?w=700&h=-1&s=1",
      tela: "GarageBarSteakhouse",
    },
    {
      id: 4,
      nome: "Raízes Restaurante Pizzaria",
      cidade: "Ubatuba",
      descricao:
        "Restaurante e pizzaria com ambiente familiar, conhecido por suas pizzas artesanais e pratos variados.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/93/5c/a4/caption.jpg?w=700&h=-1&s=1",
      tela: "RaizesRestaurantePizzaria",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Restaurantes Parceiros</Text>
      <Text style={styles.subtitle}>
        Conheça os melhores restaurantes da região!
      </Text>
      <View style={styles.grid}>
        {restaurantes.map((restaurante) => (
          <View key={restaurante.id} style={styles.card}>
            <Image source={{ uri: restaurante.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.nome}>{restaurante.nome}</Text>
              <View style={styles.location}>
                <Text style={styles.cidade}>{restaurante.cidade}</Text>
              </View>
              <Text style={styles.descricao}>{restaurante.descricao}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(restaurante.tela)}
              >
                <Text style={styles.buttonText}>Ver mais</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#374151",
    textAlign: "center",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    flexBasis: "48%",
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  info: {
    padding: 8,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  cidade: {
    fontSize: 12,
    color: "#374151",
    marginLeft: 4,
  },
  nome: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1f2937",
  },
  descricao: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 2,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

