import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

// SecureStore keys must contain only alphanumeric characters, '.', '-' and '_'
const SECURE_USER_KEY = 'Orlaz_user_secure';
const SECURE_ISLOGGED_KEY = 'Orlaz_isLogged_secure';

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
  // fallback to browser localStorage
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
      return true;
    }
  } catch (e) {
    console.error('[auth] localStorage set failed', e);
    return false;
  }
};

const getSecureValue = async (key) => {
  if (hasSecureStore()) {
    return SecureStore.getItemAsync(key);
  }
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(key);
    }
  } catch (e) {
    console.error('[auth] localStorage get failed', e);
    return null;
  }
  return null;
};

const deleteSecureValue = async (key) => {
  if (hasSecureStore()) {
    return SecureStore.deleteItemAsync(key);
  }
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(key);
      return true;
    }
  } catch (e) {
    console.error('[auth] localStorage remove failed', e);
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
    console.log('[auth] clearStorage: cleared secure keys (or localStorage)');
    return true;
  } catch (error) {
    console.error('Erro ao limpar storage seguro:', error);
    return false;
  }
};

export default {
  saveUser,
  getUser,
  saveIsLogged,
  getIsLogged,
  clearStorage,
};
