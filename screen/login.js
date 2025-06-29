import { useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { login } from '../services/authService.js'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const success = await login(email, password);

    if (success) {
      navigation.replace('Home');
    } else {
      Alert.alert('Erro', 'E-mail ou senha inválidos');
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/logoAbrigo.jpeg')}
        style={styles.image}
      />

      <Input
        placeholder='Digite seu e-mail'
        value={email}
        onChangeText={setEmail}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        style={styles.input}
      />

      <Input
        placeholder="Digite sua senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        style={styles.input}
      />

      <Button title="Login" buttonStyle={styles.button} onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2CA8E8',
    width: 280,
    height: 48,
    borderRadius: 50,
    // Sombras para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // Sombra para Android
    elevation: 4,
  },
  input: {
    backgroundColor: "#fff",
    color: "black",
    marginBottom: 30,
    width: 320,
    height: 48,
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: "#7ac4e9",

    // Sombras para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // Sombra para Android
    elevation: 4,
  },
});