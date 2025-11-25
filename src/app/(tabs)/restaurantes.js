import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

export default function RestaurantesScreen() {
  const router = useRouter();
  const [restaurantes, setRestaurantes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const endpoint = 'http://localhost:3000/restaurant';
        let res, data;
        try {
          res = await fetch(endpoint);
          if (res.ok) {
            data = await res.json();
          }
        } catch (e) {
          console.warn('[Restaurantes] fetch error', e);
        }

        if (!data) {
          if (active) setRestaurantes([]);
          return;
        }

        const list = Array.isArray(data) ? data : (data.restaurants || data.restaurant || data.items || []);
        const normalized = list.map(r => {
          const rest = r.restaurant || r;
          const image = (rest.images && rest.images.length > 0 && rest.images[0].url) || rest.image || null;
          return { ...rest, image };
        });

        if (active) setRestaurantes(normalized);
      } catch (e) {
        console.warn('[Restaurantes] unexpected error', e);
        if (active) setRestaurantes([]);
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    return () => { active = false; };
  }, []);

  if (loading) return (
    <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
      <ActivityIndicator size="large" color="#1E77A5" />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Restaurantes Parceiros</Text>
      <Text style={styles.subtitle}>Conheça os melhores restaurantes da região!</Text>
      <View style={styles.grid}>
        {restaurantes.map((restaurante) => (
          <View key={(restaurante.id || restaurante._id || Math.random()).toString()} style={styles.card}>
            <Image source={{ uri: restaurante.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.nome}>{restaurante.name || restaurante.nome || restaurante.title}</Text>
              <View style={styles.location}>
                <Text style={styles.cidade}>{restaurante.city || restaurante.cidade}</Text>
              </View>
              <Text style={styles.descricao}>{restaurante.description || restaurante.descricao || ''}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push(`/restaurant-detail?id=${encodeURIComponent(restaurante.id || restaurante._id)}`)}
              >
                <Text style={styles.buttonText}>Ver mais</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#374151",
    textAlign: "center",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    flexBasis: "48%",
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  info: {
    padding: 8,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  cidade: {
    fontSize: 12,
    color: "#374151",
    marginLeft: 4,
  },
  nome: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1f2937",
  },
  descricao: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 2,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

