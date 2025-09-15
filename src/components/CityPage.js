import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function CityPage({
  name,
  headerImage,
  description,
  curiosities,
  population,
  area,
  bestSeason,
  attractions = [],
  foods = [],
  events = [],
  mapImage
}) {
  const [curiosityOpen, setCuriosityOpen] = useState(false);

  const navigation = useNavigation();

  const getImageSource = (img) => {
    if (!img) return null;
    return img;
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}
        <View style={{ position: "relative" }}>
          <ImageBackground
            source={getImageSource(headerImage)}
            style={styles.header}
            imageStyle={styles.headerImageStyle}
            pointerEvents="box-none"
          >
            {name && (
              <Text numberOfLines={1} style={styles.headerTitle}>
                {name}
              </Text>
            )}
          </ImageBackground>

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("HomeMain")}>
          <View>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </View>
        </TouchableOpacity>
        </View>

        {/* CONTEÚDO */}
        <View style={styles.contentWrap}>
          {/* SOBRE */}
          {description && mapImage && (
            <View style={styles.rowTop}>
              <Image source={getImageSource(mapImage)} style={styles.mapCircle} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cardHeading}>Sobre a Cidade</Text>
                <Text style={styles.paragraph}>{description}</Text>
              </View>
            </View>
          )}

          {/* CURIOSIDADES */}
          {curiosities && (
            <View style={[styles.card, styles.cardWithHandle]}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.handleLeft}
                  onPress={() => setCuriosityOpen(!curiosityOpen)}
                >
                  <MaterialIcons name="drag-indicator" size={18} color="#000000" />
                </TouchableOpacity>
                <Text style={[styles.cardHeading, { marginLeft: 8 }]}>
                  Curiosidades
                </Text>
              </View>

              {curiosityOpen && (
                <Text style={[styles.paragraph, { marginTop: 8 }]}>
                  {curiosities}
                </Text>
              )}

              <View style={styles.infoRow}>
                {population && (
                  <View style={styles.infoBox}>
                    <FontAwesome name="users" size={16} color="#000000" />
                    <Text style={styles.infoValue}>{population}</Text>
                    <Text style={styles.infoLabel}>População</Text>
                  </View>
                )}
                {area && (
                  <View style={styles.infoBox}>
                    <Ionicons name="map" size={16} color="#000000" />
                    <Text style={styles.infoValue}>{area}</Text>
                    <Text style={styles.infoLabel}>Área</Text>
                  </View>
                )}
                {bestSeason && (
                  <View style={styles.infoBox}>
                    <MaterialIcons name="calendar-today" size={16} color="#000000" />
                    <Text style={styles.infoValue}>{bestSeason}</Text>
                    <Text style={styles.infoLabel}>Melhor Época</Text>
                  </View>
                )}
              </View>
            </View>
          )}

          {/* ATRAÇÕES */}
          {attractions.length > 0 && (
            <>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Principais Atrações</Text>
                <Text style={styles.sectionSubtitle}>
                  Locais mais bem avaliados por nossos usuários
                </Text>
              </View>

              <View style={[styles.card, { paddingBottom: 18 }]}>
                <View style={styles.attractionsRow}>
                  {attractions.slice(0, 2).map((item, i) => (
                    <View key={i} style={styles.attractionCard}>
                      <Image
                        source={getImageSource(item.image)}
                        style={styles.attractionImage}
                      />
                      <Text style={styles.attractionName} numberOfLines={2}>
                        {item.name}
                      </Text>
                    </View>
                  ))}
                </View>
                {attractions.length > 2 && (
                  <TouchableOpacity style={styles.centerButton}>
                    <Text style={styles.centerButtonText}>Mais Atrações</Text>
                  </TouchableOpacity>
                )}
              </View>
            </>
          )}

          {/* GASTRONOMIA */}
          {foods.length > 0 && (
            <>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Gastronomia</Text>
                <Text style={styles.sectionSubtitle}>Comidas típicas da região</Text>
              </View>

              <View style={[styles.card, { paddingBottom: 18 }]}>
                {foods.map((food, i) => (
                  <View key={i} style={styles.foodRow}>
                    <Image source={getImageSource(food.image)} style={styles.foodImage} />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.foodTitle}>{food.name}</Text>
                      <Text style={styles.foodDesc} numberOfLines={2}>
                        {food.desc}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </>
          )}

          {/* EVENTOS */}
          {events.length > 0 && (
            <View style={styles.eventsArea}>
              <Text style={styles.eventsTitle}>Eventos e Festivais</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.eventsScroll}
              >
                {events.map((ev, i) => (
                  <View key={i} style={styles.eventItem}>
                    <View style={styles.eventIconCircle}>
                      {ev.icon ? (
                        <FontAwesome name={ev.icon} size={14} color="#000" />
                      ) : (
                        <FontAwesome name="calendar" size={14} color="#000" />
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
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { 
    flex: 1, 
    backgroundColor: "#eef1f6" 
  },
  scrollContent: { 
    paddingBottom: 0 
  },
  header: { 
    width: "100%", 
    height: 220, 
    justifyContent: "flex-end", 
    alignItems: "center" 
  },
  headerImageStyle: { 
    resizeMode: "cover" 
  },
  backButton: { 
    position: "absolute", 
    top: 16, 
    left: 12, 
    width: 50, 
    height: 50, 
    justifyContent: "center", 
    alignItems: "center", 
    zIndex: 10 
  },
  headerTitle: { 
    color: "#fff", 
    fontSize: 24, 
    fontWeight: "800", 
    marginBottom: 90, 
    textAlign: "center", 
    paddingHorizontal: 12 
  },
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
    elevation: 2 
  },
  card: { 
    backgroundColor: "#fff", 
    borderRadius: 18, 
    padding: 14, 
    marginHorizontal: 8, 
    marginBottom: 14, 
    shadowColor: "#000", 
    shadowOpacity: 0.06, 
    shadowOffset: { width: 0, height: 2 }, 
    shadowRadius: 6, elevation: 2 
  },
  cardWithHandle: { 
    paddingTop: 14 
  },
  rowTop: { 
    flexDirection: "row", 
    alignItems: "flex-start" 
  },
  mapCircle: { 
    width: 140, 
    height: 140, 
    borderRadius: 70, 
    marginRight: 12, 
    backgroundColor: "#f2f2f4", 
    overflow: "hidden" 
  },
  cardHeading: { 
    fontSize: 19, 
    fontWeight: "800", 
    textAlign: "center", 
    color: "#111" 
  },
  paragraph: { 
    fontSize: 14, 
    color: "#000000", 
    lineHeight: 20, 
    textAlign: "justify" 
  },
  handleLeft: { 
    width: 36, 
    height: 36, 
    borderRadius: 10, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#C8C8C8", 
    elevation: 1, 
    shadowColor: "#000", 
    shadowOpacity: 0.03, 
    shadowOffset: { width: 0, height: 1 }, 
    shadowRadius: 2 
  },
  infoRow: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    marginTop: 12 
  },
  infoBox: { 
    flex: 1, 
    marginHorizontal: 6, 
    alignItems: "center", 
    backgroundColor: "#C8C8C8", 
    paddingVertical: 12, 
    borderRadius: 12 
  },
  infoValue: { 
    fontSize: 13, 
    fontWeight: "700", 
    marginTop: 6, 
    color: "#111", 
    textAlign: "center" 
  },
  infoLabel: { 
    fontSize: 11, 
    color: "#000000", 
    marginTop: 4 
  },
  sectionHeader: { 
    paddingHorizontal: 12, 
    marginTop: 6, 
    marginBottom: 6 
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: "800", 
    color: "#111", 
    textAlign: "center" 
  },
  sectionSubtitle: { 
    fontSize: 13, 
    color: "#666", 
    marginTop: 6, 
    textAlign: "center"
   },
  attractionsRow: {
  flexDirection: "row",      // deixa os cards lado a lado
  justifyContent: "space-between", // espaço igual entre eles
  alignItems: "center",      // centraliza verticalmente
  marginTop: 10,
},
attractionCard: {
  flex: 1,
  marginHorizontal: 5,
  backgroundColor: "#fff",
  borderRadius: 10,
  overflow: "hidden",
  alignItems: "center",
  padding: 10,
  height: 180, // altura fixa para todos os cards
},
  attractionImage: { 
    width: 140, 
    height: 110, 
    borderRadius: 12, 
    backgroundColor: "#e9eefb" 
  },
  attractionName: { 
    marginTop: 8, 
    fontSize: 13, 
    fontWeight: "700", 
    color: "#111" 
  },
  centerButton: { 
    alignSelf: "center", 
    marginTop: 12, 
    backgroundColor: "#2A77A2", 
    paddingVertical: 10, 
    paddingHorizontal: 22, 
    borderRadius: 22 
  },
  centerButtonText: { 
    color: "#fff", 
    fontWeight: "700",
    fontSize: 14 
  },
  foodRow: { 
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12 
  },
  foodImage: { 
    width: 82, 
    height: 82, 
    borderRadius: 12, 
    marginRight: 12, 
    backgroundColor: "#eee" },
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
  eventsArea: { 
    width: "100%", 
    backgroundColor: "#306BC2", 
    paddingVertical: 28, 
    paddingHorizontal: 16, 
    marginTop: 0 
  },
  eventsTitle: { 
    color: "#fff", 
    textAlign: "center", 
    fontSize: 20, 
    fontWeight: "800", 
    marginBottom: 18 
  },
  eventItem: { 
    width: 120, 
    marginRight: 2, 
    alignItems: "center" 
  },
  eventIconCircle: { 
    width: 44, 
    height: 44, 
    borderRadius: 22, 
    backgroundColor: "#fff", 
    justifyContent: "center", 
    alignItems: "center", 
    marginBottom: 8 
  },
  eventDate: { 
    color: "#fff", 
    fontWeight: "700", 
    fontSize: 13 
  },
  eventText: { 
    color: "#fff", 
    fontSize: 12, 
    textAlign: "center", marginTop: 4 },
});
