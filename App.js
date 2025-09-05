import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Header from './src/components/Header';
import ExploreSection from './src/components/ExploreSection';
import AttractionsSection from './src/components/AttractionsSection';
import HowToGetSection from './src/components/HowToGetSection';
import BottomNav from './src/components/BottomNav';

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
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />
        <ExploreSection />
        <AttractionsSection />
        <HowToGetSection />
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EFEFEF' },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  scrollContent: {
    paddingBottom: 80, // reserva espaço para a BottomNav
  },
});
