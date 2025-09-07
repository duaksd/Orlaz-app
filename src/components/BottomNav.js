import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BottomNav({ state, navigation }) {
  return (
    <SafeAreaView edges={["bottom"]} style={styles.safeArea}>

      <View style={styles.navContainer}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          let icon;
          if (route.name === "Home") {
            icon = (
              <Ionicons
                name="home-sharp"
                size={26}
                color={isFocused ? "#2A77A2" : "#000000"}
              />
            );
          } else if (route.name === "Favoritos") {
            icon = (
              <FontAwesome
                name="star"
                size={26}
                color={isFocused ? "#2A77A2" : "#000000"}
              />
            );
          } else if (route.name === "Perfil") {
            icon = (
              <FontAwesome
                name="user-circle"
                size={26}
                color={isFocused ? "#2A77A2" : "#000000"}
              />
            );
          }

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
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
});
