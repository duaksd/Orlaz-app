import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BottomNav({ state, navigation }) {
  // Lista de telas onde o ícone Home deve ficar sempre preto
  const blackHomeScreens = ["ParqueEstadual", "Contato", "Atracoes", "Cidades", "Caraguatatuba", "Trilhas", "Esportes", "Gastronomia", "Festivais", "Ubatuba", "SaoSebastiao", "Ilhabela"];

  // Tela atual
  const currentRoute = state.routes[state.index];
  const activeRouteName =
    currentRoute.state?.routes?.[currentRoute.state?.index]?.name || currentRoute.name;

  return (
    <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
      <View style={styles.navContainer}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          let icon;

          if (route.name === "Home") {
            // Verifica se a tela atual está na lista de telas que devem ter Home preto
            const isBlackHome = blackHomeScreens.includes(activeRouteName);

            icon = (
              <View style={styles.iconContainer}>
                <Ionicons
                  name="home-sharp"
                  size={26}
                  color={isBlackHome ? "#000000" : isFocused ? "#2A77A2" : "#000000"}
                />
              </View>
            );
          } else if (route.name === "Favoritos") {
            icon = (
              <View style={styles.iconContainer}>
                <FontAwesome
                  name="heart"
                  size={26}
                  color={isFocused ? "#2A77A2" : "#000000"}
                />
              </View>
            );
          } else if (route.name === "Perfil") {
            icon = (
              <View style={styles.iconContainer}>
                <FontAwesome
                  name="user-circle"
                  size={26}
                  color={isFocused ? "#2A77A2" : "#000000"}
                />
              </View>
            );
          }

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => {
                if (route.name === "Home") {
                  navigation.navigate("Home", { screen: "HomeMain" });
                } else if (route.name === "Perfil") {
                  navigation.navigate("Perfil", { screen: "ProfileMain" });
                } else {
                  navigation.navigate(route.name);
                }
              }}
              style={styles.tabButton}
              activeOpacity={0.7}
            >
              {icon}
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
    width: "33.33%",     // cada botão ocupa 1/3 da tela
    alignItems: "center",
    justifyContent: "center",
  },
});



