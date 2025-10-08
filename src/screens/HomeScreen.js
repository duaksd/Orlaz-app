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

import Header from "../components/Header";
import ExploreSection from "../components/ExploreSection";
import AttractionsSection from "../components/AttractionsSection";
import HowToGetSection from "../components/HowToGetSection";

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
];

const ITEM_HEIGHT = 48; // altura de cada sugestão
const MAX_HEIGHT = 260;  // altura máxima do dropdown

export default function HomeScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [searchBoxY, setSearchBoxY] = useState(0);
  const [searchBoxHeight, setSearchBoxHeight] = useState(0);

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
    navigation.navigate(item.screen);
  };

  const handleMenuPress = (menu) => {
    setSearchText("");
    setFilteredSuggestions([]);
    Keyboard.dismiss();
    navigation.navigate(menu);
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
