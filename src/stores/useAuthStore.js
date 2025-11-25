import { create } from 'zustand'
import { saveUser, saveIsLogged, saveToken } from '../services/auth'

export const useAuthStore = create((set) => ({
    profile: null,
    token: null,
    isLogged: false,
    login: (userLogged) => {
        // Update in-memory state
        set({ profile: userLogged.profile, token: userLogged.token, isLogged: true })
        // Persist minimal user info and logged flag
        try {
            const minimal = { id: userLogged.profile?.id ?? userLogged.id ?? null }
            saveUser(minimal).catch(e => console.warn('[useAuthStore] saveUser failed', e))
            saveIsLogged(true).catch(e => console.warn('[useAuthStore] saveIsLogged failed', e))
            if (userLogged.token) saveToken(userLogged.token).catch(e => console.warn('[useAuthStore] saveToken failed', e))
        } catch (e) {
            console.warn('[useAuthStore] persistence error', e)
        }
    },
    logout: () => {
        set({ profile: null, token: null, isLogged: false })
        try {
            // clear persisted storage as well
            saveUser(null).catch(() => {})
            saveIsLogged(false).catch(() => {})
        } catch (e) {}
    }
}))