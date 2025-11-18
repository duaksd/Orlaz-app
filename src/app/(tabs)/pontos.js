import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'expo-router';

export default function Pontos() {
  const router = useRouter();
  const { user } = useAuth();
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const [cityFilter, setCityFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  const [showCityPanel, setShowCityPanel] = useState(false);
  const [showTypePanel, setShowTypePanel] = useState(false);
  // filter constants (use enum-like keys for consistent comparison)
  const CITIES = [
    { key: null, label: 'Todas Cidades' },
    { key: 'CARAGUATATUBA', label: 'Caraguatatuba' },
    { key: 'UBATUBA', label: 'Ubatuba' },
    { key: 'SAO_SEBASTIAO', label: 'São Sebastião' },
    { key: 'ILHABELA', label: 'Ilhabela' },
  ];

  const TYPES = [
    { key: null, label: 'Todos Tipos' },
    { key: 'PRAIA', label: 'Praia' },
    { key: 'URBANO', label: 'Urbano' },
    { key: 'NATUREZA', label: 'Natureza' },
  ];

  // Centralized filter computation
  useEffect(() => {
    let list = spots.slice();
    if (cityFilter) {
      // try to match by enum key or by city name
      list = list.filter(s => {
        const cityName = (s.city || '').toUpperCase();
        if (cityName === cityFilter) return true;
        // normalize accents/spaces by removing non letters for simple compare
        return cityName.replace(/[^A-Z0-9]/g, '').includes(cityFilter.replace(/[^A-Z0-9]/g, ''));
      });
    }
    if (typeFilter) {
      list = list.filter(s => (s.type || '').toUpperCase() === typeFilter);
    }
    setFiltered(list);
  }, [spots, cityFilter, typeFilter]);

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
        setFiltered(normalized);
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
      {/* Filters: two buttons that open vertical panels */}
      <View style={styles.filterButtonsRow}>
        <TouchableOpacity style={[styles.filterButton, cityFilter && styles.filterButtonActive]} onPress={() => { setShowCityPanel(v => !v); setShowTypePanel(false); }}>
          <Text style={[styles.filterButtonText, cityFilter && styles.filterButtonTextActive]}>{cityFilter ? `Cidade: ${cityFilter}` : 'Filtrar por cidade'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterButton, typeFilter && styles.filterButtonActive]} onPress={() => { setShowTypePanel(v => !v); setShowCityPanel(false); }}>
          <Text style={[styles.filterButtonText, typeFilter && styles.filterButtonTextActive]}>{typeFilter ? `Categoria: ${typeFilter}` : 'Filtrar por categoria'}</Text>
        </TouchableOpacity>
      </View>

      {showCityPanel && (
        <View style={styles.panel}>
          {CITIES.map(c => (
            <TouchableOpacity key={String(c.key)} style={[styles.panelItem, cityFilter === c.key && styles.panelItemActive]} onPress={() => { setCityFilter(c.key); setShowCityPanel(false); }}>
              <Text style={[styles.panelItemText, cityFilter === c.key && styles.panelItemTextActive]}>{c.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {showTypePanel && (
        <View style={styles.panel}>
          {TYPES.map(t => (
            <TouchableOpacity key={String(t.key)} style={[styles.panelItem, typeFilter === t.key && styles.panelItemActive]} onPress={() => { setTypeFilter(t.key); setShowTypePanel(false); }}>
              <Text style={[styles.panelItemText, typeFilter === t.key && styles.panelItemTextActive]}>{t.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View style={{ alignItems: 'center', marginBottom: 8 }}>
        <TouchableOpacity onPress={() => { setCityFilter(null); setTypeFilter(null); }} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Limpar filtros</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Pontos Turísticos</Text>
      <FlatList
        data={filtered}
        keyExtractor={(item) => (item.id || item._id || Math.random()).toString()}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.city}>{item.city}</Text>
            <Text style={styles.place}>{item.name || item.title}</Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push(`/tourist-spot-detail?id=${encodeURIComponent(item.id)}`)}>
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
  filterRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 8, justifyContent: 'center' },
  chip: { paddingVertical: 6, paddingHorizontal: 10, borderRadius: 20, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', marginHorizontal: 4 },
  chipSelected: { backgroundColor: '#2A77A2', borderColor: '#2A77A2' },
  chipText: { color: '#333' },
  chipTextSelected: { color: '#fff' },
  filterButtonsRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 8 },
  filterButton: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd' },
  filterButtonActive: { backgroundColor: '#2A77A2', borderColor: '#2A77A2' },
  filterButtonText: { color: '#333', fontWeight: '600' },
  filterButtonTextActive: { color: '#fff' },
  panel: { backgroundColor: '#fff', borderRadius: 8, padding: 8, marginBottom: 8, marginHorizontal: 8 },
  panelItem: { paddingVertical: 10, paddingHorizontal: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  panelItemActive: { backgroundColor: '#E6F0F7' },
  panelItemText: { color: '#333' },
  panelItemTextActive: { color: '#1E77A5', fontWeight: '700' },
  clearButton: { backgroundColor: '#fff', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 8, borderWidth: 1, borderColor: '#ddd' },
  clearButtonText: { color: '#333' },
});
