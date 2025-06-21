import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/logoAbrigo.jpeg')}
        style={styles.image}
      />

      <Input
        style={styles.input}
        placeholder='Digite seu e-mail'
        inputContainerStyle={{ borderBottomWidth: 0 }}
      />

      <Input style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        inputContainerStyle={{ borderBottomWidth: 0 }}
      />

      <Button title="Login" buttonStyle={styles.button} />
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