import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { API_BASE } from '../config';

export default function RegisterScreen({ navigation }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    setLoading(true);
    try {
      // Envia o cadastro para o backend
      const response = await fetch(`${API_BASE}/profile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      // O backend retorna { profile: { ...dadosDoUsuario... } }
      if (response.ok && data && data.profile && data.profile.id) {
        // Conta criada com sucesso — redireciona para a tela de login
        Alert.alert(
          "Sucesso",
          "Conta criada com sucesso. Faça login para continuar.",
          [
            {
              text: "OK",
              onPress: () => {
                try {
                  router.replace("/Login");
                } catch (e) {
                  navigation && navigation.replace && navigation.replace("Login");
                }
              },
            },
          ]
        );
      } else {
        Alert.alert("Erro", data?.message || "Não foi possível criar a conta.");
      }
    } catch {
      Alert.alert("Erro", "Erro ao criar a conta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={18} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome
          name="envelope"
          size={18}
          color="#555"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Cadastrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          // usar router.push('/login') com fallback
          try {
            router.push("/login");
          } catch (e) {
            navigation && navigation.navigate && navigation.navigate("Login");
          }
        }}
      >
        <Text style={styles.loginText}>
          Já tem uma conta? <Text style={styles.linkText}>Entre</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    backgroundColor: "#F5F5F5",
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 25 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    elevation: 2,
  },
  icon: { marginRight: 8 },
  input: { flex: 1, height: 45, fontSize: 15 },
  button: {
    backgroundColor: "#1E77A5",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
    elevation: 2,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  loginText: { marginTop: 20, color: "#333", fontSize: 15 },
  linkText: { color: "#1E77A5", fontWeight: "500" },
});
