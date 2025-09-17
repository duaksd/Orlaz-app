import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function DetailScreen({ title, images, description, location }) {
  const navigation = useNavigation();

  // Comentários já publicados
  const [comments, setComments] = useState([
    { author: "João", text: "Ótimo lugar! Muito bonito e tranquilo." },
    { author: "Maria", text: "Adorei a visita, recomendo para todos." },
    { author: "Lucas", text: "Lugar incrível para tirar fotos!" },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleSendComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { author: "Você", text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={28} color="#000" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>{title}</Text>

      {/* Bloco principal + botões lado a lado */}
      <View style={styles.imageRow}>
        <View style={styles.mainBlock} />
        <View style={styles.actionsColumn}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>{location}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Compartilhar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Favoritar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Galeria de blocos */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gallery}>
        {images.map((_, index) => (
          <View key={index} style={styles.thumbBlock} />
        ))}
      </ScrollView>

      {/* Descrição */}
      <Text style={styles.description}>{description}</Text>

      {/* Comentários */}
      <Text style={styles.section}>Comentários</Text>

      {/* Input de comentário + botão de enviar */}
      <View style={styles.commentInputRow}>
        <TextInput
          style={styles.input}
          placeholder="Adicione um comentário..."
          placeholderTextColor="#999"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendComment}>
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={comments}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <View style={styles.avatarBlock}>
              <Ionicons name="person" size={16} color="#fff" />
            </View>
            <View style={styles.commentTextContainer}>
              <Text style={styles.commentAuthor}>{item.author}</Text>
              <Text style={styles.commentText}>{item.text}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  backButton: { marginBottom: 8 },
  title: { fontSize: 22, fontWeight: "bold", color: "#333", marginBottom: 12 },
  imageRow: { flexDirection: "row", marginBottom: 12 },
  mainBlock: { width: "60%", height: 200, borderRadius: 12, backgroundColor: "#ccc" },
  actionsColumn: { justifyContent: "space-around", marginLeft: 12, flex: 1 },
  actionButton: { backgroundColor: "#eee", paddingVertical: 16, paddingHorizontal: 8, borderRadius: 8 },
  actionText: { fontSize: 12, color: "#333", textAlign: "center" },
  gallery: { marginBottom: 16 },
  thumbBlock: { width: 80, height: 80, borderRadius: 8, backgroundColor: "#ccc", marginRight: 8 },
  description: { fontSize: 15, color: "#444", lineHeight: 22, marginBottom: 16 },
  section: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  commentInputRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  input: { flex: 1, borderWidth: 1, borderColor: "#ddd", borderRadius: 30, padding: 10, fontSize: 14, marginRight: 8 },
  sendButton: { backgroundColor: "#1E4F6E", padding: 10, borderRadius: 8, justifyContent: "center", alignItems: "center" },
  comment: { flexDirection: "row", alignItems: "flex-start", backgroundColor: "#f0f0f0", padding: 10, borderRadius: 8, marginBottom: 8 },
  avatarBlock: { width: 32, height: 32, borderRadius: 16, marginRight: 10, backgroundColor: "#aaa", justifyContent: "center", alignItems: "center" },
  commentTextContainer: { flex: 1 },
  commentAuthor: { fontWeight: "bold", fontSize: 14, marginBottom: 2 },
  commentText: { fontSize: 14, color: "#333" },
});
