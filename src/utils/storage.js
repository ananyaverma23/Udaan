const canUseStorage = () =>
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

export const getStorageItem = (key, fallback = null) => {
  if (!canUseStorage()) return fallback;

  try {
    const value = window.localStorage.getItem(key);
    return value ?? fallback;
  } catch (error) {
    console.error(`Failed to read localStorage key "${key}".`, error);
    return fallback;
  }
};

export const setStorageItem = (key, value) => {
  if (!canUseStorage()) return false;

  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error(`Failed to write localStorage key "${key}".`, error);
    return false;
  }
};

export const removeStorageItem = (key) => {
  if (!canUseStorage()) return false;

  try {
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Failed to remove localStorage key "${key}".`, error);
    return false;
  }
};

export const getStorageJson = (key, fallback = null) => {
  const rawValue = getStorageItem(key);

  if (!rawValue) return fallback;

  try {
    return JSON.parse(rawValue);
  } catch (error) {
    console.error(`Failed to parse localStorage JSON for "${key}".`, error);
    removeStorageItem(key);
    return fallback;
  }
};

export const setStorageJson = (key, value) =>
  setStorageItem(key, JSON.stringify(value));
