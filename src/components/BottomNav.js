import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BottomNav({ state, navigation }) {
  // Apenas as abas permitidas (ordem desejada) — usar nomes de rota em minúsculas (conforme _layout.js)
  const allowed = ["home", "pontos", "favoritos", "restaurantes", "profile"];

  // Tela atual (nome efetivo da rota exibida)
  const currentRoute = state.routes[state.index];
  const activeRouteName =
    currentRoute.state?.routes?.[currentRoute.state?.index]?.name || currentRoute.name;

  // Constrói a lista de rotas que realmente serão exibidas, na ordem `allowed`.
  const routesToShow = allowed
    .map((name) => state.routes.find((r) => r.name === name))
    .filter(Boolean);

  return (
    <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
      <View style={styles.navContainer}>
        {routesToShow.map((route) => {
          const isFocused = activeRouteName === route.name;

          // Escolhe ícone por nome da rota (rotas em minúsculas)
          let icon = null;
          if (route.name === "home") {
            // Home fica preto em algumas telas específicas (lista reduzida)
            const blackHomeScreens = [
              "parqueestadual",
              "contato",
              "martim",
              "taioba",
              "mexilhoes",
              "frutos",
              "santoantonio",
              "praiacocanha",
              "atracoes",
              "cidades",
              "prajulia0",
              "castelhanos",
              "caraguatatuba",
            ];
            const isBlackHome = blackHomeScreens.includes((activeRouteName || "").toLowerCase());
            icon = (
              <Ionicons
                name="home-sharp"
                size={26}
                color={isBlackHome ? "#000000" : isFocused ? "#2A77A2" : "#000000"}
              />
            );
          } else if (route.name === "pontos") {
            icon = <FontAwesome name="map" size={26} color={isFocused ? "#2A77A2" : "#000000"} />;
          } else if (route.name === "favoritos") {
            icon = <FontAwesome name="heart" size={26} color={isFocused ? "#2A77A2" : "#000000"} />;
          } else if (route.name === "profile") {
            icon = <FontAwesome name="user-circle" size={26} color={isFocused ? "#2A77A2" : "#000000"} />;
          } else if (route.name === "restaurantes") {
            icon = <FontAwesome name="cutlery" size={26} color={isFocused ? "#2A77A2" : "#000000"} />;
          }

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => {
                // Navega diretamente pelo nome da rota (em minúsculas)
                navigation.navigate(route.name);
              }}
              style={styles.tabButton}
              activeOpacity={0.7}
            >
              <View style={[styles.iconWrapper, isFocused && styles.activeIconWrapper]}>
                {icon}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#EFEFEF",
  },
  navContainer: {
    flexDirection: "row",
    width: "100%",       // garante ocupar toda a tela
    height: 70,
    backgroundColor: "#EFEFEF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  tabButton: {
    flex: 1,               // cada botão ocupa igualmente a largura disponível
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 10,
  },
  activeIconWrapper: {
    borderWidth: 2,
    borderColor: '#F4B400',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
    transform: [{ translateY: -6 }],
  },
});



