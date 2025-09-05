import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HowToGetSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como chegar</Text>
      
      <View style={styles.mapContainer}>
        <Image
          source={require('../../assets/images/map.png')}
          style={styles.map}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    paddingHorizontal: 10
  },
  title: {
    backgroundColor: '#F39C12',
    color: '#fff',
    fontWeight: '700',
    fontSize: 19,
    textAlign: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  mapContainer: {
    backgroundColor: '#F39C12', // mesma cor do título
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center',     // centraliza horizontalmente
    padding: 10,
  },
  map: { 
    width: '95%',  // deixa um espacinho lateral
    height: 180,
    borderRadius: 10,
  },
});
