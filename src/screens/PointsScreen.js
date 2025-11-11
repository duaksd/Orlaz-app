import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function PointsScreen({ navigation }) {
  const { user } = useAuth();
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const res = await fetch('http://localhost:3000/tourist-spot');
        if (!res.ok) return setSpots([]);
        const data = await res.json();
        // data may be { touristSpots: [...] } or an array
        const list = Array.isArray(data) ? data : (data.touristSpots || data.touristSpot || []);
        if (!active) return;
        // normalize image property
        const normalized = list.map(s => {
          const spot = s.touristSpot || s;
          const image = (spot.images && spot.images.length > 0 && spot.images[0].url) || spot.image || null;
          return { ...spot, image };
        });
        setSpots(normalized);
      } catch (e) {
        setSpots([]);
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    return () => { active = false; };
  }, [user]);

  if (loading) return (
    <View style={styles.center}><ActivityIndicator size="large" color="#1E77A5" /></View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pontos Turísticos</Text>
      <FlatList
        data={spots}
        keyExtractor={(item) => (item.id || item._id || Math.random()).toString()}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.city}>{item.city}</Text>
            <Text style={styles.place}>{item.name || item.title}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Atracoes', { screen: 'Atracoes' })}>
              <Text style={styles.buttonText}>Ver</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: '#F7F7F7' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12, textAlign: 'center' },
  grid: { paddingBottom: 24 },
  card: { flex: 1, backgroundColor: '#fff', margin: 6, borderRadius: 10, padding: 8, alignItems: 'center' },
  image: { width: '100%', height: 100, borderRadius: 8, marginBottom: 8 },
  city: { fontSize: 12, color: '#666' },
  place: { fontSize: 14, fontWeight: '600' },
  button: { marginTop: 8, backgroundColor: '#1E77A5', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6 },
  buttonText: { color: '#fff', fontWeight: '600' },
});
