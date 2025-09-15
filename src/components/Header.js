import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

export default function Header({ navigation }) {
  const [searchText, setSearchText] = useState("");

  const handleMenuPress = (menu) => {
    switch (menu) {
      case "Cidades":
        navigation.navigate("Cidades");       // Stack name correto
        break;
      case "Atracoes":
        navigation.navigate("Atracoes");      // Stack name correto (sem ç)
        break;
      case "Contato":
        navigation.navigate("Contato");
        break;
      default:
        break;
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
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <FontAwesome
            name="search"
            size={20}
            color="#666"
            style={{ marginRight: 2 }} // quase colada
          />
          <TextInput
            placeholder="Inicie sua busca"
            placeholderTextColor="#666"
            style={[styles.searchInput, { textAlign: "center" }]} // centraliza o texto e placeholder
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
      </View>


      {/* Linha de ícones */}
      <View style={styles.iconRow}>
        <TouchableOpacity
          style={styles.iconBox}
          onPress={() => handleMenuPress("Cidades")}
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
          onPress={() => handleMenuPress("Atracoes")}
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
  searchInput: {
    flex: 1,
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
