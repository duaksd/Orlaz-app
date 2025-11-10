import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function CidadesScreen({ navigation }) {
  const [mostrarTextoCompleto, setMostrarTextoCompleto] = useState(false);

  const cidades = [
    {
      nome: "Caraguatatuba",
      route: "Caraguatatuba",
      descricao:
        "Descubra praias paradisíacas e a alma caiçara pulsando em cada canto.",
      imagem: require("../../assets/images/sobrecaragua.png"),
    },
    {
      nome: "São Sebastião",
      route: "SaoSebastiao",
      descricao:
        "Explore um centro histórico charmoso e paisagens naturais de tirar o fôlego.",
      imagem: require("../../assets/images/sobresaoseba.png"),
    },
    {
      nome: "Ubatuba",
      route: "Ubatuba",
      descricao:
        "Mergulhe em trilhas secretas, praias intocadas e uma vida marinha surpreendente.",
      imagem: require("../../assets/images/sobreubatuba.png"),
    },
    {
      nome: "Ilhabela",
      route: "Ilhabela",
      descricao:
        "Aventure-se entre cachoeiras, praias escondidas e atividades que aceleram o coração.",
      imagem: require("../../assets/images/sobreilhabela.png"),
    },
  ];

  const textoResumo = `O Litoral Norte de São Paulo guarda destinos que encantam por sua natureza e cultura. Caraguatatuba, São Sebastião, Ubatuba e Ilhabela são portas para experiências únicas que vão além das praias.`;

  const textoCompleto = `Cada cidade do Litoral Norte oferece uma jornada distinta: de Caraguatatuba, com sua atmosfera acolhedora e praias de tirar o fôlego; passando por São Sebastião, onde história e natureza se entrelaçam em cenários inesquecíveis; Ubatuba, que revela trilhas secretas e um oceano repleto de vida; até Ilhabela, ilha onde a aventura e a tranquilidade convivem em perfeita harmonia.

Explore esses refúgios autênticos, sinta a energia da cultura caiçara e permita-se descobrir o que torna essa região tão especial. Qual delas vai conquistar você primeiro?`;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Cidades</Text>
        </View>

        {/* Introdução com Ver Mais */}
        <View style={styles.introSection}>
          <Text style={styles.introText}>
            {mostrarTextoCompleto ? textoCompleto : textoResumo}
          </Text>

          <TouchableOpacity
            onPress={() => setMostrarTextoCompleto(!mostrarTextoCompleto)}
          >
            <Text style={styles.verMaisText}>
              {mostrarTextoCompleto ? "Ver menos" : "Ver mais"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Cidades - scroll horizontal */}
        <View style={{ marginBottom: 20 }}>
          <FlatList
            data={cidades}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.nome}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.cardHorizontal}
                onPress={() => navigation.navigate(item.route)}
              >
                <Image
                  source={item.imagem}
                  style={styles.cardImageHorizontal}
                />
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.6)"]}
                  style={styles.overlay}
                />
                <View style={styles.cardContentHorizontal}>
                  <Text style={styles.cardTitleHorizontal}>{item.nome}</Text>
                  <Text style={styles.cardDescriptionHorizontal}>
                    {item.descricao}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#1E4F6E",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  introSection: {
    marginBottom: 20,
    backgroundColor: "#2E6A8F",
    padding: 16,
    borderRadius: 20,
  },
  introText: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 24,
    textAlign: "justify",
  },
  verMaisText: {
    marginTop: 8,
    color: "#B0E0E6",
    fontWeight: "600",
    fontSize: 14,
  },
  cardHorizontal: {
    width: 260,
    height: 180,
    marginRight: 16,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  cardImageHorizontal: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
  },
  cardContentHorizontal: {
    position: "absolute",
    bottom: 12,
    left: 12,
    right: 12,
  },
  cardTitleHorizontal: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 4,
  },
  cardDescriptionHorizontal: {
    fontSize: 13,
    color: "#fff",
    lineHeight: 18,
  },
});
