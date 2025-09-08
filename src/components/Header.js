import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

export default function Header({ navigation }) {
  const [searchText, setSearchText] = useState("");

  const getMenuTitle = (menu) => {
    switch (menu) {
      case "Cidades":
        return "Você clicou em Cidades";
      case "Atrações":
        return "Você clicou em Atrações";
      case "Contato":
        return "Você clicou em Contato";
      default:
        return "Você clicou em um menu";
    }
  };

  const handleMenuPress = (menu) => {
    if (menu === "Contato") {
      navigation.navigate("Contato");
    } else {
      Alert.alert("Menu clicado", getMenuTitle(menu));
    }
  };

  return (
    <LinearGradient
      colors={["#1E4F6E", "#2A77A2"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.header}
    >
      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        {searchText === "" && (
          <View>
            <FontAwesome
              name="search"
              size={20}
              color="#666"
              style={styles.searchIcon}
            />
          </View>
        )}
        <TextInput
          placeholder="Inicie sua busca"
          placeholderTextColor="#666"
          style={styles.searchInput}
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>

      {/* Linha de ícones */}
      <View style={styles.iconRow}>
        <TouchableOpacity 
          style={styles.iconBox} 
          onPress={() => handleMenuPress("Cidades")}
          accessible={true}
          accessibilityLabel="Menu Cidades"
        >
          <View style={styles.iconContent}>
            <Image
              source={require("../../assets/icons/cidades.png")}
              style={styles.iconImage}
              resizeMode="contain"
            />
            <Text style={styles.iconLabel}>Cidades</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.iconBox} 
          onPress={() => handleMenuPress("Atrações")}
          accessible={true}
          accessibilityLabel="Menu Atrações"
        >
          <View style={styles.iconContent}>
            <Image
              source={require("../../assets/icons/atracoes.png")}
              style={styles.iconImage}
              resizeMode="contain"
            />
            <Text style={styles.iconLabel}>Atrações</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.iconBox} 
          onPress={() => handleMenuPress("Contato")}
          accessible={true}
          accessibilityLabel="Menu Contato"
        >
          <View style={styles.iconContent}>
            <Image
              source={require("../../assets/icons/contato.png")}
              style={styles.iconImage}
              resizeMode="contain"
            />
            <Text style={styles.iconLabel}>Contato</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 49,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    height: 50,
    marginBottom: 25,
    alignSelf: "center",
    width: "90%",
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 0,
    fontSize: 16,
    color: "#24282D",
    textAlign: "center",
    textAlignVertical: "center",
    padding: 0,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconLabel: {
    color: "#fff",
    marginTop: 6,
    fontSize: 14,
    fontWeight: "500",
  },
  iconImage: {
    width: 56,
    height: 40,
  },
});
