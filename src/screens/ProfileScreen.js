import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from '../contexts/AuthContext';

export default function Profile({ navigation }) {
  const { user, signOut, loading } = useAuth();
  const [displayName, setDisplayName] = useState(''); // state local para o nome

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Deseja realmente sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sim',
          onPress: async () => {
            await signOut();
            navigation.replace('Login'); // stack correto
          },
        },
      ],
    );
  };

  // Atualiza displayName assim que user mudar
  useEffect(() => {
    if (!loading && !user) {
      navigation.replace('Login'); 
    } else if (user) {
      setDisplayName(user.name || 'usuário');
    }
  }, [loading, user, navigation]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1E4F6E" />
      </View>
    );
  }

  if (!user) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Minha Conta</Text>

      <View style={styles.profileContainer}>
        <View style={styles.userInfoContainer}>
          <FontAwesome name="user-circle" size={70} color="#2A77A2" />
          <View style={{ marginLeft: 15, flexShrink: 1 }}>
            <Text style={styles.greeting}>Olá, {displayName}! ☀️🏖️</Text>
            <View style={styles.emailContainer}>
              <FontAwesome name="envelope" size={14} color="#000" />
              <Text style={styles.email}>{user.email}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.blueButton]}>
          <FontAwesome name="check-square" size={16} color="#1E77A5" />
          <Text style={styles.blueText}>Atualizar Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.blueButton]}>
          <FontAwesome name="lock" size={16} color="#1E77A5" />
          <Text style={styles.blueText}>Mudar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.redButton]}>
          <FontAwesome name="exclamation-circle" size={16} color="#D32F2F" />
          <Text style={styles.redText}>Deletar Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={handleLogout}>
          <FontAwesome name="sign-out" size={16} color="#000" />
          <Text style={[styles.blackText, { marginLeft: 8 }]}>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// styles iguais aos seus originais
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", alignItems: "center", paddingTop: 80 },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 10 },
  profileContainer: { alignItems: "center", marginBottom: 30, padding: 15 },
  userInfoContainer: { flexDirection: 'row', alignItems: 'center' },
  greeting: { fontSize: 24, fontWeight: "400", marginBottom: 4 },
  emailContainer: { flexDirection: 'row', alignItems: 'center' },
  email: { marginLeft: 4, fontSize: 14, color: "#444" },
  buttonsContainer: { width: "80%", alignItems: "center", gap: 12 },
  button: { flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", paddingVertical: 12, borderRadius: 6, borderWidth: 1.5 },
  blueButton: { borderColor: "#1E77A5" },
  blueText: { color: "#1E77A5", fontWeight: "bold", marginLeft: 8 },
  redButton: { borderColor: "#D32F2F" },
  redText: { color: "#D32F2F", fontWeight: "bold", marginLeft: 8 },
  blackButton: { borderColor: "#000", marginTop: 3 },
  blackText: { color: "#000", fontWeight: "bold" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F5F5F5" },
});
