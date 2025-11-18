import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { useAuthStore } from '../stores/useAuthStore'
import { getUser, getIsLogged } from '../services/auth'

export default function Initializer() {

    const router = useRouter()
    const { login } = useAuthStore()

    useEffect(() => {
        const checkLogin = async () => {
            // NOTE: chave usada no AsyncStorage para persistir user.
            // Na migração: centralize esse nome em um arquivo de config (ex: src/config.js)
            // para evitar strings espalhadas pelo projeto.
            // Use the centralized auth storage so it matches saveUser/getUser
            const storedUser = await getUser()
            const storedIsLogged = await getIsLogged()
            if (storedIsLogged && storedUser && storedUser.id) {
                // login expects { profile, token }
                login({ profile: storedUser, token: null })
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