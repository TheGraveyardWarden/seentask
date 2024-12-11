import * as SecureStore from "expo-secure-store";

export const store_save = <T,>(key: string, value: T): Promise<void> => {
    if (typeof value === "string" || typeof value === "number")
        return SecureStore.setItemAsync(key, String(value));
    else
        return SecureStore.setItemAsync(key, JSON.stringify(value));
}

export const store_get = async <T,>(key: string): Promise<T | null> => {
    let tmp: T | null = null;

    let res = await SecureStore.getItemAsync(key);
    if (!res) return null;

    try {
        tmp = JSON.parse(res);
    } catch(e) {
        tmp = res as T;
    }

    return tmp;
}