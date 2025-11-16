import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuthStore } from '../stores/useAuthStore'

export default function Initializer() {

    const router = useRouter()
    const { login } = useAuthStore()

    useEffect(() => {
        const checkLogin = async () => {
            // NOTE: chave usada no AsyncStorage para persistir user.
            // Na migração: centralize esse nome em um arquivo de config (ex: src/config.js)
            // para evitar strings espalhadas pelo projeto.
            const userLoggedString = await AsyncStorage.getItem('userLogged')
            const userLogged = userLoggedString ? JSON.parse(userLoggedString) : null
            if(userLogged?.token){
                // Aqui fazemos o login no store global e redirecionamos para a rota principal.
                // Ao migrar para expo-router, manter o uso de `useAuthStore` (ou context) e
                // garantir que o provider esteja envolvido em `app/_layout.js`.
                login(userLogged)
                router.replace('/home')
            } else {
                router.replace('/Login')
            }
        }

        // Pequeno delay para exibir a tela de loading; remover ou ajustar conforme UX.
        setTimeout(checkLogin, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <Text>Meu Site</Text>
            <ActivityIndicator size="large" color="#111111ff" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})