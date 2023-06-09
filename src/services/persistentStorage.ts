import { AsyncPersistentStorage } from 'persistor-node';
import type { AsyncStorage } from 'persistor-node/types/src/types/AsyncStorage';
import AsyncStorageNative from '@react-native-async-storage/async-storage';
let length = 0;

const storage: AsyncStorage = {
  async key(index) {
    const keys = await AsyncStorageNative.getAllKeys();

    return keys[index];
  },
  getItem: async (key: string) => await AsyncStorageNative.getItem(key),
  clear: () => AsyncStorageNative.clear(),
  removeItem: async (key: string) => {
    AsyncStorageNative.removeItem(key);
    const allKeys = await AsyncStorageNative.getAllKeys();
    length = allKeys.length;
  },
  setItem: (key: string, value: string) =>
    AsyncStorageNative.setItem(key, value),
  get length() {
    return length;
  },
};

export const persistentStoragePromise = AsyncPersistentStorage.getOrCreate(
  'myserielist',
  { storage },
);
