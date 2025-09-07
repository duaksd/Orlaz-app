import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";

import HomeScreen from "./src/screens/HomeScreen";
import Favorites from "./src/screens/FavoritesScreen";
import Profile from "./src/screens/ProfileScreen";
import ContactScreen from "./src/screens/ContactScreen";

import BottomNav from "./src/components/BottomNav";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack com Home + Contact
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Contato" component={ContactScreen} />
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
        <Tab.Screen name="Perfil" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
});
