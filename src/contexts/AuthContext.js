import React, { createContext, useState, useContext, useEffect } from "react";
import {
  saveUser,
  getUser,
  clearStorage,
  saveIsLogged,
  getIsLogged,
} from "../services/auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        console.log("[AuthContext] loadStoredData start");
        const storedUser = await getUser();
        const storedIsLogged = await getIsLogged();
        console.log(
          "[AuthContext] loadStoredData got",
          storedUser,
          storedIsLogged
        );
        if (storedUser) setUser(storedUser);
        if (storedIsLogged) setIsLogged(true);
      } catch (error) {
        console.error("Erro ao carregar dados do auth:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const signIn = async (userData) => {
    try {
      console.log("[AuthContext] signIn called with", userData);
      const minimal = { id: userData?.id };
      const userSaved = await saveUser(minimal);
      const isLoggedSaved = await saveIsLogged(true);
      console.log("[AuthContext] save results", { userSaved, isLoggedSaved });
      if (!userSaved || !isLoggedSaved) {
        return false;
      }
      setUser(minimal);
      setIsLogged(true);
      return true;
    } catch (error) {
      console.error("Erro no signIn:", error);
      return false;
    }
  };

  const signOut = async () => {
    try {
      await clearStorage();
      setUser(null);
      setIsLogged(false);
    } catch (error) {
      console.error("Erro no signOut:", error);
    }
  };

  const updateUser = async (newData) => {
    try {
      const updated = { ...user, ...newData };
      await saveUser(updated);
      setUser(updated);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        isLogged,
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
  if (!context)
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  return context;
}
