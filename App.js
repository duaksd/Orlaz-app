import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { AuthProvider } from './src/contexts/AuthContext';

import HomeScreen from "./src/screens/HomeScreen";
import Favorites from "./src/screens/FavoritesScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ContactScreen from "./src/screens/ContactScreen";
import CidadesScreen from "./src/screens/CidadesScreen";
import AtracoesScreen from "./src/screens/AtracoesScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import Caraguatatuba from "./src/screens/Caraguatatuba";
import Ilhabela from "./src/screens/Ilhabela";
import Ubatuba from "./src/screens/Ubatuba";
import SaoSeba from "./src/screens/SaoSeba";

import BottomNav from "./src/components/BottomNav";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack do Profile
function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

// Stack do Home
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Contato" component={ContactScreen} />
      <Stack.Screen name="Cidades" component={CidadesScreen} />
      <Stack.Screen name="Atracoes" component={AtracoesScreen} />
      <Stack.Screen name="Caraguatatuba" component={Caraguatatuba} />
      <Stack.Screen name="Ilhabela" component={Ilhabela} />
      <Stack.Screen name="Ubatuba" component={Ubatuba} />
      <Stack.Screen name="SaoSebastiao" component={SaoSeba} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.loading}>
        <Text>Carregando...</Text>
      </SafeAreaView>
    );
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <BottomNav {...props} />}
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: "#EFEFEF", borderTopWidth: 0, height: 70 },
          }}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Favoritos" component={Favorites} />
          <Tab.Screen name="Perfil" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
});
