import { Stack } from "expo-router"
import { AuthProvider } from '../contexts/AuthContext'

export default function Layout() {
    return (
        <AuthProvider>
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    options={{ title: "Login" }}
                />
                <Stack.Screen
                    name="signup"
                    options={{ title: "Cadastrar" }}
                />
                {/* <Stack.Screen   
                    name="edituser"
                    options={{ title: "Editar Perfil" }}
                /> */}
                <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                />
            </Stack>
        </AuthProvider>
    )
}