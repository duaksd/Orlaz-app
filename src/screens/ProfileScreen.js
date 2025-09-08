import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from '../contexts/AuthContext';

export default function Profile({ navigation }) {
  const { user, signOut, loading } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: async () => {
            await signOut();
            navigation.replace('Login');
          },
        },
      ],
    );
  };

  React.useEffect(() => {
    if (!loading && !user) {
      navigation.replace('Login');
    }
  }, [loading, user, navigation]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1E4F6E" />
      </View>
    );
  }

  if (!user) {
    return null;
  }

  // Se chegou aqui, o usuário está autenticado
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu Perfil</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.avatarContainer}>
          <FontAwesome name="user-circle" size={80} color="#1E4F6E" />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.historyContainer}>
            <TouchableOpacity style={styles.infoItem}>
              <FontAwesome name="history" size={24} color="#1E4F6E" />
              <Text style={styles.infoText}>Histórico de Visitas</Text>
            </TouchableOpacity>
            {user.visitHistory.map((visit, index) => (
              <View key={index} style={styles.historyItem}>
                <Text style={styles.historyPlace}>{visit.place}</Text>
                <Text style={styles.historyDate}>{visit.date}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.infoItem}>
            <FontAwesome name="cog" size={24} color="#1E4F6E" />
            <Text style={styles.infoText}>Configurações</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.infoItem, styles.logoutButton]} 
            onPress={handleLogout}
          >
            <FontAwesome name="sign-out" size={24} color="#D32F2F" />
            <Text style={[styles.infoText, styles.logoutText]}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  header: {
    backgroundColor: "#1E4F6E",
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  historyContainer: {
    width: '100%',
    marginBottom: 20,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  historyPlace: {
    fontSize: 14,
    color: '#333',
  },
  historyDate: {
    fontSize: 14,
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E4F6E",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  infoContainer: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  infoText: {
    fontSize: 16,
    marginLeft: 15,
    color: "#333",
  },
  logoutButton: {
    borderBottomWidth: 0,
    marginTop: 10,
  },
  logoutText: {
    color: "#D32F2F",
  },
});
