import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import BottomNav from "../../../components/BottomNav.js";

export default function RootLayout() {
    return (
        <Tabs
            tabBar={(props) => <BottomNav {...props} />}
            screenOptions={{
                tabBarActiveTintColor: '#2A77A2',
                tabBarInactiveTintColor: '#000000',
                tabBarLabelStyle: { fontSize: 10 },
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons name="home-sharp" size={24} color={color} />,
                }}
            />

            <Tabs.Screen
                name="pontos"
                options={{
                    title: 'Pontos',
                    tabBarIcon: ({ color }) => <Ionicons name="map" size={24} color={color} />,
                }}
            />

            <Tabs.Screen
                name="favoritos"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) => <FontAwesome name="heart" size={24} color={color} />,
                }}
            />

            <Tabs.Screen
                name="restaurantes"
                options={{
                    title: 'Restaurantes',
                    tabBarIcon: ({ color }) => <FontAwesome name="cutlery" size={24} color={color} />,
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <FontAwesome
                        name="user-circle"
                        size={24}
                        color={color}
                    />,
                }}
            />
        </Tabs>
    );
}