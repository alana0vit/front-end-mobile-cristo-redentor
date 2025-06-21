import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder='Digite o nome do idoso'
        inputContainerStyle={{ borderBottomWidth: 0 }}
      />

      <Input
        style={styles.input}
        placeholder='Data de nascimento'
        inputContainerStyle={{ borderBottomWidth: 0 }}
      />

      <Input
        style={styles.input}
        placeholder='Digite o peso do idoso'
        inputContainerStyle={{ borderBottomWidth: 0 }}
      />

      <Input
        style={styles.input}
        placeholder='Digite o CPF do idoso'
        inputContainerStyle={{ borderBottomWidth: 0 }}
      />

      <Input
        style={styles.input}
        placeholder='Rémedios'
        inputContainerStyle={{ borderBottomWidth: 0 }}
      />

      <Button title="Cadastrar" buttonStyle={styles.button} />
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
  input: {
    backgroundColor: "#fff",
    color: "black",
    marginBottom: 30,
    width: 320,
    height: 48,
    borderRadius: 50,
    padding: 10,
  },
  button: {
    backgroundColor: '#2CA8E8',
    width: 280,
    height: 48,
    borderRadius: 50,
  },
});