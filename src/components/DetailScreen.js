import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function DetailScreen({
  title,
  images,
  description,
  location,
  actionType = "favorite", // "favorite" ou "rate"
  initialComments = [], // comentários específicos da página
}) {
  const navigation = useNavigation();

  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0] || null);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  // Modal de avaliação
  const [modalVisible, setModalVisible] = useState(false);
  const [tempRating, setTempRating] = useState(0);

  const handleSendComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { author: "Você", text: newComment }]);
      setNewComment("");
    }
  };

  const handleConfirmRating = () => {
    setRating(tempRating);
    setModalVisible(false);
  };

  // Componente interno para descrição com "Ver mais / Ver menos"
  const ExpandableText = ({ text, maxLength = 150 }) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => setExpanded(!expanded);
    const displayText =
      expanded || text.length <= maxLength
        ? text
        : text.slice(0, maxLength) + "...";

    return (
      <View style={{ marginBottom: 16 }}>
        <Text style={styles.description}>{displayText}</Text>
        {text.length > maxLength && (
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={{ color: "#666", fontWeight: "bold", marginTop: 5 }}>
              {expanded ? "Ver menos" : "Ver mais"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="chevron-back" size={28} color="#000" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>{title}</Text>

      {/* Linha principal: imagem + botões */}
      <View style={styles.imageRow}>
        {/* Imagem principal */}
        <Image
          source={{ uri: selectedImage }}
          style={styles.mainBlock}
          resizeMode="cover"
        />

        {/* Coluna de botões */}
        <View style={styles.actionsColumn}>
          <TouchableOpacity style={styles.locationButton}>
            <Ionicons name="location-sharp" size={16} color="#E60000" />
            <Text style={styles.locationText}>{location}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="share-social" size={16} color="#006400" />
            <Text style={styles.shareText}>Compartilhar</Text>
          </TouchableOpacity>

          {/* Botão Dinâmico: Favoritar ou Avaliar */}
          {actionType === "favorite" ? (
            <TouchableOpacity
              style={isFavorite ? styles.favoriteButton : styles.unfavoriteButton}
              onPress={() => setIsFavorite(!isFavorite)}
            >
              <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={16}
                color={isFavorite ? "#fff" : "#FF4081"}
              />
              <Text style={isFavorite ? styles.favoriteText : styles.unfavoriteText}>
                {isFavorite ? "Favorito" : "Favoritar"}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={rating > 0 ? styles.ratedButton : styles.unratedButton}
              onPress={() => setModalVisible(true)}
            >
              <Ionicons
                name={rating > 0 ? "star" : "star-outline"}
                size={16}
                color={rating > 0 ? "#fff" : "#FFD700"}
              />
              <Text style={rating > 0 ? styles.ratedText : styles.unratedText}>
                {rating > 0 ? `Avaliado (${rating}/5)` : "Avaliar"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Galeria de miniaturas */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gallery}>
        {images.map((img, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedImage(img)}>
            <Image
              source={{ uri: img }}
              style={[
                styles.thumbBlock,
                img === selectedImage && styles.selectedThumb,
              ]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Descrição com "Ver mais" */}
      <ExpandableText text={description} maxLength={150} />

      {/* Comentários */}
      <Text style={styles.section}>Comentários</Text>

      <View style={styles.commentInputRow}>
        <View style={styles.inputBackground}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Adicione um comentário..."
              placeholderTextColor="#999"
              value={newComment}
              onChangeText={setNewComment}
            />
          </View>
        </View>
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
              {item.avatar ? (
                <Image
                  source={{ uri: item.avatar }}
                  style={{ width: 32, height: 32, borderRadius: 16 }}
                />
              ) : (
                <Ionicons name="person" size={16} color="#fff" />
              )}
            </View>
            <View style={styles.commentTextContainer}>
              <Text style={styles.commentAuthor}>{item.author}</Text>
              <Text style={styles.commentText}>{item.text}</Text>
            </View>
          </View>
        )}
      />

      {/* Modal de Avaliação */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Avalie de 0 a 5 estrelas</Text>
            <View style={styles.starRow}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star} onPress={() => setTempRating(star)}>
                  <Ionicons
                    name={star <= tempRating ? "star" : "star-outline"}
                    size={40}
                    color="#FFD700"
                    style={{ marginHorizontal: 5 }}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmRating}>
              <Text style={styles.confirmText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EFEFEF", padding: 16 },
  backButton: { marginBottom: 8 },
  title: { fontSize: 22, fontWeight: "bold", color: "#333", marginBottom: 12 },
  imageRow: { flexDirection: "row", marginBottom: 12, alignItems: "flex-start" },
  mainBlock: { flex: 1, height: 200, borderRadius: 12, backgroundColor: "#ffc" },
  actionsColumn: { width: 140, marginLeft: 12, justifyContent: "flex-start" },
  locationButton: {
    flexDirection: "row", alignItems: "center", justifyContent: "center",
    borderWidth: 2, borderColor: "#E60000", borderRadius: 8,
    paddingVertical: 10, backgroundColor: "#fff", marginBottom: 10,
  },
  locationText: { marginLeft: 6, fontSize: 13, color: "#E60000", fontWeight: "bold" },
  shareButton: {
    flexDirection: "row", alignItems: "center", justifyContent: "center",
    borderWidth: 2, borderColor: "#006400", borderRadius: 8,
    paddingVertical: 10, backgroundColor: "#fff", marginBottom: 10,
  },
  shareText: { marginLeft: 6, fontSize: 13, color: "#006400", fontWeight: "bold" },
  favoriteButton: {
    flexDirection: "row", alignItems: "center", justifyContent: "center",
    borderRadius: 8, paddingVertical: 12, backgroundColor: "#FF4081",
  },
  favoriteText: { marginLeft: 6, fontSize: 13, color: "#fff", fontWeight: "bold" },
  unfavoriteButton: {
    flexDirection: "row", alignItems: "center", justifyContent: "center",
    borderWidth: 2, borderColor: "#FF4081", borderRadius: 8,
    paddingVertical: 12, backgroundColor: "#fff",
  },
  unfavoriteText: { marginLeft: 6, fontSize: 13, color: "#FF4081", fontWeight: "bold" },
  ratedButton: {
    flexDirection: "row", alignItems: "center", justifyContent: "center",
    borderRadius: 8, paddingVertical: 12, backgroundColor: "#FFD700",
  },
  ratedText: { marginLeft: 6, fontSize: 13, color: "#fff", fontWeight: "bold" },
  unratedButton: {
    flexDirection: "row", alignItems: "center", justifyContent: "center",
    borderWidth: 2, borderColor: "#FFD700", borderRadius: 8,
    paddingVertical: 12, backgroundColor: "#fff", },
    unratedText: { marginLeft: 6, fontSize: 13, color: "#FFD700", fontWeight: "bold" },
  gallery: { marginBottom: 16 },
  thumbBlock: { width: 80, height: 80, borderRadius: 8, marginRight: 8 },
  selectedThumb: { borderWidth: 3, borderColor: "#2F58FF", borderRadius: 8 },
  description: { fontSize: 15, color: "#444", lineHeight: 22, marginBottom: 16, textAlign: "justify" },
  section: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  commentInputRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  inputBackground: { flex: 1, backgroundColor: "#D9D9D9", borderRadius: 25, padding: 10, marginRight: 8 },
  inputWrapper: { backgroundColor: "#fff", borderRadius: 20, paddingHorizontal: 15, paddingVertical: 6 },
  input: { fontSize: 14, color: "#333", backgroundColor: "transparent", paddingVertical: 5 },
  sendButton: { backgroundColor: "#1E4F6E", padding: 10, borderRadius: 8, justifyContent: "center", alignItems: "center" },
  comment: { flexDirection: "row", alignItems: "flex-start", backgroundColor: "#D9D9D9", padding: 10, borderRadius: 8, marginBottom: 8 },
  avatarBlock: { width: 32, height: 32, borderRadius: 16, marginRight: 10, backgroundColor: "#aaa", justifyContent: "center", alignItems: "center" },
  commentTextContainer: { flex: 1 },
  commentAuthor: { fontWeight: "bold", fontSize: 14, marginBottom: 2 },
  commentText: { fontSize: 14, color: "#333" },

  // Modal de avaliação
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  starRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  confirmButton: {
    backgroundColor: "#1E4F6E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  confirmText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 10,
  },
  cancelText: {
    color: "#FF4081",
    fontSize: 16,
  },
});

