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
import { useRouter } from 'expo-router';

export default function AtracoesScreen() {
  const [mostrarTextoCompleto, setMostrarTextoCompleto] = useState(false);
  const router = useRouter();

    const atracoes = [
    {
      nome: "Trilhas",
      descricao:
        "Explore trilhas exuberantes na Mata Atlântica, apreciando fauna e flora únicas.",
      imagem: require("../../../../assets/images/trilhas.jpg"),
      rota: "Trilhas",
    },
    {
      nome: "Esportes Aquáticos",
      descricao:
        "Aventure-se em surf, stand-up paddle e mergulho em praias paradisíacas.",
      imagem: require("../../../../assets/images/esportes.jpg"),
      rota: "Esportes",
    },
    {
      nome: "Festivais e Eventos",
      descricao:
        "Vivencie a cultura local através de festas, shows e eventos tradicionais.",
      imagem: require("../../../../assets/images/festivais.jpg"),
      rota: "Festivais",
    },
    {
      nome: "Gastronomia Local",
      descricao:
        "Deguste pratos típicos da culinária caiçara, feitos com ingredientes frescos.",
      imagem: require("../../../../assets/images/mexilhao.jpg"),
      rota: "Gastronomia",
    },
  ];

  const textoResumo = `O Litoral Norte é um convite à aventura e à cultura. Das trilhas secretas aos sabores caiçaras, cada atração é uma experiência para guardar na memória.`;

  const textoCompleto = `O Litoral Norte de São Paulo vai muito além das praias: é um mosaico de experiências para todos os gostos. Explore trilhas que revelam a Mata Atlântica em sua forma mais pura, aventure-se em esportes aquáticos que desafiam limites, participe de festas e eventos que celebram a cultura local e saboreie a gastronomia caiçara, repleta de ingredientes frescos e receitas ancestrais.

Cada atração é um convite para sentir a energia da região, conectar-se com suas tradições e criar histórias inesquecíveis. Está preparado para essa jornada?`;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { try { router.back(); } catch (e) {} }}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Atrações</Text>
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

        {/* Atrações - scroll horizontal */}
        <View style={{ marginBottom: 20 }}>
          <FlatList
            data={atracoes}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.nome}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.cardHorizontal}
                onPress={() => { try { router.push(`/${item.rota}`); } catch (e) {} }}
              >
                <Image source={item.imagem} style={styles.cardImageHorizontal} />
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
