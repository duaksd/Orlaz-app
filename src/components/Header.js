import React, { useState } from 'react';
import { View, Image, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  const [searchText, setSearchText] = useState('');

  const handleMenuPress = (menu) => {
    Alert.alert('Menu clicado', `Você clicou em ${menu}`);
    // Se usar React Navigation:
    // navigation.navigate(menu);
  };

  return (
    <LinearGradient
      colors={['#1E4F6E', '#2A77A2']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.header}
    >
      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        {searchText === '' && (
          <FontAwesome
            name="search"
            size={20}
            color="#24282D"
            style={styles.searchIcon}
          />
        )}
        <TextInput
          placeholder="Inicie sua busca"
          placeholderTextColor="#24282D"
          style={styles.searchInput}
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>

      {/* Linha de ícones */}
      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconBox} onPress={() => handleMenuPress('Cidades')}>
          <Image
            source={require('../../assets/icons/cidades.png')}
            style={styles.iconImage}
            resizeMode="contain"
          />
          <Text style={styles.iconLabel}>Cidades</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBox} onPress={() => handleMenuPress('Atrações')}>
          <Image
            source={require('../../assets/icons/atracoes.png')}
            style={styles.iconImage}
            resizeMode="contain"
          />
          <Text style={styles.iconLabel}>Atrações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBox} onPress={() => handleMenuPress('Contato')}>
          <Image
            source={require('../../assets/icons/contato.png')}
            style={styles.iconImage}
            resizeMode="contain"
          />
          <Text style={styles.iconLabel}>Contato</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 34,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    height: 50,
    marginBottom: 25,
    alignSelf: 'center',
    width: '90%',
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 0, 
    fontSize: 16,
    color: '#24282D',
    textAlign: 'center', 
    textAlignVertical: 'center', 
    padding: 0,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconBox: {
    alignItems: 'center',
  },
  iconLabel: {
    color: '#fff',
    marginTop: 6,
    fontSize: 14,
    fontWeight: '500',
  },
  iconImage: {
    width: 56,
    height: 40,
  },
});
