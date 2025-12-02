import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
  BackHandler,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../contexts/AuthContext";
import { useRating } from "../contexts/RatingContext";
import CommentsSection from "./CommentsSection";

export default function DetailScreen({
  title,
  images,
  description,
  location,
  placeId,
  favId = null,
  actionType = "favorite", // "favorite" ou "rate"
  initialComments = [], // comentários específicos da página
  commentKey = "restaurantId", // key used by backend: 'restaurantId' or 'touristSpotId'
}) {
  const navigation = useNavigation();
  const router = useRouter();
  const { user, token } = useAuth(); // Obtenha o estado de autenticação
  const { ratings, updateRating } = useRating(); // Obtenha o contexto de avaliação

  const [isFavorite, setIsFavorite] = useState(!!favId);
  const [favLoading, setFavLoading] = useState(false);
  const [favRecord, setFavRecord] = useState(favId ? { id: favId } : null); // store favorite record from backend (if any)
  const [selectedImage, setSelectedImage] = useState(images && images[0] ? images[0] : null);
  // comments are now handled by a dedicated component `CommentsSection`

  // Recuperar avaliação do contexto
  const screenName = title || placeId || 'detail'; // Use o título (ou placeId) como identificador único
  const [rating, setRating] = useState(() => (ratings && ratings[screenName]) ? ratings[screenName] : 0);

  // Keep local rating in sync if context changes
  useEffect(() => {
    if (ratings && typeof ratings[screenName] !== 'undefined') {
      setRating(ratings[screenName]);
    }
  }, [ratings, screenName]);

  // Modal de avaliação
  const [modalVisible, setModalVisible] = useState(false);
  const [tempRating, setTempRating] = useState(0);

  // Comment sending is delegated to `CommentsSection` (see component props)

  // comment POST is handled in `CommentsSection` by default; DetailScreen
  // only provides the `commentKey` prop to select the correct backend field.

  const handleConfirmRating = () => {
    setRating(tempRating);
    updateRating(screenName, tempRating); // Salve a avaliação no contexto
    setModalVisible(false);
  };

  const refreshFavorites = async () => {
    if (!user?.id || !placeId) return;
    try {
      const res = await fetch(`http://localhost:3000/favorite/${user.id}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
      if (!res.ok) return;
      const data = await res.json();
      const favs = Array.isArray(data) ? data : data.favorites || [];
      const match = favs.find((f) => f.placeId === placeId);
      setFavRecord(match || null);
      setIsFavorite(!!match);
    } catch (e) {
      console.warn("[DetailScreen] refreshFavorites error", e);
    }
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (mounted && placeId && user?.id) await refreshFavorites();
    })();
    return () => {
      mounted = false;
    };
  }, [placeId, user?.id]);

  useEffect(() => {
    // Handle Android hardware back to go to Pontos tab instead of default
    if (Platform.OS === 'android') {
      const onBackPress = () => {
        try {
          if (router && typeof router.push === 'function') {
            router.push('/pontos');
            return true;
          }
        } catch (e) {
          // fall back
        }
        navigation.navigate && navigation.navigate('Pontos');
        return true; // prevent default
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }
    // no-op for other platforms
    return undefined;
  }, [navigation]);

  const handleToggleFavorite = async () => {
    if (!user?.id) {
      try {
        if (router && typeof router.push === 'function') {
          router.push('/Login');
          return;
        }
      } catch (e) {
        // fallback
      }
      navigation.navigate("Login");
      return;
    }
    if (!placeId) return;
    setFavLoading(true);
    try {
      if (!isFavorite) {
        const res = await fetch("http://localhost:3000/favorite", {
          method: "POST",
          headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
          body: JSON.stringify({ userId: user.id, placeId }),
        });
        if (res.ok) {
          // try to read returned favorite record
          try {
            const json = await res.json();
            // backend might return the created object or { favorite: {...} }
            const created = json && (json.favorite || json.data || json) ;
            // normalize created id
            const fid = created && (created.id || created._id || created.favoriteId || created.favId);
            if (fid) {
              setFavRecord({ id: fid });
              setIsFavorite(true);
            }
          } catch (e) {
            // ignore JSON parse error, still refresh
          }
          await refreshFavorites();
        } else {
          console.warn('[DetailScreen] add favorite failed', res.status);
        }
      } else {
        const fid = favRecord?.id;
        if (fid) {
          const delRes = await fetch(`http://localhost:3000/favorite/${fid}`, { method: "DELETE", headers: token ? { Authorization: `Bearer ${token}` } : {} });
          if (delRes.ok) {
            setFavRecord(null);
            setIsFavorite(false);
          } else {
            // try alternative delete signature
            try {
              await fetch(`http://localhost:3000/favorite/${fid}/${user.id}`, { method: 'DELETE', headers: token ? { Authorization: `Bearer ${token}` } : {} });
              setFavRecord(null);
              setIsFavorite(false);
            } catch (e) {}
          }
          await refreshFavorites();
        }
      }
    } catch (e) {
      console.error("[DetailScreen] toggle favorite error", e);
    } finally {
      setFavLoading(false);
    }
  };

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContent}>
  {/* Botão de Voltar (prioriza expo-router; fallback para react-navigation) */}
        <TouchableOpacity
          onPress={() => {
            try {
              // prefer router.back()
              if (router && typeof router.back === 'function') {
                router.back();
                return;
              }
            } catch (e) {}
            try {
              // explicit route to pontos
              if (router && typeof router.push === 'function') {
                router.push('/pontos');
                return;
              }
            } catch (e) {}
            try {
              navigation && navigation.navigate && navigation.navigate('Pontos');
            } catch (e) {}
          }}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color="#000" />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.imageRow}>
          <Image
            source={{ uri: selectedImage }}
            style={styles.mainBlock}
            resizeMode="cover"
          />

          <View style={styles.actionsColumn}>
            <TouchableOpacity style={styles.locationButton}>
              <Ionicons name="location-sharp" size={16} color="#E60000" />
              <Text style={styles.locationText}>{location}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.shareButton}>
              <Ionicons name="share-social" size={16} color="#006400" />
              <Text style={styles.shareText}>Compartilhar</Text>
            </TouchableOpacity>

            {actionType === "favorite" ? (
              <TouchableOpacity
                style={
                  isFavorite ? styles.favoriteButton : styles.unfavoriteButton
                }
                onPress={handleToggleFavorite}
                disabled={favLoading}
              >
                {favLoading ? (
                  <ActivityIndicator size="small" color={isFavorite ? "#fff" : "#FF4081"} />
                ) : (
                  <>
                    <Ionicons
                      name={isFavorite ? "heart" : "heart-outline"}
                      size={16}
                      color={isFavorite ? "#fff" : "#FF4081"}
                    />
                    <Text
                      style={
                        isFavorite ? styles.favoriteText : styles.unfavoriteText
                      }
                    >
                      {isFavorite ? "Favorito" : "Favoritar"}
                    </Text>
                  </>
                )}
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={rating > 0 ? styles.ratedButton : styles.unratedButton}
                onPress={() => {
                  if (user) {
                    setTempRating(rating);
                    setModalVisible(true);
                  } else {
                    alert("Você precisa estar logado para avaliar.");
                  }
                }}
              >
                <Ionicons
                  name={rating > 0 ? "star" : "star-outline"}
                  size={16}
                  color={rating > 0 ? "#fff" : "#FFD700"}
                />
                <Text
                  style={rating > 0 ? styles.ratedText : styles.unratedText}
                >
                  {rating > 0 ? `Avaliado (${rating}/5)` : "Avaliar"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.gallery}
        >
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

        <ExpandableText text={description} maxLength={150} />

        <CommentsSection
          initialComments={initialComments}
          placeId={placeId}
          user={user}
          token={token}
          commentKey={commentKey}
        />
      </ScrollView>

      {modalVisible && (
        <View style={styles.modalWrapper}>
          <View style={styles.modalBackground} />

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

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalCancel}
                onPress={() => setModalVisible(false)}
              >
                <Text>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalConfirm}
                onPress={handleConfirmRating}
              >
                <Text style={{ color: "#fff" }}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EFEFEF", position: "relative" },
  scrollContent: { paddingHorizontal: 18 },
  backButton: { marginBottom: 8, marginTop: 25 },
  title: { fontSize: 22, fontWeight: "bold", color: "#333", marginBottom: 12 },
  imageRow: { flexDirection: "row", marginBottom: 12, alignItems: "flex-start" },
  mainBlock: { flex: 1, height: 200, borderRadius: 12, backgroundColor: "#fff" },
  actionsColumn: { width: 140, marginLeft: 12, justifyContent: "flex-start" },
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
  locationText: { marginLeft: 6, fontSize: 13, color: "#E60000", fontWeight: "bold" },
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
  shareText: { marginLeft: 6, fontSize: 13, color: "#006400", fontWeight: "bold" },
  favoriteButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    backgroundColor: "#FF4081",
  },
  favoriteText: { marginLeft: 6, fontSize: 13, color: "#fff", fontWeight: "bold" },
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
  unfavoriteText: { marginLeft: 6, fontSize: 13, color: "#FF4081", fontWeight: "bold" },
  ratedButton: { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: 8, paddingVertical: 12, backgroundColor: "#FFD700" },
  ratedText: { marginLeft: 6, fontSize: 13, color: "#fff", fontWeight: "bold" },
  unratedButton: { flexDirection: "row", alignItems: "center", justifyContent: "center", borderWidth: 2, borderColor: "#FFD700", borderRadius: 8, paddingVertical: 12, backgroundColor: "#fff" },
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

  // MODAL
  modalWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    width: "90%",
    maxWidth: 400,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  starRow: { flexDirection: "row", justifyContent: "center", marginVertical: 10 },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    width: "100%",
  },
  modalCancel: { padding: 10 },
  modalConfirm: {
    padding: 10,
    backgroundColor: "#1E77A5",
    borderRadius: 6,
  },
});
