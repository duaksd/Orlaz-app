import React, { useState } from "react"; 
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Meus <Text style={styles.highlight}>Favoritos</Text>
        </Text>
        <Text style={styles.subtitle}>
          Aqui estão os destinos que você mais gostou.
        </Text>
        <Text style={styles.subtitle}>
          Relembre e planeje a sua próxima viagem.
        </Text>
      </View>

      {/* Conteúdo */}
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View>
            <FontAwesome name="heart-o" size={60} color="#1E77A5" />
          </View>
          <Text style={styles.emptyText}>Nenhum destino favoritado ainda.</Text>
          <Text style={styles.emptySubText}>Adicione seus lugares preferidos!</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.grid}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.city}>{item.city}</Text>
              <Text style={styles.place}>{item.place}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() =>
                  setFavorites(favorites.filter((fav) => fav.id !== item.id))
                }
              >
                <FontAwesome name="heart" size={14} color="#E91E63" />
                <Text style={styles.removeText}>Remover dos favoritos</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginTop: 90, // empurra mais para baixo
    marginBottom: 100, // separação do "nenhum favorito"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  highlight: {
    color: "#1E77A5", // destaque no mesmo tom do coração
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  emptySubText: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    textAlign: "center",
  },
  grid: {
    paddingBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    padding: 8,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  city: {
    fontSize: 14,
    fontWeight: "600",
  },
  place: {
    fontSize: 13,
    color: "#333",
    marginBottom: 6,
  },
  removeButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  removeText: {
    fontSize: 12,
    color: "#E91E63",
    fontWeight: "600",
  },
});
