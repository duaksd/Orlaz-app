import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../contexts/AuthContext";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    setLoading(true);
    try {
      console.log('[LoginScreen] handleLogin: trying login with', email);
      const res = await fetch("http://localhost:3000/profile");
      const data = await res.json();
      const users = data.profiles || [];
      // Procura usuário com email e senha
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        console.log('[LoginScreen] handleLogin: user found', user);
        // Salva apenas o id no contexto/auth
        const success = await signIn({ id: user.id });
        console.log('[LoginScreen] handleLogin: signIn returned', success);
        if (success) {
          navigation.replace("ProfileMain");
        } else {
          Alert.alert("Erro", "Não foi possível fazer login.");
        }
      } else {
        console.log('[LoginScreen] handleLogin: user not found');
        Alert.alert("Erro", "Email ou senha inválidos.");
      }
    } catch (error) {
      console.log('[LoginScreen] handleLogin: error', error);
      Alert.alert("Erro", "Ocorreu um erro ao fazer login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <FontAwesome
          name="envelope"
          size={18}
          color="#555"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Seu email"
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
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.registerText}>
          Não tem uma conta? <Text style={styles.linkText}>Crie uma</Text>
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerText: {
    marginTop: 20,
    color: "#333",
    fontSize: 15,
  },
  linkText: {
    color: "#1E77A5",
    fontWeight: "500",
  },
  forgotText: {
    alignSelf: "flex-end",
    marginTop: 15,
    marginBottom: 10,
    color: "#333",
    fontSize: 15,
    fontWeight: "400",
  },
});
