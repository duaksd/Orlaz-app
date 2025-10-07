import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { AuthProvider } from "./src/contexts/AuthContext";
// Screens principais
import HomeScreen from "./src/screens/HomeScreen";
import Favorites from "./src/screens/FavoritesScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ContactScreen from "./src/screens/ContactScreen";
import CidadesScreen from "./src/screens/CidadesScreen";
import AtracoesScreen from "./src/screens/AtracoesScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import RestaurantesScreen from "./src/screens/RestaurantesScreen";

// Cidades
import Caraguatatuba from "./src/screens/Caraguatatuba";
import Ilhabela from "./src/screens/Ilhabela";
import Ubatuba from "./src/screens/Ubatuba";
import SaoSeba from "./src/screens/SaoSeba";

// Lugares
import ParqueEstadual from "./src/screens/ParqueEstadual";
import Martim from "./src/screens/Martim";
import PraiaCocanha from "./src/screens/PraiaCocanha";
import SantoAntonio from "./src/screens/SantoAntonio";
import CentroHistorico from "./src/screens/CentroHistorico";
import Juquehy from "./src/screens/Juquehy";
import Maresias from "./src/screens/Maresias";
import ToqueToque from "./src/screens/ToqueToque";
import PraiaBonete from "./src/screens/PraiaBonete";
import PraiaJabaquara from "./src/screens/PraiaJabaquara";
import PraiaJuliao from "./src/screens/PraiaJuliao";
import Castelhanos from "./src/screens/Castelhanos";
import RuinasLagoinha from "./src/screens/RuinasLagoinha";
import PraiaPortugues from "./src/screens/PraiaPortugues";
import IlhaDasCouves from "./src/screens/IlhaDasCouves";
import CachoeiraPrumirim from "./src/screens/CachoeiraPrumirim";

// Atrações detalhadas
import TrilhasScreen from "./src/screens/TrilhasScreen";
import EsportesScreen from "./src/screens/EsportesScreen";
import FestivaisScreen from "./src/screens/FestivaisScreen";
import GastronomiaScreen from "./src/screens/GastronomiaScreen";

// Esportes
import Surf from "./src/screens/surf";
import Standup from "./src/screens/standup";

// Trilhas
import TrilhaSetePraias from "./src/screens/TrilhaSetePraias";
import TrilhaAguaBranca from "./src/screens/TrilhaAguaBranca";

//Festivais
import FestivalDeVerao from "./src/screens/FestivalDeVerao";
import FestaSaoSeba from "./src/screens/FestaSaoSeba";

// Restaurantes
import RestauranteCaicara from "./src/screens/RestauranteCaicara";
import SaboresDoMar from "./src/screens/SaboresDoMar";
import BensBarComidariaScreen from "./src/screens/BensBarComidaria";
import RestauranteRavenala from "./src/screens/RestauranteRavenala";
import GarageBarSteakhouse from "./src/screens/GarageBarSteakhouse";
import RaizesRestaurantePizzaria from "./src/screens/RaizesRestaurantePizzaria";

// Gastronomia
import Taioba from "./src/screens/Taioba";
import Mexilhoes from "./src/screens/Mexilhoes";
import Frutos from "./src/screens/Frutos";
import PeixeAssado from "./src/screens/PeixeAssado";
import Caldeirada from "./src/screens/Caldeirada";
import Moqueca from "./src/screens/Moqueca";
import LambeLambe from "./src/screens/LambeLambe";
import PeixeSalgado from "./src/screens/PeixeSalgado";
import CamaraoMoranga from "./src/screens/CamaraoMoranga";

