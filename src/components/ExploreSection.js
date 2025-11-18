import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

const cities = [
    { id: '1', name: 'Caraguatatuba', screen: 'Caraguatatuba', rating: 4.0, image: require('../../assets/images/caraguatatuba.png') },
    { id: '2', name: 'Ilhabela', screen: 'Ilhabela', rating: 4.7, image: require('../../assets/images/ilhabela.png') },
    { id: '3', name: 'Ubatuba', screen: 'Ubatuba', rating: 3.5, image: require('../../assets/images/ubatuba.png') },
    { id: '4', name: 'São Sebastião', screen: 'SaoSebastiao', rating: 4.0, image: require('../../assets/images/saoseba.png') },
];

export default function ExploreSection() {
    const [favorites, setFavorites] = useState({});
    const navigation = useNavigation();
    const router = useRouter();

    const handlePress = (city) => {
        if (city.screen) {
            // Prefer expo-router paths under /city/<ScreenName>
            try {
                if (router && typeof router.push === 'function') {
                    // route groups with parentheses are not part of the URL;
                    // the file `src/app/(tabs)/(city)/Caraguatatuba.js` is exposed as `/Caraguatatuba`
                    router.push(`/${city.screen}`);
                    return;
                }
            } catch (e) {
                // fallback to react-navigation if router fails
            }
            navigation.navigate(city.screen);
        } else {
            Alert.alert('Página não disponível', `Ainda não existe página para ${city.name}`);
        }
    };

    const handleFavorite = (city) => {
        setFavorites(prev => ({
            ...prev,
            [city.id]: !prev[city.id]
        }));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explore as Belezas do Litoral Norte</Text>

            <FlatList
                data={cities}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => handlePress(item)}
                        activeOpacity={0.8}
                    >
                        <View style={styles.imageWrapper}>
                            <Image source={item.image} style={styles.image} />
                            <TouchableOpacity
                                style={styles.favorite}
                                onPress={() => handleFavorite(item)}
                                accessibilityLabel={`Favoritar ${item.name}`}
                            >
                                <FontAwesome
                                    name={favorites[item.id] ? 'heart' : 'heart-o'}
                                    size={16}
                                    color={favorites[item.id] ? '#e0245e' : '#ffffff'}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.city}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ paddingLeft: 10, paddingRight: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginBottom: 20 },
    title: { fontSize: 19, paddingLeft: 10, paddingTop: 10, fontWeight: '700', marginBottom: 10 },
    card: { marginRight: 12, width: 120, paddingLeft: 10 },
    imageWrapper: { position: 'relative' },
    image: { width: 120, height: 100, borderRadius: 8, marginBottom: 6 },
    favorite: { position: 'absolute', top: 6, left: 95, borderRadius: 12, width: 24, height: 24, justifyContent: 'center', alignItems: 'center' },
    city: { fontSize: 14, fontWeight: '600' },
    rating: { flexDirection: 'row', alignItems: 'center' },
    ratingText: { marginLeft: 4, fontSize: 12 },
});
