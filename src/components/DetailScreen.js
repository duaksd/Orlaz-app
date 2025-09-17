import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TextInput, FlatList } from "react-native";

export default function DetailScreen({ title, images, description, location, comments, actions }) {
  return (
    <ScrollView style={styles.container}>
      {/* Imagem principal */}
      {images?.length > 0 && <Image source={images[0]} style={styles.mainImage} />}

      {/* Miniaturas */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gallery}>
        {images.map((img, index) => (
          <Image key={index} source={img} style={styles.thumb} />
        ))}
      </ScrollView>

      {/* Botões de ação */}
      <View style={styles.actions}>
        {actions?.map((action, index) => (
          <View key={index} style={[styles.actionButton, { backgroundColor: action.color }]}>
            <Text style={styles.actionText}>{action.text}</Text>
          </View>
        ))}
      </View>

      {/* Título e descrição */}
      <Text style={styles.title}>{title}</Text>
      {location && <Text style={styles.location}>{location}</Text>}
      <Text style={styles.description}>{description}</Text>

      {/* Comentários */}
      <Text style={styles.section}>Comentários</Text>
      <TextInput style={styles.input} placeholder="Adicione um comentário..." />
      <FlatList
        data={comments}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Image source={item.avatar} style={styles.avatar} />
            <View>
              <Text style={styles.commentAuthor}>{item.author}</Text>
              <Text>{item.text}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  mainImage: { width: "100%", height: 200, borderRadius: 12 },
  gallery: { marginVertical: 10 },
  thumb: { width: 80, height: 80, borderRadius: 8, marginRight: 8 },
  actions: { flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },
  actionButton: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8 },
  actionText: { color: "#fff", fontWeight: "bold" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 6 },
  location: { fontSize: 14, color: "#888", marginBottom: 6 },
  description: { fontSize: 14, color: "#444", marginBottom: 16 },
  section: { fontSize: 16, fontWeight: "bold", marginVertical: 8 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 8, marginBottom: 10 },
  comment: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  avatar: { width: 30, height: 30, borderRadius: 15, marginRight: 8 },
  commentAuthor: { fontWeight: "bold" },
});