// Componentes
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

      {/* Cidades */}
      <Stack.Screen name="Caraguatatuba" component={Caraguatatuba} />
      <Stack.Screen name="Ilhabela" component={Ilhabela} />
      <Stack.Screen name="Ubatuba" component={Ubatuba} />
      <Stack.Screen name="SaoSebastiao" component={SaoSeba} />

      {/* Lugares */}
      <Stack.Screen name="ParqueEstadual" component={ParqueEstadual} />
      <Stack.Screen name="Martim" component={Martim} />
      <Stack.Screen name="PraiaCocanha" component={PraiaCocanha} />
      <Stack.Screen name="SantoAntonio" component={SantoAntonio} />
      <Stack.Screen name="CentroHistorico" component={CentroHistorico} />
      <Stack.Screen name="Juquehy" component={Juquehy} />
      <Stack.Screen name="Maresias" component={Maresias} />
      <Stack.Screen name="ToqueToque" component={ToqueToque} />
      <Stack.Screen name="PraiaBonete" component={PraiaBonete} />
      <Stack.Screen name="PraiaJabaquara" component={PraiaJabaquara} />
      <Stack.Screen name="PraiaJuliao" component={PraiaJuliao} />
      <Stack.Screen name="Castelhanos" component={Castelhanos} />
      <Stack.Screen name="RuinasLagoinha" component={RuinasLagoinha} />
      <Stack.Screen name="PraiaPortugues" component={PraiaPortugues} />
      <Stack.Screen name="IlhaDasCouves" component={IlhaDasCouves} />
      <Stack.Screen name="CachoeiraPrumirim" component={CachoeiraPrumirim} />

      {/* Gastronomia */}
      <Stack.Screen name="Taioba" component={Taioba} />
      <Stack.Screen name="Mexilhoes" component={Mexilhoes} />
      <Stack.Screen name="Frutos" component={Frutos} />
      <Stack.Screen name="Caldeirada" component={Caldeirada} />
      <Stack.Screen name="PeixeAssado" component={PeixeAssado} />
      <Stack.Screen name="Moqueca" component={Moqueca} />
      <Stack.Screen name="LambeLambe" component={LambeLambe} />
      <Stack.Screen name="PeixeSalgado" component={PeixeSalgado} />
      <Stack.Screen name="CamaraoMoranga" component={CamaraoMoranga} />

      {/* Restaurantes na Gastronomia */}
      <Stack.Screen name="RestauranteCaicara" component={RestauranteCaicara} />
      <Stack.Screen name="SaboresDoMar" component={SaboresDoMar} />

      {/* Atrações detalhadas */}
      <Stack.Screen name="Trilhas" component={TrilhasScreen} />
      <Stack.Screen name="Esportes" component={EsportesScreen} />
      <Stack.Screen name="Festivais" component={FestivaisScreen} />
      <Stack.Screen name="Gastronomia" component={GastronomiaScreen} />

      {/* Esportes */}
      <Stack.Screen name="Surf" component={Surf} />
      <Stack.Screen name="Standup" component={Standup} />

      {/* Trilhas */}
      <Stack.Screen name="TrilhaSetePraias" component={TrilhaSetePraias} />
      <Stack.Screen name="TrilhaAguaBranca" component={TrilhaAguaBranca} />

      {/* Festivais */}
      <Stack.Screen name="FestivalDeVerao" component={FestivalDeVerao} />
      <Stack.Screen name="FestaSaoSeba" component={FestaSaoSeba} />
    </Stack.Navigator>
  );
}

// Stack do Restaurantes
function RestaurantesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RestaurantesMain" component={RestaurantesScreen} />
      <Stack.Screen
        name="BensBarComidaria"
        component={BensBarComidariaScreen}
      />
      <Stack.Screen
        name="RestauranteRavenala"
        component={RestauranteRavenala}
      />
      <Stack.Screen
        name="GarageBarSteakhouse"
        component={GarageBarSteakhouse}
      />
      <Stack.Screen
        name="RaizesRestaurantePizzaria"
        component={RaizesRestaurantePizzaria}
      />
        <Stack.Screen name="RestauranteCaicara" component={RestauranteCaicara} />
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
            tabBarStyle: {
              backgroundColor: "#EFEFEF",
              borderTopWidth: 0,
              height: 70,
            },
          }}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Favoritos" component={Favorites} />
          <Tab.Screen name="Perfil" component={ProfileStack} />
          <Tab.Screen name="Restaurantes" component={RestaurantesStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
});
