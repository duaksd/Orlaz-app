import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import DetailScreen from '../components/DetailScreen';

export default function TouristSpotDetail({ route, navigation }) {
  const { id } = route.params || {};
  const [spot, setSpot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    const load = async () => {
      if (!id) {
        setError('ID do ponto não fornecido');
        setLoading(false);
        return;
      }
      try {
        const res = await fetch(`http://localhost:3000/tourist-spot/${id}`);
        if (!res.ok) throw new Error('Erro ao carregar ponto');
        const data = await res.json();
        const raw = data.touristSpot || data || null;
        if (!raw) throw new Error('Resposta inválida');

        // Normalize images: backend may return images as objects or strings
        let images = [];
        if (Array.isArray(raw.images)) {
          images = raw.images.map(x => (typeof x === 'string' ? x : x.url || x.path || '')).filter(Boolean);
        } else if (raw.image) {
          images = [raw.image];
        }

        const normalized = {
          title: raw.name || raw.title || raw.name_pt || 'Ponto turístico',
          images,
          description: raw.description || raw.content || '',
          location: raw.city || raw.location || '',
          actionType: 'favorite',
          initialComments: Array.isArray(raw.comments) ? raw.comments.map(c => ({ author: c.author || c.name || 'Usuário', text: c.text || c.body || '' })) : [],
        };

        if (active) setSpot(normalized);
      } catch (e) {
        if (active) setError(e.message || 'Erro');
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    return () => { active = false; };
  }, [id]);

  if (loading) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#1E77A5" />
    </View>
  );

  if (error) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <Text style={{ color: '#333' }}>{error}</Text>
    </View>
  );

  return <DetailScreen {...spot} />;
}
