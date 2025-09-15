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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
    {
      nome: "Trilhas",
      descricao: "Explore trilhas exuberantes na Mata Atlântica, apreciando fauna e flora únicas.",
      imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    {
      nome: "Esportes Aquáticos",
      descricao: "Aventure-se em surf, stand-up paddle e mergulho em praias paradisíacas.",
      imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    {
      nome: "Festivais e Eventos",
      descricao: "Vivencie a cultura local através de festas, shows e eventos tradicionais.",
      imagem: "https://images.unsplash.com/photo-1533777324565-3a0f02f975f3?auto=format&fit=crop&w=800&q=60",
    },
    {
      nome: "Gastronomia Local",
      descricao: "Deguste pratos típicos da culinária caiçara, feitos com ingredientes frescos.",
      imagem: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const adicionarDepoimento = () => {
    if (novoDepoimento.trim() === "") return;
    setDepoimentos([{ nome: "Você", texto: novoDepoimento }, ...depoimentos]);
    setNovoDepoimento("");
  };

  // Ordena depoimentos dinamicamente
  const depoimentosOrdenados = useMemo(() => {
    return [...depoimentos].sort((a, b) => {
      const indexA = depoimentos.indexOf(a);
      const indexB = depoimentos.indexOf(b);
      return maisRecente ? indexB - indexA : indexA - indexB;
    });
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

        {/* Seção principal */}
        <View style={styles.introSection}>
          <Text style={styles.introText}>
            O Litoral Norte de São Paulo oferece atrações únicas para todos os gostos: trilhas, esportes aquáticos, festivais culturais e gastronomia típica. Cada experiência permite vivenciar a beleza e a cultura local de forma inesquecível.
          </Text>
        </View>

        {/* Seção de depoimentos */}
        <View style={styles.commentsSection}>
          <Text style={styles.sectionTitle}>Depoimentos</Text>

          {/* Input para novo depoimento */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Adicione seu depoimento..."
              placeholderTextColor="#999"
              value={novoDepoimento}
              onChangeText={setNovoDepoimento}
            />
            <TouchableOpacity onPress={adicionarDepoimento} style={styles.sendButton}>
              <Ionicons name="send" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Filtro */}
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

          {/* Lista de depoimentos */}
          {depoimentosExibidos.map((item, index) => (
            <View key={index} style={styles.commentCard}>
              <Text style={styles.commentName}>{item.nome}</Text>
              <Text style={styles.commentText}>{item.texto}</Text>
            </View>
          ))}

          {/* Botão ver mais */}
          {depoimentos.length > 3 && !mostrarTodos && (
            <TouchableOpacity onPress={() => setMostrarTodos(true)} style={styles.verMaisButton}>
              <Text style={styles.verMaisText}>Ver mais depoimentos</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Seção de atrações */}
        {atracoes.map((atracao, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: atracao.imagem }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{atracao.nome}</Text>
            <Text style={styles.cardDescription}>{atracao.descricao}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "#1E4F6E", paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
  scrollContainer: { padding: 16, paddingBottom: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginLeft: 10 },
  introSection: { marginBottom: 20, backgroundColor: "#2E6A8F", padding: 16, borderRadius: 12 },
  introText: { fontSize: 16, color: "#fff", lineHeight: 22 },
  commentsSection: { marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#fff", marginBottom: 12 },
  inputContainer: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  input: { flex: 1, backgroundColor: "#fff", borderRadius: 20, paddingHorizontal: 16, paddingVertical: 8, fontSize: 14, color: "#000" },
  sendButton: { backgroundColor: "#2E6A8F", padding: 10, borderRadius: 20, marginLeft: 8 },
  filterContainer: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  filterLabel: { color: "#fff", marginRight: 10 },
  filterButton: { paddingVertical: 4, paddingHorizontal: 10, borderRadius: 12, backgroundColor: "#1E4F6E", marginRight: 6, borderWidth: 1, borderColor: "#fff" },
  filterButtonActive: { backgroundColor: "#fff" },
  filterText: { color: "#fff", fontSize: 14 },
  filterTextActive: { color: "#1E4F6E", fontWeight: "bold" },
  commentCard: { backgroundColor: "#fff", borderRadius: 12, padding: 12, marginBottom: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  commentName: { fontWeight: "600", fontSize: 16, marginBottom: 4, color: "#1a1a1a" },
  commentText: { fontSize: 14, color: "#555", lineHeight: 20 },
  verMaisButton: { alignItems: "center", marginTop: 8 },
  verMaisText: { color: "#F7931E", fontWeight: "bold" },
  card: { backgroundColor: "#fff", borderRadius: 12, marginBottom: 16, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, shadowRadius: 5, elevation: 5 },
  cardImage: { width: "100%", height: 180 },
  cardTitle: { fontSize: 20, fontWeight: "600", color: "#1a1a1a", margin: 12 },
  cardDescription: { fontSize: 15, color: "#555", lineHeight: 22, marginHorizontal: 12, marginBottom: 12 },
});
