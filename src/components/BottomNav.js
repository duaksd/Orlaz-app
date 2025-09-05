import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState('home'); // estado da aba ativa

  const handlePress = (tab) => {
    setActiveTab(tab);
    // Aqui você pode navegar para a tela correspondente se usar React Navigation
    // navigation.navigate(tab);
  };

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={() => handlePress('home')}>
        <Ionicons name="home-sharp" size={26} color={activeTab === 'home' ? '#1E4F6E' : '#000000'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('favorites')}>
        <FontAwesome name="star" size={26} color={activeTab === 'favorites' ? '#1E4F6E' : '#000000'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('profile')}>
        <FontAwesome name="user-circle" size={26} color={activeTab === 'profile' ? '#1E4F6E' : '#000000'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
});
