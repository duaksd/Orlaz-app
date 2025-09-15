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

export default function CidadesScreen({ navigation }) {
  const [depoimentos, setDepoimentos] = useState([
    { nome: "Ana P.", texto: "Amei conhecer Ubatuba, a natureza é incrível!" },
    { nome: "Carlos M.", texto: "São Sebastião tem praias paradisíacas. Recomendo!" },
    { nome: "João R.", texto: "Caraguatatuba é ótima para famílias!" },
    { nome: "Maria L.", texto: "Ilhabela é simplesmente deslumbrante." },
  ]);
  const [novoDepoimento, setNovoDepoimento] = useState("");
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [maisRecente, setMaisRecente] = useState(true);

  const cidades = [
    { nome: "Caraguatatuba", descricao: "Conhecida como a 'Capital do Litoral Norte', oferece praias paradisíacas, trilhas e cultura caiçara.", imagem: require("../../assets/images/sobrecaragua.png") },
    { nome: "São Sebastião", descricao: "Combina praias deslumbrantes, ecoturismo e um centro histórico encantador.", imagem: require("../../assets/images/sobresaoseba.png") },
    { nome: "Ubatuba", descricao: "Praias paradisíacas, trilhas incríveis e vida marinha abundante.", imagem: require("../../assets/images/sobreubatuba.png") },
    { nome: "Ilhabela", descricao: "Ilha deslumbrante com cachoeiras, praias e atividades de aventura.", imagem: require("../../assets/images/sobreilhabela.png") },
  ];

  const adicionarDepoimento = () => {
    if (!novoDepoimento.trim()) return;
    setDepoimentos([{ nome: "Você", texto: novoDepoimento }, ...depoimentos]);
    setNovoDepoimento("");
  };

  const depoimentosOrdenados = useMemo(() => {
    return [...depoimentos].sort((a, b) => (maisRecente ? depoimentos.indexOf(b) - depoimentos.indexOf(a) : depoimentos.indexOf(a) - depoimentos.indexOf(b)));
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
          <Text style={styles.title}>Cidades do Litoral Norte</Text>
        </View>

        {/* Introdução */}
        <View style={styles.introSection}>
          <Text style={styles.introText}>
            Descubra o Litoral Norte de São Paulo: praias paradisíacas, cultura caiçara e cidades históricas com experiências únicas.
          </Text>
        </View>

        {/* Depoimentos */}
        <View style={styles.commentsSection}>
          <Text style={styles.sectionTitle}>Depoimentos</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Compartilhe seu depoimento..."
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
            <TouchableOpacity onPress={() => setMaisRecente(true)} style={[styles.filterButton, maisRecente && styles.filterButtonActive]}>
              <Text style={[styles.filterText, maisRecente && styles.filterTextActive]}>Mais recente</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMaisRecente(false)} style={[styles.filterButton, !maisRecente && styles.filterButtonActive]}>
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

        {/* Cidades - scroll horizontal */}
        <View style={{ marginBottom: 20 }}>
          <Text style={[styles.sectionTitle, { marginBottom: 12 }]}>Cidades</Text>
          <FlatList
            data={cidades}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.nome}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.cardHorizontal} onPress={() => navigation.navigate(item.nome.replace(/\s/g, ""))}>
                <Image source={item.imagem} style={styles.cardImageHorizontal} />
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.6)"]}
                  style={styles.overlay}
                />
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
