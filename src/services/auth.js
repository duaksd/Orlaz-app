import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// SecureStore keys must contain only alphanumeric characters, '.', '-' and '_'
const SECURE_USER_KEY = 'Orlaz_user_secure';
const SECURE_ISLOGGED_KEY = 'Orlaz_isLogged_secure';
const SECURE_TOKEN_KEY = 'Orlaz_token_secure';

// Helper to detect if SecureStore is usable (some web builds may not support it)
const hasSecureStore = () => {
  try {
    return typeof SecureStore?.setItemAsync === 'function' && Platform.OS !== 'web';
  } catch (e) {
    return false;
  }
};

const setSecureValue = async (key, value) => {
  if (hasSecureStore()) {
    return SecureStore.setItemAsync(key, value);
  }
  // fallback to AsyncStorage (cross-platform). Using AsyncStorage is preferable to
  // directly touching window.localStorage because it works on native and web
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.error('[auth] AsyncStorage set failed', e);
    return false;
  }
};

const getSecureValue = async (key) => {
  if (hasSecureStore()) {
    return SecureStore.getItemAsync(key);
  }
  try {
    const v = await AsyncStorage.getItem(key);
    return v;
  } catch (e) {
    console.error('[auth] AsyncStorage get failed', e);
    return null;
  }
  return null;
};

const deleteSecureValue = async (key) => {
  if (hasSecureStore()) {
    return SecureStore.deleteItemAsync(key);
  }
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    console.error('[auth] AsyncStorage remove failed', e);
    return false;
  }
};

export const saveUser = async (userData) => {
  try {
    const res = await setSecureValue(SECURE_USER_KEY, JSON.stringify(userData));
    console.log('[auth] saveUser result', !!res);
    return !!res;
  } catch (error) {
    console.error('Erro ao salvar usuário seguro:', error);
    return false;
  }
};

export const getUser = async () => {
  try {
    const json = await getSecureValue(SECURE_USER_KEY);
    return json ? JSON.parse(json) : null;
  } catch (error) {
    console.error('Erro ao recuperar usuário seguro:', error);
    return null;
  }
};

export const saveIsLogged = async (value) => {
  try {
    const res = await setSecureValue(SECURE_ISLOGGED_KEY, value ? 'true' : 'false');
    console.log(`[auth] saveIsLogged: set ${SECURE_ISLOGGED_KEY} -> ${value} (res=${!!res})`);
    return !!res;
  } catch (error) {
    console.error('Erro ao salvar isLogged seguro:', error);
    return false;
  }
};

export const getIsLogged = async () => {
  try {
    const v = await getSecureValue(SECURE_ISLOGGED_KEY);
    console.log(`[auth] getIsLogged: ${SECURE_ISLOGGED_KEY} -> ${v}`);
    return v === 'true';
  } catch (error) {
    console.error('Erro ao recuperar isLogged seguro:', error);
    return false;
  }
};

export const clearStorage = async () => {
  try {
    await deleteSecureValue(SECURE_USER_KEY);
    await deleteSecureValue(SECURE_ISLOGGED_KEY);
    await deleteSecureValue(SECURE_TOKEN_KEY);
    console.log('[auth] clearStorage: cleared secure keys (or localStorage)');
    return true;
  } catch (error) {
    console.error('Erro ao limpar storage seguro:', error);
    return false;
  }
};

export const saveToken = async (token) => {
  try {
    const res = await setSecureValue(SECURE_TOKEN_KEY, token || '');
    console.log('[auth] saveToken result', !!res);
    return !!res;
  } catch (error) {
    console.error('Erro ao salvar token seguro:', error);
    return false;
  }
};

export const getToken = async () => {
  try {
    const t = await getSecureValue(SECURE_TOKEN_KEY);
    return t || null;
  } catch (error) {
    console.error('Erro ao recuperar token seguro:', error);
    return null;
  }
};

export const deleteToken = async () => {
  try {
    await deleteSecureValue(SECURE_TOKEN_KEY);
    return true;
  } catch (e) {
    console.error('[auth] deleteToken failed', e);
    return false;
  }
};

export default {
  saveUser,
  getUser,
  saveIsLogged,
  getIsLogged,
  clearStorage,
  saveToken,
  getToken,
  deleteToken,
};
