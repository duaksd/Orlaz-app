import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Modal,
  TextInput,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useAuth } from "../contexts/AuthContext";
import { clearStorage } from "../services/auth";

export default function ProfileScreen({ navigation }) {
  const { user, signOut, loading } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(null); // "email" | "senha" | "deletar" | null
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      navigation.replace("Login");
    } else if (user) {
      setDisplayName(user.name || "usuário");
    }
  }, [loading, user, navigation]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão necessária", "Precisamos de acesso à galeria para alterar a foto.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigation.replace("Login");
  };

  const handleDeleteAccount = async () => {
    // Aqui você pode chamar uma API para deletar o usuário do backend, se necessário
    await clearStorage();
    navigation.replace("Login");
  };

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

      {/* Bloco de usuário: foto + informações */}
      <View style={styles.userBlock}>
        <TouchableOpacity onPress={pickImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <FontAwesome name="user-circle" size={70} color="#2A77A2" />
          )}
        </TouchableOpacity>

        <View style={styles.userInfoContainer}>
          <Text style={styles.greeting}>Olá, {displayName}! ☀️🏖️</Text>
          <View style={styles.emailContainer}>
            <FontAwesome name="envelope" size={14} color="#000" />
            <Text style={styles.email}>{user.email}</Text>
          </View>
          <TouchableOpacity onPress={pickImage}>
            <Text style={{ color: "#1E77A5", fontWeight: "bold", marginTop: 6 }}>
              Alterar foto
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Botões do perfil */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.blueButton]}
          onPress={() => setModalVisible("email")}
        >
          <FontAwesome name="check-square" size={16} color="#1E77A5" />
          <Text style={styles.blueText}>Atualizar Email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.blueButton]}
          onPress={() => setModalVisible("senha")}
        >
          <FontAwesome name="lock" size={16} color="#1E77A5" />
          <Text style={styles.blueText}>Mudar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Restaurantes")}
        >
          <Text style={styles.buttonText}>🍽️ Restaurantes Parceiros</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.redButton]}
          onPress={() => setModalVisible("deletar")}
        >
          <FontAwesome name="exclamation-circle" size={16} color="#D32F2F" />
          <Text style={styles.redText}>Deletar Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={handleLogout}>
          <FontAwesome name="sign-out" size={16} color="#000" />
          <Text style={[styles.blackText, { marginLeft: 8 }]}>Sair</Text>
        </TouchableOpacity>
      </View>

      {/* Modais */}
      <Modal visible={modalVisible === "email"} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Atualizar Email</Text>
            <TextInput
              placeholder="Novo email"
              style={styles.modalInput}
              value={newEmail}
              onChangeText={setNewEmail}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setModalVisible(null)} style={styles.modalCancel}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert("Email atualizado!", `Novo email: ${newEmail}`);
                  setModalVisible(null);
                  setNewEmail("");
                }}
                style={styles.modalConfirm}
              >
                <Text style={{ color: "#fff" }}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={modalVisible === "senha"} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Mudar Senha</Text>
            <TextInput
              placeholder="Nova senha"
              secureTextEntry
              style={styles.modalInput}
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setModalVisible(null)} style={styles.modalCancel}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert("Senha alterada!");
                  setModalVisible(null);
                  setNewPassword("");
                }}
                style={styles.modalConfirm}
              >
                <Text style={{ color: "#fff" }}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      

      <Modal visible={modalVisible === "deletar"} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Deletar Conta</Text>
            <Text>Tem certeza que deseja deletar sua conta? Esta ação não pode ser desfeita.</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setModalVisible(null)} style={styles.modalCancel}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDeleteAccount}
                style={styles.modalConfirm}
              >
                <Text style={{ color: "#fff" }}>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", alignItems: "center", paddingTop: 80 },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 10 },
  userBlock: { flexDirection: "row", alignItems: "center", marginBottom: 30 },
  profileImage: { width: 70, height: 70, borderRadius: 35 },
  userInfoContainer: { marginLeft: 15, flexShrink: 1 },
  greeting: { fontSize: 24, fontWeight: "400", marginBottom: 4 },
  emailContainer: { flexDirection: "row", alignItems: "center" },
  email: { marginLeft: 4, fontSize: 14, color: "#444" },
  buttonsContainer: { width: "80%", alignItems: "center", gap: 12 },
  button: { flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", paddingVertical: 12, borderRadius: 6, borderWidth: 1.5 },
  blueButton: { borderColor: "#1E77A5" },
  blueText: { color: "#1E77A5", fontWeight: "bold", marginLeft: 8 },
  redButton: { borderColor: "#D32F2F" },
  redText: { color: "#D32F2F", fontWeight: "bold", marginLeft: 8 },
  blackButton: { borderColor: "#000", marginTop: 3 },
  blackText: { color: "#000", fontWeight: "bold" },
  buttonText: { color: "#1E77A5", fontWeight: "bold", marginLeft: 8 },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F5F5F5" },
  modalBackground: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "center", alignItems: "center" },
  modalContainer: { backgroundColor: "#fff", width: "80%", borderRadius: 12, padding: 20 },
  modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  modalInput: { borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 10, marginBottom: 12 },
  modalButtons: { flexDirection: "row", justifyContent: "flex-end", gap: 10 },
  modalCancel: { padding: 10 },
  modalConfirm: { padding: 10, backgroundColor: "#1E77A5", borderRadius: 6 },
});