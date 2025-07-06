import { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function CadastroPessoa({ navigation }) {
  const [categoria, setCategoria] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Nome:</Text>
        <Input
          style={styles.input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />

        <Text style={styles.label}>Categoria:</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              categoria === 'idoso' && styles.radioSelected,
            ]}
            onPress={() => setCategoria('idoso')}
          >
            <Text style={[styles.radioText, categoria === 'idoso' && { color: "#fff" },]}>Idoso</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.radioButton,
              categoria === 'doador' && styles.radioSelected,
            ]}
            onPress={() => setCategoria('doador')}
          >
            <Text style={[styles.radioText, categoria === 'doador' && { color: '#fff' },]}>Doador</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Data de nascimento:</Text>
        <Input
          style={styles.input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />

        <Text style={styles.label}>Nome da mãe:</Text>
        <Input
          style={styles.input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />

        <Text style={styles.label}>CPF:</Text>
        <Input
          style={styles.input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
      </ScrollView>

      <Button title="Cadastrar" buttonStyle={styles.button} titleStyle={{ fontWeight: 'bold', fontSize: 16 }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: "#fff",
    color: "black",
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
  button: {
    backgroundColor: '#2CA8E8',
    width: 280,
    height: 48,
    borderRadius: 50,
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    margin: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#2CA8E8',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  radioButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#2CA8E8',
    borderRadius: 20,
    width: 100,
    alignItems: 'center',
  },
  radioText: {
    color: '#2CA8E8',
  },
  radioSelected: {
    color: '#fff',
    backgroundColor: '#2CA8E8',
  },
});