import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
  Animated,
} from "react-native";
import { FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function ContatoScreen() {
  const navigation = useNavigation();

  // Estados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [mensagem, setMensagem] = useState("");

  // Modal de sucesso
  const [modalSucesso, setModalSucesso] = useState(false);

  // Mensagem de erro
  const [erro, setErro] = useState("");

  // Animated value
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const showErro = (mensagem) => {
    setErro(mensagem);
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => setErro(""));
      }, 3000); // some depois de 3 segundos
    });
  };

  const handleEnviar = () => {
    if (!nome || !email || !telefone || !cidade || !mensagem) {
      showErro("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    // Se tudo preenchido
    setErro(""); // limpa a mensagem de erro
    setModalSucesso(true); // mostra modal de sucesso
  };

  const fecharModalSucesso = () => {
    setModalSucesso(false);
    setNome("");
    setEmail("");
    setTelefone("");
    setCidade("");
    setMensagem("");
  };

  const abrirInstagram = () => {
    Linking.openURL("https://www.instagram.com/");
  };

  const abrirTwitter = () => {
    Linking.openURL("https://x.com/");
  };

  return (
    <>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={styles.scrollView}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => navigation.navigate("HomeMain")}>
              <Ionicons name="chevron-back" size={28} color="#fff" />
            </TouchableOpacity>

            <View style={styles.socialRow}>
              <TouchableOpacity onPress={abrirInstagram}>
                <FontAwesome name="instagram" size={22} color="#fff" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={abrirTwitter}>
                <FontAwesome6 name="x-twitter" size={22} color="#fff" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Card */}
          <View style={styles.card}>
            <Text style={styles.title}>Fale Conosco</Text>
            <Text style={styles.subtitle}>
              Tire suas dúvidas ou solicite um roteiro personalizado
            </Text>

            {/* Inputs */}
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} />

            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              value={telefone}
              onChangeText={setTelefone}
              keyboardType="phone-pad"
            />

            <Text style={styles.label}>Cidade de Interesse</Text>
            <TextInput style={styles.input} value={cidade} onChangeText={setCidade} />

            <Text style={styles.label}>Mensagem</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              multiline
              value={mensagem}
              onChangeText={setMensagem}
            />

            {/* Mensagem de erro animada */}
            {erro ? (
              <Animated.View style={{ opacity: fadeAnim }}>
                <Text style={styles.erroText}>{erro}</Text>
              </Animated.View>
            ) : null}

            {/* Botão Enviar */}
            <TouchableOpacity style={styles.button} onPress={handleEnviar}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>

            {/* Contatos */}
            <View style={styles.contactContainer}>
              <View style={styles.contactRowInline}>
                <TouchableOpacity
                  style={styles.contactItemColumn}
                  onPress={() => Linking.openURL("mailto:Orlazcaragua@gmail.com")}
                >
                  <View style={styles.contactLabelRow}>
                    <MaterialIcons name="email" size={18} color="#000" />
                    <Text style={styles.contactLabel}> E-mail</Text>
                  </View>
                  <Text style={styles.contactLink}>Orlazcaragua@gmail.com</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.contactItemColumn}
                  onPress={() => Linking.openURL("tel:+551234567890")}
                >
                  <View style={styles.contactLabelRow}>
                    <Entypo name="phone" size={18} color="#000" />
                    <Text style={styles.contactLabel}> Telefone</Text>
                  </View>
                  <Text style={styles.contactText}>(12) 3456-7890</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.contactItemColumn}
                onPress={() =>
                  Linking.openURL(
                    "https://www.google.com/maps?q=Av.+da+Praia,+1234+-+Caraguatatuba+-+SP"
                  )
                }
              >
                <View style={styles.contactLabelRow}>
                  <Entypo name="location-pin" size={18} color="#000" />
                  <Text style={styles.contactLabel}> Endereço</Text>
                </View>
                <Text style={styles.contactText}>
                  Av. da Praia, 1234 – Caraguatatuba – SP
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Horário */}
          <View style={styles.scheduleBox}>
            <View style={styles.scheduleTitleContainer}>
              <FontAwesome name="calendar" size={16} color="#000" style={styles.calendarIcon} />
              <Text style={styles.scheduleTitle}>Horário de Atendimento</Text>
            </View>
            <Text style={styles.scheduleText}>Segunda a Sexta: 8h às 18h</Text>
            <Text style={styles.scheduleText}>Sábado: 9h às 13h</Text>
          </View>
        </View>
      </ScrollView>

      {/* Modal de Sucesso */}
      {modalSucesso && (
        <View style={styles.modalWrapper}>
          <View style={styles.modalBackground} />
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Enviado com sucesso!</Text>
            <Text style={{ textAlign: "center", marginVertical: 10 }}>
              Fique de olho na sua caixa de entrada!
            </Text>
            <TouchableOpacity style={styles.modalConfirm} onPress={fecharModalSucesso}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: { flex: 1, backgroundColor: "#1E4F6E" },
  container: { flexGrow: 1, backgroundColor: "#1E4F6E", alignItems: "center", padding: 20 },
  headerRow: { flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom: 10, alignItems: "center" },
  socialRow: { flexDirection: "row" },
  icon: { marginLeft: 12 },
  card: { backgroundColor: "#F7931E", borderRadius: 12, padding: 20, width: "100%", marginBottom: 65, position: "relative" },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 5 },
  subtitle: { fontSize: 14, textAlign: "center", marginBottom: 15, fontWeight: "300" },
  label: { fontSize: 14, fontWeight: "500", marginBottom: 4, marginTop: 8 },
  input: { backgroundColor: "#fff", borderRadius: 6, padding: 10, marginBottom: 10 },
  textArea: { height: 80, textAlignVertical: "top" },
  erroText: { color: "#D32F2F", fontWeight: "bold", marginBottom: 6, textAlign: "center" },
  button: { backgroundColor: "#2A77A2", paddingVertical: 7, width: 160, alignSelf: "center", borderRadius: 30, marginTop: 10, marginBottom: 20, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  contactContainer: { width: "100%", marginTop: 2 },
  contactRowInline: { flexDirection: "row", justifyContent: "space-between", gap: 70, marginBottom: 12 },
  contactItemColumn: { flex: 1, marginRight: 10 },
  contactLabelRow: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  contactLabel: { fontWeight: "bold", fontSize: 14, marginLeft: 4 },
  contactText: { fontSize: 14, color: "#000" },
  contactLink: { fontSize: 14, textDecorationLine: "underline", color: "#000" },
  scheduleBox: { backgroundColor: "#fff", borderRadius: 8, position: "absolute", bottom: 25, alignSelf: "center", paddingVertical: 7, paddingHorizontal: 40, alignItems: "center", elevation: 3, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4 },
  scheduleTitleContainer: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
  calendarIcon: { marginRight: 8 },
  scheduleTitle: { fontWeight: "bold", fontSize: 14 },
  scheduleText: { fontSize: 13, textAlign: "center", lineHeight: 20 },

  // Modal
  modalWrapper: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", zIndex: 1000 },
  modalBackground: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.6)" },
  modalContainer: { backgroundColor: "#fff", width: "90%", maxWidth: 400, borderRadius: 16, padding: 24, alignItems: "center" },
  modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 12, textAlign: "center" },
  modalConfirm: { padding: 10, backgroundColor: "#1E77A5", borderRadius: 6, marginTop: 10, width: 100, alignItems: "center" },
});
