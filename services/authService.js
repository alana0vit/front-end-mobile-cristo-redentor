// services/authService.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:8000/api-docs';

export async function login(email, senha) {
  try {
    const response = await axios.post(API_URL, {
      email,
      senha,
    });

    const token = response.data.token;

    // Salvar token
    await AsyncStorage.setItem('token', token);
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
  await AsyncStorage.removeItem('token');
}