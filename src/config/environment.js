export const ENV = {
  isProduction: import.meta.env?.PROD || false,
  isDevelopment: import.meta.env?.DEV || true,
  apiBaseUrl: import.meta.env?.VITE_API_BASE_URL || '',
};
