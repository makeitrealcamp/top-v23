import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      setAuthenticated(!!data);
    } catch(e) {
      console.error('error reading value', e)
    }
  }

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      // saving error
    }
  }

  const removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove error
    }
  }

  useEffect(() => {
    getData('@storage_token');
  }, [])

  return {
    isAuthenticated,
    storeData,
    removeValue,
    getData
  }
}

export default useAuth;
