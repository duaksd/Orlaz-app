import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Header from './src/components/Header';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loading}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={{ padding: 20 }}>
        <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 16 }}>
          Conteúdo
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EFEFEF' },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
