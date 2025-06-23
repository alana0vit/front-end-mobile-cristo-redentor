import { useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { login } from '../services/authService.js'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin() {
    const success = await login(email, senha);

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
        value={senha}
        onChangeText={setSenha}
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
  },
  input: {
    backgroundColor: "#fff",
    color: "black",
    marginBottom: 30,
    width: 320,
    height: 48,
    borderRadius: 50,
    padding: 10,
  },
});