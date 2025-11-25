// Central configuration for the app
// Change `API_BASE` to your machine LAN IP when testing on a physical device
// (e.g. "http://192.168.1.12:3000") or use a tunnel (ngrok / Expo Tunnel).
export const API_BASE = __DEV__ ? 'http://localhost:3000' : 'https://api.yourdomain.com';

// If you prefer always to use a LAN IP during development, replace the __DEV__ branch above.
