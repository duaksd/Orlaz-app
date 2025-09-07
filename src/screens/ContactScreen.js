import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Linking,
} from "react-native";
import { FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons"; 
import { useNavigation } from "@react-navigation/native";

export default function ContatoScreen() {
  const navigation = useNavigation();

  // Estados para inputs
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleEnviar = () => {
    if (!nome || !email || !telefone || !cidade || !mensagem) {
      Alert.alert("Atenção", "Por favor, preencha todos os campos antes de enviar.");
      return;
    }
    Alert.alert("Mensagem enviada!", "Obrigado pelo seu contato.");
    // Aqui você pode adicionar lógica para enviar os dados ao backend/API
  };

  const abrirInstagram = () => {
    Linking.openURL("https://www.instagram.com/");
  };

  const abrirTwitter = () => {
    Linking.openURL("https://x.com/"); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header com seta e redes sociais */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeMain")}>
          <FontAwesome name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>

        <View style={styles.socialRow}>
          <TouchableOpacity onPress={abrirInstagram}>
            <FontAwesome
              name="instagram"
              size={22}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={abrirTwitter}>
            <FontAwesome6
              name="x-twitter"
              size={22}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Card principal */}
      <View style={styles.card}>
        <Text style={styles.title}>Fale Conosco</Text>
        <Text style={styles.subtitle}>
          Tire suas dúvidas ou solicite um roteiro personalizado
        </Text>

        {/* Inputs com labels */}
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} />

        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />

        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} />

        <Text style={styles.label}>Cidade de Interesse</Text>
        <TextInput style={styles.input} value={cidade} onChangeText={setCidade} />

        <Text style={styles.label}>Mensagem</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          multiline
          value={mensagem}
          onChangeText={setMensagem}
        />

        {/* Botão */}
        <TouchableOpacity style={styles.button} onPress={handleEnviar}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        {/* Contatos */}
        <View style={styles.contactRow}>
          <MaterialIcons name="email" size={20} color="#000" />
          <Text style={styles.contactText}>Orlazcaragua@gmail.com</Text>
        </View>
        <View style={styles.contactRow}>
          <Entypo name="phone" size={20} color="#000" />
          <Text style={styles.contactText}>(12) 3456-7890</Text>
        </View>
        <View style={styles.contactRow}>
          <Entypo name="location-pin" size={20} color="#000" />
          <Text style={styles.contactText}>
            Av. da Praia, 1234 - Caraguatatuba - SP
          </Text>
        </View>

        {/* Horário */}
        <View style={styles.scheduleBox}>
          <Text style={styles.scheduleTitle}>📅 Horário de Atendimento</Text>
          <Text style={styles.scheduleText}>
            Segunda a Sexta: 8h às 18h {"\n"}Sábado: 9h às 13h
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#1E4F6E",
    alignItems: "center",
    padding: 30,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
  },
  socialRow: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 12,
  },
  card: {
    backgroundColor: "#F7931E",
    borderRadius: 12,
    padding: 20,
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "300",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
    marginTop: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#2A77A2",
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  contactText: {
    marginLeft: 8,
    fontSize: 14,
  },
  scheduleBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 15,
    alignItems: "center",
  },
  scheduleTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },
  scheduleText: {
    fontSize: 13,
    textAlign: "center",
  },
});
