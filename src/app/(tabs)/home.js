import React, { useState, useRef, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Keyboard,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

import { useRouter } from "expo-router";

import Header from "../../components/Header";
import ExploreSection from "../../components/ExploreSection";
import AttractionsSection from "../../components/AttractionsSection";
import HowToGetSection from "../../components/HowToGetSection";

const suggestionsData = [
  { label: "Cidades", screen: "Cidades" },
  { label: "Atrações", screen: "Atracoes" },
  { label: "Contato e suporte", screen: "Contato" },
  { label: "Restaurantes parceiros", screen: "Restaurantes" },
  { label: "Caraguatatuba", screen: "Caraguatatuba" },
  { label: "Ilhabela", screen: "Ilhabela" },
  { label: "São Sebastião", screen: "SaoSebastiao" },
  { label: "Ubatuba", screen: "Ubatuba" },
  { label: "Trilhas", screen: "Trilhas" },
  { label: "Esportes aquáticos", screen: "Esportes" },
  { label: "Gastronomia Local", screen: "Gastronomia" },
  { label: "Festivais e Eventos", screen: "Festivais" },
  { label: "Trilha das Sete Praias", screen: "TrilhaSetePraias" },
  { label: "Praia do Julião", screen: "PraiaJuliao" },
  { label: "Parque Estadual da Serra do Mar", screen: "ParqueEstadual" },
  { label: "Praia Martim de Sá", screen: "Martim" },
  { label: "Praia da Cocanha", screen: "PraiaCocanha" },
  { label: "Morro Santo Antônio", screen: "SantoAntonio" },
  { label: "Bolinho de Taioba", screen: "Taioba" },
  { label: "Mexilhões", screen: "Mexilhoes" },
  { label: "Frutos do mar em geral", screen: "Frutos" },
  { label: "Praia do Bonete", screen: "PraiaBonete" },
  { label: "Praia de Jabaquara", screen: "PraiaJabaquara" },
  { label: "Baía de Castelhanos", screen: "Castelhanos" },
  { label: "Peixe assado na Folha de Bananeira", screen: "PeixeAssado" },
  { label: "Caldeirada", screen: "Caldeirada" },
  { label: "Ruínas da Lagoinha", screen: "RuinasLagoinha" },
  { label: "Praia do Português", screen: "PraiaPortugues" },
  { label: "Ilha das Couves", screen: "IlhaDasCouves" },
  { label: "Cachoeira do Prumirim", screen: "CachoeiraPrumirim" },
  { label: "Moqueca Caiçara", screen: "Moqueca" },
  { label: "Lambe-Lambe", screen: "LambeLambe" },
  { label: "Centro Histórico", screen: "CentroHistorico" },
  { label: "Praia de Juquehy", screen: "Juquehy" },
  { label: "Praia de Maresias", screen: "Maresias" },
  { label: "Praia de Toque-Toque Grande", screen: "ToqueToque" },
  { label: "Peixe Salgado e Seco no Varal", screen: "PeixeSalgado" },
  { label: "Camarão na Moranga", screen: "CamaraoMoranga" },
  { label: "Trilha da Água Branca", screen: "TrilhaAguaBranca" },
  { label: "Surf", screen: "Surf" },
  { label: "Stand-up Paddle", screen: "Standup" },
  { label: "Festival de Verão", screen: "FestivalDeVerao" },
  { label: "Festa de São Sebastião", screen: "FestaSaoSeba" },
  { label: "Restaurante Caiçara's", screen: "RestauranteCaicara" },
  { label: "Sabores do Mar", screen: "SaboresDoMar" },
  { label: "Ben's Bar & Comidaria", screen: "BensBarComidariaScreen" },
  { label: "Restaurante Ravenala", screen: "RestauranteRavenala" },
  { label: "Garage Bar Steakhouse", screen: "GarageBarSteakhouse" },
  { label: "Raízes Restaurante Pizzaria", screen: "RaizesRestaurantePizzaria" },
];

const ITEM_HEIGHT = 48; // altura de cada sugestão
const MAX_HEIGHT = 260;  // altura máxima do dropdown

export default function HomeScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [searchBoxY, setSearchBoxY] = useState(0);
  const [searchBoxHeight, setSearchBoxHeight] = useState(0);

  const router = useRouter();

  const animation = useRef(new Animated.Value(0)).current;

  // Filtra sugestões conforme texto digitado
  const handleSearch = (text) => {
    setSearchText(text);
    if (!text.trim()) {
      setFilteredSuggestions([]);
      return;
    }

    const filtered = suggestionsData.filter((item) =>
      item.label.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  // Seleção de sugestão
  const handleSelectSuggestion = (item) => {
    setSearchText("");
    setFilteredSuggestions([]);
    Keyboard.dismiss();
    // Prefer expo-router navigation, fallback to React Navigation
    try {
      router.push(`/${item.screen}`);
    } catch (e) {
      navigation && navigation.navigate && navigation.navigate(item.screen);
    }
  };

  const handleMenuPress = (menu) => {
    setSearchText("");
    setFilteredSuggestions([]);
    Keyboard.dismiss();
    try {
      // If user asked specifically for the Cidades screen under (page), push that file-based route
      if (menu === "Cidades") {
        router.push(`/Cidades`);
      } else {
        router.push(`/${menu}`);
      }
    } catch (e) {
      navigation && navigation.navigate && navigation.navigate(menu);
    }
  };

  // Animação: fade + slide
  useEffect(() => {
    Animated.timing(animation, {
      toValue: filteredSuggestions.length > 0 ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [filteredSuggestions]);

  const dropdownHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [
      0,
      Math.min(filteredSuggestions.length * ITEM_HEIGHT, MAX_HEIGHT),
    ],
  });

  const dropdownOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const dropdownTranslate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 0],
  });

  // Fecha dropdown ao tocar fora
  const handleOutsidePress = () => {
    if (filteredSuggestions.length > 0) {
      setFilteredSuggestions([]);
      Keyboard.dismiss();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View
            onLayout={(event) => {
              const { y, height } = event.nativeEvent.layout;
              setSearchBoxY(y);
              setSearchBoxHeight(height);
            }}
          >
            <Header
              searchText={searchText}
              setSearchText={setSearchText}
              handleSearch={handleSearch}
              handleMenuPress={handleMenuPress}
            />
          </View>

          <ExploreSection />
          <AttractionsSection />
          <HowToGetSection />
        </ScrollView>

        {/* Dropdown fixo e animado */}
        <Animated.View
          style={[
            styles.dropdown,
            {
              top: searchBoxY + searchBoxHeight, // logo abaixo da barra
              height: dropdownHeight,
              opacity: dropdownOpacity,
              transform: [{ translateY: dropdownTranslate }],
            },
          ]}
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1 }}
          >
            {filteredSuggestions.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelectSuggestion(item)}
                style={styles.dropdownItem}
              >
                <Text style={styles.dropdownText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EFEFEF" },
  scrollContent: { paddingBottom: 90 },

  dropdown: {
    position: "absolute",
    left: 0,
    right: 0,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 8,
    overflow: "hidden",
    zIndex: 999,
  },
  dropdownItem: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
});
