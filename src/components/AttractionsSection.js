import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function AttractionsSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atrações Imperdíveis</Text>
      <Text style={styles.subtitle}>
        Descubra o que fazer no litoral norte além de tomar sol 😎☀️
      </Text>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.card}>
          <View>
            <FontAwesome5 name="mountain" size={22} color="#1E4F6E" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Trilhas</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View>
            <MaterialIcons name="event" size={22} color="#D35400" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Festivais e Eventos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View>
            <FontAwesome5 name="water" size={22} color="#2980B9" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Esportes Aquáticos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View>
            <MaterialIcons name="restaurant" size={22} color="#E67E22" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Gastronomia Local</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    marginBottom: 20,
    paddingHorizontal: 10
  },
  title: { 
    fontSize: 19, 
    fontWeight: '700', 
    marginBottom: 4 
  },
  subtitle: { 
    fontSize: 14, 
    marginBottom: 12 
  },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center', // centraliza ícone + texto verticalmente
    justifyContent: 'flex-start',
    marginBottom: 12,
    elevation: 2,
  },
  textContainer: {
    marginLeft: 8,
    justifyContent: 'center', // centraliza verticalmente dentro do card
    flexShrink: 1,
  },
  label: { 
    fontWeight: '600',
    flexWrap: 'wrap', // permite quebra de linha se necessário
  },
});
