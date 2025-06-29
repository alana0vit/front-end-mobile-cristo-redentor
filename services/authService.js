import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:8000/auth/login';

export async function login(email, password) {
  try {
    const response = await axios.post(API_URL, {
      email,
      password,
    });

    const { accessToken, refreshToken } = response.data;

    // Salvar token
    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('refreshToken', refreshToken);
    return true;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return false;
  }
}

export async function getToken() {
  return await AsyncStorage.getItem('token');
}

export async function logout() {
  await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);
}