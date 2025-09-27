import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  TextInput,
  Image,
  ScrollView,
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
      Alert.alert(
        "Permissão necessária",
        "Precisamos de acesso à galeria para alterar a foto."
      );
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
      {/* SCROLL DO CONTEÚDO */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Minha Conta</Text>

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
              <Text style={styles.changePhotoText}>Alterar foto</Text>
            </TouchableOpacity>
          </View>
        </View>

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

          <TouchableOpacity
            style={[styles.button, styles.blackButton]}
            onPress={handleLogout}
          >
            <FontAwesome name="sign-out" size={16} color="#000" />
            <Text style={styles.blackText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* MODAIS FORA DO SCROLLVIEW */}
      {modalVisible && (
        <View style={styles.modalWrapper}>
          <View style={styles.modalBackground} />

          <View style={styles.modalContainer}>
            {modalVisible === "email" && (
              <>
                <Text style={styles.modalTitle}>Atualizar Email</Text>
                <TextInput
                  placeholder="Novo email"
                  style={styles.modalInput}
                  value={newEmail}
                  onChangeText={setNewEmail}
                />
                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(null)}
                    style={styles.modalCancel}
                  >
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
              </>
            )}

            {modalVisible === "senha" && (
              <>
                <Text style={styles.modalTitle}>Mudar Senha</Text>
                <TextInput
                  placeholder="Nova senha"
                  secureTextEntry
                  style={styles.modalInput}
                  value={newPassword}
                  onChangeText={setNewPassword}
                />
                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(null)}
                    style={styles.modalCancel}
                  >
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
              </>
            )}

            {modalVisible === "deletar" && (
              <>
                <Text style={styles.modalTitle}>Deletar Conta</Text>
                <Text style={{ marginBottom: 12 }}>
                  Tem certeza que deseja deletar sua conta? Esta ação não pode ser desfeita.
                </Text>
                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(null)}
                    style={styles.modalCancel}
                  >
                    <Text>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleDeleteAccount}
                    style={styles.modalConfirm}
                  >
                    <Text style={{ color: "#fff" }}>Deletar</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", position: "relative" },
  scrollContent: { alignItems: "center", paddingBottom: 40 },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 60,
    textAlign: "center",
  },
  userBlock: { flexDirection: "row", alignItems: "center", marginBottom: 30 },
  profileImage: { width: 70, height: 70, borderRadius: 35 },
  userInfoContainer: { marginLeft: 15, flexShrink: 1 },
  greeting: { fontSize: 24, fontWeight: "400", marginBottom: 4 },
  emailContainer: { flexDirection: "row", alignItems: "center" },
  email: { marginLeft: 4, fontSize: 14, color: "#444" },
  changePhotoText: { color: "#1E77A5", fontWeight: "bold", marginTop: 6 },
  buttonsContainer: {
    width: "80%",
    alignItems: "center",
    gap: 12,
    marginBottom: 30,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 1.5,
  },
  blueButton: { borderColor: "#1E77A5" },
  blueText: { color: "#1E77A5", fontWeight: "bold", marginLeft: 8 },
  redButton: { borderColor: "#D32F2F" },
  redText: { color: "#D32F2F", fontWeight: "bold", marginLeft: 8 },
  blackButton: { borderColor: "#000" },
  blackText: { color: "#000", fontWeight: "bold", marginLeft: 8 },
  buttonText: { color: "#1E77A5", fontWeight: "bold", marginLeft: 8 },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },

  // MODAL
  modalWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    width: "90%",
    maxWidth: 400,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    width: "100%",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    width: "100%",
  },
  modalCancel: {
    padding: 10,
  },
  modalConfirm: {
    padding: 10,
    backgroundColor: "#1E77A5",
    borderRadius: 6,
  },
});
