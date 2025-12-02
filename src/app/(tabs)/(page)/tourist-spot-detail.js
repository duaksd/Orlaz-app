import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import DetailScreen from '../../../components/DetailScreen';
import { useAuth } from '../../../contexts/AuthContext';

export default function TouristSpotDetail(props) {
  const router = useRouter();
  const [routeParams, setRouteParams] = useState({ id: undefined, favId: undefined });

  // Accept legacy props.route.params if present (safety), otherwise parse from URL or Linking
  useEffect(() => {
    if (props && props.route && props.route.params) {
      const { id, favId } = props.route.params || {};
      if (id) {
        setRouteParams({ id, favId });
        return;
      }
    }

    let active = true;
    const readParams = async () => {
      try {
        // web: query string
        if (typeof window !== 'undefined' && window.location) {
          const qs = new URLSearchParams(window.location.search || '');
          const id = qs.get('id');
          const favId = qs.get('favId') || qs.get('favID') || qs.get('favid');
          if (id && active) {
            setRouteParams({ id, favId });
            return;
          }

          // also try pathname segment (e.g. /tourist-spot-detail/2)
          const parts = (window.location.pathname || '').split('/').filter(Boolean);
          const last = parts[parts.length - 1];
          if (last && !isNaN(Number(last))) {
            if (active) setRouteParams({ id: last, favId: favId || undefined });
            return;
          }
        }
      } catch (e) {
        // ignore
      }

      try {
        // native: try expo-linking
        const initial = await Linking.getInitialURL();
        if (initial) {
          const parsed = Linking.parse(initial);
          const id = parsed.queryParams && parsed.queryParams.id;
          const favId = parsed.queryParams && (parsed.queryParams.favId || parsed.queryParams.favID);
          if (id && active) {
            setRouteParams({ id, favId });
            return;
          }
          // try path segments returned by Linking.parse
          if (parsed.path) {
            const parts = parsed.path.split('/').filter(Boolean);
            const last = parts[parts.length - 1];
            if (last && !isNaN(Number(last)) && active) {
              setRouteParams({ id: last, favId: favId || undefined });
              return;
            }
          }
        }
      } catch (e) {
        // ignore
      }
    };
    readParams();
    return () => { active = false; };
  }, [props]);
  const [spot, setSpot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    // Depend on routeParams so we run when id becomes available
    const { id: paramId } = routeParams || {};
    let active = true;
    const load = async () => {
      // wait briefly if params might arrive asynchronously (Linking)
      if (!paramId) {
        await new Promise(r => setTimeout(r, 150));
      }
      // Try to resolve id from multiple sources: routeParams, paramId, querystring, or pathname
      let finalId = (routeParams && routeParams.id) || paramId;
      if (!finalId && typeof window !== 'undefined' && window.location) {
        try {
          const qs = new URLSearchParams(window.location.search || '');
          finalId = finalId || qs.get('id');
        } catch (e) {
          // ignore
        }
        // hash-based routers (expo dev on web) may place the path and query in location.hash
        if (!finalId) {
          try {
            const hash = window.location.hash || '';
            // example: #/tourist-spot-detail?id=2
            const qIndex = hash.indexOf('?');
            if (qIndex !== -1) {
              const hashQs = new URLSearchParams(hash.slice(qIndex + 1));
              finalId = finalId || hashQs.get('id');
            }
          } catch (e) {
            // ignore
          }
        }
        if (!finalId) {
          const parts = (window.location.pathname || '').split('/').filter(Boolean);
          const last = parts[parts.length - 1];
          if (last) finalId = last;
        }
      }
      if (!finalId) {
        if (active) {
          setError('ID do ponto não fornecido');
          setLoading(false);
        }
        return;
      }
      try {
        // finalId may be a string (GUID or numeric), so don't coerce to Number
        // include Authorization header when token is available (from AuthContext)
        const res = await fetch(`http://localhost:3000/tourist-spot/${finalId}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
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

        const finalFavId = (routeParams && routeParams.favId) || undefined;
        const normalized = {
          placeId: raw.id || raw._id || raw.placeId || null,
          favId: finalFavId || null,
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
  }, [routeParams.id]);

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

  return <DetailScreen {...spot} commentKey="touristSpotId" />;
}
