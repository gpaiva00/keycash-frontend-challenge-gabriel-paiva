import AsyncStorage from '@react-native-async-storage/async-storage'

function usePersistedState() {
  const storeData = async (key: string, value: object | string) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      // saving error
    }
  }

  const getStoredData = async (key: string, initialState?: object) => {
    const storedValue = await AsyncStorage.getItem(key)

    if (storedValue) return JSON.parse(storedValue)

    return initialState
  }

  return { getStoredData, storeData }
}

export default usePersistedState
