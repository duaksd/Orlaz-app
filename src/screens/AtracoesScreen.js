import React, { useState, useMemo } from "react";
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
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function AtracoesScreen({ navigation }) {
  const [depoimentos, setDepoimentos] = useState([
    { nome: "Lucas S.", texto: "As trilhas são incríveis, paisagens de tirar o fôlego!" },
    { nome: "Mariana T.", texto: "Adorei os esportes aquáticos, muito divertidos." },
    { nome: "Pedro A.", texto: "Os festivais são ótimos para conhecer a cultura local." },
    { nome: "Fernanda C.", texto: "A gastronomia caiçara é deliciosa, recomendo o peixe fresco." },
  ]);
  const [novoDepoimento, setNovoDepoimento] = useState("");
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [maisRecente, setMaisRecente] = useState(true);

  const atracoes = [
    { nome: "Trilhas", descricao: "Explore trilhas exuberantes na Mata Atlântica, apreciando fauna e flora únicas.", imagem: null, cor: "#A3D9B1" },
    { nome: "Esportes Aquáticos", descricao: "Aventure-se em surf, stand-up paddle e mergulho em praias paradisíacas.", imagem: null, cor: "#7EC8E3" },
    { nome: "Festivais e Eventos", descricao: "Vivencie a cultura local através de festas, shows e eventos tradicionais.", imagem: null, cor: "#F7C873" },
    { nome: "Gastronomia Local", descricao: "Deguste pratos típicos da culinária caiçara, feitos com ingredientes frescos.", imagem: null, cor: "#E17C7C" },
  ];

  const adicionarDepoimento = () => {
    if (!novoDepoimento.trim()) return;
    setDepoimentos([{ nome: "Você", texto: novoDepoimento }, ...depoimentos]);
    setNovoDepoimento("");
  };

  const depoimentosOrdenados = useMemo(() => {
    return [...depoimentos].sort((a, b) =>
      maisRecente ? depoimentos.indexOf(b) - depoimentos.indexOf(a) : depoimentos.indexOf(a) - depoimentos.indexOf(b)
    );
  }, [depoimentos, maisRecente]);

  const depoimentosExibidos = mostrarTodos ? depoimentosOrdenados : depoimentosOrdenados.slice(0, 3);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeMain")}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Atrações do Litoral Norte</Text>
        </View>

        {/* Introdução */}
        <View style={styles.introSection}>
          <Text style={styles.introText}>
            O Litoral Norte de São Paulo oferece atrações únicas: trilhas, esportes aquáticos, festivais culturais e gastronomia típica.
          </Text>
        </View>

        {/* Depoimentos */}
        <View style={styles.commentsSection}>
          <Text style={styles.sectionTitle}>Depoimentos</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Adicione seu depoimento..."
              placeholderTextColor="#ccc"
              value={novoDepoimento}
              onChangeText={setNovoDepoimento}
            />
            <TouchableOpacity onPress={adicionarDepoimento} style={styles.sendButton}>
              <LinearGradient colors={["#1E4F6E", "#2E6A8F"]} style={styles.gradientButton}>
                <Ionicons name="send" size={24} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.filterContainer}>
            <Text style={styles.filterLabel}>Ordenar por:</Text>
            <TouchableOpacity
              onPress={() => setMaisRecente(true)}
              style={[styles.filterButton, maisRecente && styles.filterButtonActive]}
            >
              <Text style={[styles.filterText, maisRecente && styles.filterTextActive]}>Mais recente</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMaisRecente(false)}
              style={[styles.filterButton, !maisRecente && styles.filterButtonActive]}
            >
              <Text style={[styles.filterText, !maisRecente && styles.filterTextActive]}>Mais antigo</Text>
            </TouchableOpacity>
          </View>

          {depoimentosExibidos.map((item, index) => (
            <View key={index} style={styles.commentCard}>
              <Text style={styles.commentName}>{item.nome}</Text>
              <Text style={styles.commentText}>{item.texto}</Text>
            </View>
          ))}

          {depoimentos.length > 3 && !mostrarTodos && (
            <TouchableOpacity onPress={() => setMostrarTodos(true)} style={styles.verMaisButton}>
              <Text style={styles.verMaisText}>Ver mais depoimentos</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Atrações - scroll horizontal */}
        <View style={{ marginBottom: 20 }}>
          <Text style={[styles.sectionTitle, { marginBottom: 12 }]}>Atrações</Text>
          <FlatList
            data={atracoes}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.nome}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.cardHorizontal}>
                {item.imagem ? (
                  <Image source={item.imagem} style={styles.cardImageHorizontal} />
                ) : (
                  <View style={[styles.cardImageHorizontal, { backgroundColor: item.cor }]} />
                )}
                <LinearGradient colors={["transparent", "rgba(0,0,0,0.6)"]} style={styles.overlay} />
                <View style={styles.cardContentHorizontal}>
                  <Text style={styles.cardTitleHorizontal}>{item.nome}</Text>
                  <Text style={styles.cardDescriptionHorizontal}>{item.descricao}</Text>
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
  safeContainer: { flex: 1, backgroundColor: "#1E4F6E", paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
  scrollContainer: { padding: 16, paddingBottom: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  title: { fontSize: 26, fontWeight: "bold", color: "#fff", marginLeft: 10 },
  introSection: { marginBottom: 20, backgroundColor: "#2E6A8F", padding: 16, borderRadius: 20 },
  introText: { fontSize: 16, color: "#fff", lineHeight: 24 },
  commentsSection: { marginBottom: 20 },
  sectionTitle: { fontSize: 22, fontWeight: "700", color: "#fff" },
  inputContainer: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  input: { flex: 1, backgroundColor: "#fff", borderRadius: 25, paddingHorizontal: 18, paddingVertical: 10, fontSize: 14, color: "#333" },
  sendButton: { marginLeft: 8 },
  gradientButton: { padding: 12, borderRadius: 25, justifyContent: "center", alignItems: "center" },
  filterContainer: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  filterLabel: { color: "#fff", marginRight: 10 },
  filterButton: { paddingVertical: 5, paddingHorizontal: 12, borderRadius: 15, backgroundColor: "#2E6A8F", marginRight: 6 },
  filterButtonActive: { backgroundColor: "#fff" },
  filterText: { color: "#fff", fontSize: 14 },
  filterTextActive: { color: "#1E4F6E", fontWeight: "bold" },
  commentCard: { backgroundColor: "#fff", borderRadius: 20, padding: 14, marginBottom: 12 },
  commentName: { fontWeight: "600", fontSize: 16, marginBottom: 4, color: "#1E4F6E" },
  commentText: { fontSize: 14, color: "#555", lineHeight: 20 },
  verMaisButton: { alignItems: "center", marginTop: 8 },
  verMaisText: { color: "#F7931E", fontWeight: "bold" },

  // Estilo horizontal
  cardHorizontal: { width: 260, height: 180, marginRight: 16, borderRadius: 20, overflow: "hidden", position: "relative" },
  cardImageHorizontal: { width: "100%", height: "100%", position: "absolute", top: 0, left: 0 },
  overlay: { position: "absolute", bottom: 0, left: 0, right: 0, height: "50%" },
  cardContentHorizontal: { position: "absolute", bottom: 12, left: 12, right: 12 },
  cardTitleHorizontal: { fontSize: 18, fontWeight: "700", color: "#fff", marginBottom: 4 },
  cardDescriptionHorizontal: { fontSize: 13, color: "#fff", lineHeight: 18 },
});
