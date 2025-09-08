import React, { createContext, useState, useContext, useEffect } from 'react';
import { saveUser, getUser, saveToken, getToken, clearStorage } from '../services/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStoredData();
  }, []);

  async function loadStoredData() {
    try {
      const storedUser = await getUser();
      const storedToken = await getToken();

      if (storedUser && storedToken) {
        setUser(storedUser);
      }
    } catch (error) {
      console.error('Erro ao carregar dados armazenados:', error);
    } finally {
      setLoading(false);
    }
  }

  const signIn = async (userData) => {
    try {
      // Aqui você faria a chamada para a API de login
      // Por enquanto vamos simular um token
      const token = 'fake-token-' + Date.now();
      
      // Salvando dados no AsyncStorage
      await saveToken(token);
      await saveUser(userData);
      
      // Atualizando o estado
      setUser(userData);
      
      return true;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return false;
    }
  };

  const signOut = async () => {
    try {
      await clearStorage();
      setUser(null);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const updateUser = async (newData) => {
    try {
      const updatedUser = { ...user, ...newData };
      await saveUser(updatedUser);
      setUser(updatedUser);
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }

  return context;
}
