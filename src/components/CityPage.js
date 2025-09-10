import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function CityPage({
  name = "Caraguatatuba",
  headerImage,
  description = "Descrição da cidade...",
  curiosities = "Curiosidades sobre a cidade...",
  population = "134.873 habitantes",
  area = "484,947 km²",
  bestSeason = "De 09/12 a 00/01",
  attractions = [],
  foods = [],
  events = [],
  mapImage,
  latitude,
  longitude,
  googleApiKey,
  onBack,
}) {
  const getImageSource = (img, placeholder) => {
    if (!img) return placeholder ? { uri: placeholder } : null;
    return typeof img === "number" ? img : { uri: img };
  };

  // monta fonte do mapa (static map / imagem enviada)
  let mapSource;
  if (mapImage) {
    mapSource = getImageSource(
      mapImage,
      "https://via.placeholder.com/300.png?text=Mapa"
    );
  } else if (latitude != null && longitude != null && googleApiKey) {
    const url = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=12&size=400x400&markers=color:red%7C${latitude},${longitude}&key=${googleApiKey}`;
    mapSource = { uri: url };
  } else {
    mapSource = { uri: "https://via.placeholder.com/300.png?text=Mapa" };
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER - imagem full width */}
        <ImageBackground
          source={getImageSource(
            headerImage,
            "https://via.placeholder.com/900x400.png?text=Header"
          )}
          style={styles.header}
          imageStyle={styles.headerImageStyle}
        >
          {onBack && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={onBack}
              accessibilityLabel="Voltar"
            >
              <Ionicons name="chevron-back" size={22} color="#fff" />
            </TouchableOpacity>
          )}
          <Text numberOfLines={1} style={styles.headerTitle}>
            {name}
          </Text>
        </ImageBackground>

        {/* content container (sobrepõe o header) */}
        <View style={styles.contentWrap}>
          {/* SOBRE A CIDADE */}
          
            <View style={styles.rowTop}>
              <Image source={mapSource} style={styles.mapCircle} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cardHeading}>Sobre a Cidade</Text>
                <Text style={styles.paragraph}>{description}</Text>
              </View>
            </View>

          {/* CURIOSIDADES */}

          <View style={styles.handleLeft}>
              <MaterialIcons name="drag-indicator" size={18} color="#666" />
            </View>

            <Text style={styles.cardHeading}>Curiosidades</Text>

          <View style={[styles.card, styles.cardWithHandle]}>

            <Text style={styles.cardHeading}>Curiosidades</Text>
            <Text style={styles.paragraph}>{curiosities}</Text>

            <View style={styles.infoRow}>
              <View style={styles.infoBox}>
                <FontAwesome name="users" size={16} color="#333" />
                <Text style={styles.infoValue}>{population}</Text>
                <Text style={styles.infoLabel}>População</Text>
              </View>
              <View style={styles.infoBox}>
                <Ionicons name="map" size={16} color="#333" />
                <Text style={styles.infoValue}>{area}</Text>
                <Text style={styles.infoLabel}>Área</Text>
              </View>
              <View style={styles.infoBox}>
                <MaterialIcons name="calendar-today" size={16} color="#333" />
                <Text style={styles.infoValue}>{bestSeason}</Text>
                <Text style={styles.infoLabel}>Melhor Época</Text>
              </View>
            </View>
          </View>

          {/* PRINCIPAIS ATRAÇÕES */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Principais Atrações</Text>
            <Text style={styles.sectionSubtitle}>
              Locais mais bem avaliados por nossos usuários
            </Text>
          </View>

          <View style={[styles.card, { paddingBottom: 18 }]}>
            <View style={styles.attractionsRow}>
              {(attractions.length ? attractions : placeholderAttractions())
                .slice(0, 2)
                .map((item, i) => (
                  <View key={i} style={styles.attractionCard}>
                    <Image
                      source={getImageSource(item.image, item.image)}
                      style={styles.attractionImage}
                    />
                    <Text style={styles.attractionName} numberOfLines={2}>
                      {item.name}
                    </Text>
                  </View>
                ))}
            </View>

            <TouchableOpacity style={styles.centerButton}>
              <Text style={styles.centerButtonText}>Mais Atrações</Text>
            </TouchableOpacity>
          </View>

          {/* GASTRONOMIA */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Gastronomia</Text>
            <Text style={styles.sectionSubtitle}>Comidas típicas da região</Text>
          </View>

          <View style={[styles.card, { paddingBottom: 18 }]}>
            {(foods.length ? foods : placeholderFoods()).map((food, i) => (
              <View key={i} style={styles.foodRow}>
                <Image
                  source={getImageSource(food.image)}
                  style={styles.foodImage}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.foodTitle}>{food.name}</Text>
                  <Text style={styles.foodDesc} numberOfLines={2}>
                    {food.desc}
                  </Text>
                </View>
              </View>
            ))}

            <TouchableOpacity style={styles.centerButton}>
              <Text style={styles.centerButtonText}>Mais...</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* EVENTOS (fora do contentWrap, tela cheia) */}
        <View style={styles.eventsArea}>
          <Text style={styles.eventsTitle}>Eventos e Festivais</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.eventsScroll}
          >
            {(events.length ? events : placeholderEvents()).map((ev, i) => (
              <View key={i} style={styles.eventItem}>
                <View style={styles.eventIconCircle}>
                  {ev.icon ? (
                    <FontAwesome name={ev.icon} size={14} color="#000000" />
                  ) : (
                    <FontAwesome name="calendar" size={14} color="#000000" />
                  )}
                </View>
                <Text style={styles.eventDate}>{ev.date}</Text>
                <Text style={styles.eventText} numberOfLines={2}>
                  {ev.title}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---- styles ---- */
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#eef1f6" },
  scrollContent: { paddingBottom: 36 },

  /* HEADER */
  header: {
    width: "100%",
    height: 220,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerImageStyle: { resizeMode: "cover" },
  backButton: {
    position: "absolute",
    top: 16,
    left: 12,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 90,
    textAlign: "center",
    paddingHorizontal: 12,
  },

  /* CONTENT WRAP */
  contentWrap: {
    marginTop: -28,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: "#fff",
    paddingTop: 18,
    paddingBottom: 36,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 8,
    elevation: 2,
  },

  /* CARDS */
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 14,
    marginHorizontal: 8,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  cardTop: { marginTop: 6 },
  cardWithHandle: { paddingTop: 18 },
  rowTop: { flexDirection: "row", alignItems: "flex-start" },
  mapCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginRight: 12,
    backgroundColor: "#f2f2f4",
    overflow: "hidden",
  },
  cardHeading: { fontSize: 18, fontWeight: "800", marginBottom: 8, color: "#111" },
  paragraph: { fontSize: 14, color: "#444", lineHeight: 20, textAlign: "justify" },

  /* HANDLE */
  handleLeft: {
    position: "absolute",
    left: 10,
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dd1d1dff",
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },

  /* INFO BOXES */
  infoRow: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    marginTop: 12,
  },
  infoBox: {
    flex: 1,
    marginHorizontal: 6,
    alignItems: "center",
    backgroundColor: "#ba291cff",
    paddingVertical: 12,
    borderRadius: 12,
  },
  infoValue: { 
    fontSize: 13, 
    fontWeight: "700", 
    marginTop: 6, 
    color: "#111"
   },
  infoLabel: { 
    fontSize: 11, 
    color: "#666", 
    marginTop: 4 
  },

  /* SECTION TITLES */
  sectionHeader: { paddingHorizontal: 12, marginTop: 6, marginBottom: 6 },
  sectionTitle: { fontSize: 20, fontWeight: "800", color: "#111", textAlign: "center" },
  sectionSubtitle: { fontSize: 13, color: "#666", marginTop: 6, textAlign: "center" },

  /* ATRAÇÕES */
  attractionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  attractionCard: { 
    width: (width - 64) / 2, 
    marginRight: 6 
  },
  attractionImage: {
    width: 140,
    height: 110,
    borderRadius: 12,
    backgroundColor: "#e9eefb",
  },
  attractionName: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "700",
    color: "#111",
  },

  centerButton: {
    alignSelf: "center",
    marginTop: 12,
    backgroundColor: "#2A77A2",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 22,
  },
  centerButtonText: { 
    color: "#fff", 
    fontWeight: "700", 
    fontSize: 14 
  },

  /* GASTRONOMIA */
  foodRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  foodImage: {
    width: 82,
    height: 82,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: "#eee",
  },
  foodTitle: { 
    fontSize: 15, 
    fontWeight: "800", 
    color: "#111" 
  },
  foodDesc: { 
    fontSize: 13, 
    color: "#666", 
    marginTop: 4 
  },

  /* EVENTOS */
  eventsArea: {
    width: "100%",
    backgroundColor: "#306BC2",
    paddingVertical: 28,
    paddingHorizontal: 16,
    marginTop: 0,
  },
  eventsTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 18,
  },
  eventsScroll: { 
  },
  eventItem: {
    width: 120,
    marginRight: 2,
    alignItems: "center",
  },
  eventIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  eventDate: { color: "#fff", fontWeight: "700", fontSize: 13 },
  eventText: { color: "#fff", fontSize: 12, textAlign: "center", marginTop: 4 },
});
