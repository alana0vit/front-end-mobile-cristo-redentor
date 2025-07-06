import { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList} from 'react-native';
import { Icon, SearchBar} from 'react-native-elements';
import axios from 'axios';
import { logout } from '../services/authService';

// ESTA LISTA ESTÁ AQUI TEMPORARIAMENTE PARA FINS DE TESTE, ATÉ QUE SEJA FEITA A REQUISIÇÃO PRO BACK-END COM A VERDADEIRA LISTA DE IDOSOS //

const list = [
  { id: '1', name: 'Clonazepam', quantity: 15, necessidade: "Sim", categoria: 'remedio' },
  { id: '2', name: 'Fralda geriátrica', quantity: 8, necessidade: "Não", categoria: 'produto' },
  { id: '3', name: 'Shampoo', quantity: 0, necessidade: "Sim", categoria: 'produto' },
  { id: '4', name: 'Vassoura', quantity: 2, necessidade: "Não", categoria: 'produto' },
  { id: '5', name: 'Dipirona', quantity: 4, necessidade: "Sim", categoria: 'remedio' },
  { id: '6', name: 'Creme dental', quantity: 6, necessidade: "Não", categoria: 'produto' },
  { id: '7', name: 'Luva', quantity: 0, necessidade: "Sim", categoria: 'produto' },
  { id: '8', name: 'Losartana', quantity: 9, necessidade: "Não", categoria: 'remedio' },
  { id: '9', name: 'Desifetante', quantity: 1, necessidade: "Sim", categoria: 'produto' },
  { id: '10', name: 'Sabão', quantity: 11, necessidade: "Não", categoria: 'produto' },
];

// EXCLUIR ESTA LISTA ASSIM QUE A CONEXÃO COM O BACK-END ESTIVER ATIVA //

export default function Stock({ navigation }) {
  const [search, setSearch] = useState('');
  const [stock, setStock] = useState(list);

  // Filtro da barra de pesquisa
  const filteredList = stock.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Renderizando a lista
  const renderItem = ({ item }) => {
    const isLow = item.quantity <= 5;
    const isZero = item.quantity === 0;

    return (
      <View style={styles.card}>
        <View style={{ flex: 1 }}>
          <Text style={styles.itemName} onPress={() => navigation.navigate('Item', {
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            necessidade: item.necessidade,
            categoria: item.categoria})}>{item.name}</Text>
          <Text style={[
            styles.itemQuantity,
            isZero && { color: 'red' },
            isLow && !isZero && { color: 'orange' }
          ]}>
            Quantidade: {item.quantity}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBar
          placeholder="Pesquisar..."
          onChangeText={setSearch}
          value={search}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInput}
          lightTheme
          round
        />

        <FlatList
          data={filteredList}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 25 }}
        />
      </ScrollView>

      <View style={styles.bottomBar}>
        <Icon name="home" type="feather" color="#fff" onPress={() => navigation.navigate('Home')} />
        <Icon name="box" type="feather" color="#fff" onPress={() => navigation.navigate('Estoque')} />
        <Icon name="log-out" type="feather" color="#fff" onPress={async () => {
          await logout();
          navigation.replace('Login');
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#2CA8E8',
    width: '100%',
    height: 64,
  },
  searchContainer: {
    backgroundColor: '#F7F7F7',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    flex: 1,
    marginLeft: 10,
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 35,
  },
});