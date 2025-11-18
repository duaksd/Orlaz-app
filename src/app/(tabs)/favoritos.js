import React, { useState, useEffect } from "react"; 
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";

export default function Favorites() {
  const router = useRouter();
  const { user, updateUser } = useAuth();
  const [favorites, setFavorites] = useState([]);

  // Carrega favoritos do usuário ao iniciar
  useEffect(() => {
    let isActive = true;
    const loadFavorites = async () => {
      if (!user?.id) return setFavorites([]);
      try {
        const res = await fetch(`http://localhost:3000/favorite/${user.id}`);
        if (!res.ok) {
          setFavorites(user.favorites || []);
          return;
        }
        const data = await res.json();
        const favs = Array.isArray(data.favorites) ? data.favorites : [];
        // Fetch details for each favorite
        const pontos = await Promise.all(
          favs.map(async fav => {
            try {
              const r = await fetch(`http://localhost:3000/tourist-spot/${fav.placeId}`);
              if (!r.ok) return null;
              const ponto = await r.json();
              const spot = ponto.touristSpot || ponto;
              const image = (spot.images && spot.images.length > 0 && spot.images[0].url) || spot.image || null;
              return { ...spot, image, favId: fav.id };
            } catch (e) {
              return null;
            }
          })
        );
        const filtered = pontos.filter(Boolean);
        if (isActive) setFavorites(filtered);
      } catch (e) {
        setFavorites(user.favorites || []);
      }
    };
    loadFavorites();
    return () => { isActive = false; };
  }, [user]);

  const toggleFavorite = (item) => {
    // Optimistically update UI
    const isCurrentlyFav = favorites.some(fav => fav.id === item.id);
    if (isCurrentlyFav) {
      // remove: call delete endpoint
      (async () => {
        try {
          // prefer using favId if present
          const fid = item.favId || item.fav_id || item.favoriteId || null;
          if (fid) {
            await fetch(`http://localhost:3000/favorite/${fid}/${user.id}`, { method: 'DELETE' });
          } else {
            // fallback: attempt by place id
            await fetch(`http://localhost:3000/favorite/${item.id}/${user.id}`, { method: 'DELETE' });
          }
        } catch (e) {
          console.warn('[FavoritesScreen] delete favorite error', e);
        } finally {
          // refresh from server
          try {
            const res = await fetch(`http://localhost:3000/favorite/${user.id}`);
            if (res.ok) {
              const data = await res.json();
              const favs = Array.isArray(data.favorites) ? data.favorites : [];
              const pontos = await Promise.all(
                favs.map(async fav => {
                  try {
                    const r = await fetch(`http://localhost:3000/tourist-spot/${fav.placeId}`);
                    if (!r.ok) return null;
                    const ponto = await r.json();
                    const spot = ponto.touristSpot || ponto;
                    const image = (spot.images && spot.images.length > 0 && spot.images[0].url) || spot.image || null;
                    return { ...spot, image, favId: fav.id };
                  } catch (e) { return null; }
                })
              );
              setFavorites(pontos.filter(Boolean));
              updateUser && updateUser({ favorites: favs });
            }
          } catch (e) {
            console.warn('[FavoritesScreen] refresh after delete failed', e);
          }
        }
      })();
    } else {
      // add favorite: call POST endpoint
      (async () => {
        try {
          const res = await fetch('http://localhost:3000/favorite', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user.id, placeId: item.id }),
          });
          if (res.ok) {
            const json = await res.json();
            const created = json && (json.favorite || json.data || json);
            const fid = created && (created.id || created._id || created.favoriteId || created.favId);
            // refresh favorites
            const refresh = await fetch(`http://localhost:3000/favorite/${user.id}`);
            if (refresh.ok) {
              const data = await refresh.json();
              const favs = Array.isArray(data.favorites) ? data.favorites : [];
              const pontos = await Promise.all(
                favs.map(async fav => {
                  try {
                    const r = await fetch(`http://localhost:3000/tourist-spot/${fav.placeId}`);
                    if (!r.ok) return null;
                    const ponto = await r.json();
                    const spot = ponto.touristSpot || ponto;
                    const image = (spot.images && spot.images.length > 0 && spot.images[0].url) || spot.image || null;
                    return { ...spot, image, favId: fav.id };
                  } catch (e) { return null; }
                })
              );
              setFavorites(pontos.filter(Boolean));
              updateUser && updateUser({ favorites: favs });
            }
          }
        } catch (e) {
          console.warn('[FavoritesScreen] add favorite error', e);
        }
      })();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Meus <Text style={styles.highlight}>Favoritos</Text>
        </Text>
        <Text style={styles.subtitle}>
          Aqui estão seus destinos e atividades em favorito!
        </Text>
        <Text style={styles.subtitle}>
          Relembre e planeje a sua próxima viagem.
        </Text>
      </View>

      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <FontAwesome name="heart-o" size={60} color="#1E77A5" />
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
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push(`/tourist-spot-detail?id=${encodeURIComponent(item.id)}&favId=${encodeURIComponent(item.favId || '')}`)}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.city}>{item.city}</Text>
              <Text style={styles.place}>{item.place}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={(e) => { e.stopPropagation && e.stopPropagation(); toggleFavorite(item); }}
              >
                <FontAwesome name="heart" size={14} color="#E91E63" />
                <Text style={styles.removeText}>Remover dos favoritos</Text>
              </TouchableOpacity>
            </TouchableOpacity>
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
    boxShadow: "0px 2px 4px rgba(0,0,0,0.25)",
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
