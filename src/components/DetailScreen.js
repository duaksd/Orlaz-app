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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function DetailScreen({ title, images, description, location }) {
  const navigation = useNavigation();

  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0] || null);
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
                img === selectedImage && styles.selectedThumb, // aplica borda se selecionada
              ]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>


      {/* Descrição */}
      <Text style={styles.description}>{description}</Text>

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
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    padding: 16
  },
  backButton: {
    marginBottom: 8
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12
  },
  imageRow: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "flex-start"
  },
  mainBlock: {
    flex: 1,
    height: 200,
    borderRadius: 12,
    backgroundColor: "#ffc"
  },
  actionsColumn: {
    width: 117,
    marginLeft: 12,
    justifyContent: "flex-start"
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#E60000",
    borderRadius: 8,
    paddingVertical: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  locationText: { 
    marginLeft: 6, 
    fontSize: 13, 
    color: "#E60000", 
    fontWeight: "bold" 
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#006400",
    borderRadius: 8,
    paddingVertical: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  shareText: { 
    marginLeft: 6, 
    fontSize: 13, 
    color: "#006400", 
    fontWeight: "bold" 
  },
  favoriteButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    backgroundColor: "#FF4081",
  },
  favoriteText: { 
    marginLeft: 6, 
    fontSize: 13, 
    color: "#fff", 
    fontWeight: "bold" 
  },
  unfavoriteButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FF4081",
    borderRadius: 8,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  unfavoriteText: { 
    marginLeft: 6, 
    fontSize: 13, 
    color: "#FF4081", 
    fontWeight: "bold" 
  },
  gallery: { 
    marginBottom: 16 
  },
  thumbBlock: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 8
  },
  selectedThumb: {
    borderWidth: 3,
    borderColor: "#2F58FF", // cor da borda do destaque
    borderRadius: 8,
  },

  description: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
    marginBottom: 16
  },
  section: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  commentInputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  inputBackground: {
    flex: 1,
    backgroundColor: "#D9D9D9", // fundo cinza da caixa
    borderRadius: 25,
    padding: 10, // espaço interno para destacar o input branco
    marginRight: 8,
  },
  inputWrapper: {
    backgroundColor: "#fff", // fundo branco do input
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },  
  input: {
    fontSize: 14,
    color: "#333",
    backgroundColor: "transparent",
    paddingVertical: 5,
  },  
  sendButton: {
    backgroundColor: "#1E4F6E",
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  comment: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#D9D9D9",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8
  },
  avatarBlock: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
    backgroundColor: "#aaa",
    justifyContent: "center",
    alignItems: "center"
  },
  commentTextContainer: {
    flex: 1
  },
  commentAuthor: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 2
  },
  commentText: {
    fontSize: 14,
    color: "#333"
  },
});
