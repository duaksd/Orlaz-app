import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BottomNav({ state, navigation }) {
  // Verifica se estamos na tela de contato usando o state atual da navegação
  const currentRoute = state.routes[state.index];
  const isContactScreen = currentRoute.state?.routes?.[currentRoute.state?.index]?.name === "Contato";

  return (
    <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
      <View style={styles.navContainer}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          let icon;
          if (route.name === "Home") {
            // Se estiver na tela de contato, força a cor preta
            const isActive = isFocused && !isContactScreen;
            icon = (
              <View style={styles.iconContainer}>
                <Ionicons
                  name="home-sharp"
                  size={26}
                  color={isActive ? "#2A77A2" : "#000000"}
                />
              </View>
            );
          } else if (route.name === "Favoritos") {
            icon = (
              <View style={styles.iconContainer}>
                <FontAwesome
                  name="star"
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
                  // Volta sempre para a tela principal do Stack
                  navigation.navigate("Home", { screen: "HomeMain" });
                } else if (route.name === "Perfil") {
                  // Quando clicar no Perfil, navega para o ProfileStack
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
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#EFEFEF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
