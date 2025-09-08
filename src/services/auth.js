import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = '@Orlaz:user';
const TOKEN_KEY = '@Orlaz:token';

export const saveUser = async (userData) => {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(userData));
  } catch (error) {
    console.error('Erro ao salvar dados do usuário:', error);
  }
};

export const getUser = async () => {
  try {
    const userData = await AsyncStorage.getItem(USER_KEY);
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Erro ao recuperar dados do usuário:', error);
    return null;
  }
};

export const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('Erro ao salvar token:', error);
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('Erro ao recuperar token:', error);
    return null;
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.multiRemove([USER_KEY, TOKEN_KEY]);
  } catch (error) {
    console.error('Erro ao limpar dados:', error);
  }
};
