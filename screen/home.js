import { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon, ListItem, Avatar, SearchBar } from 'react-native-elements';
import { logout } from '../services/authService';

// ESTA LISTA ESTÁ AQUI TEMPORARIAMENTE PARA FINS DE TESTE, ATÉ QUE SEJA FEITA A REQUISIÇÃO PRO BACK-END COM A VERDADEIRA LISTA DE IDOSOS //

const list = [
  {
    id: 1,
    name: 'João Silva',
    iniciais: 'JS',
    nascimento: '1990-08-25',
    cpf: '112.233.445-66',
    mae: 'Ana Silva',
  },
  {
    id: 2,
    name: 'Ana Oliveira',
    iniciais: 'AO',
    nascimento: '1988-05-12',
    cpf: '223.344.556-77',
    mae: 'Sônia Oliveira',
  },
  {
    id: 3,
    name: 'Carlos Souza',
    iniciais: 'CS',
    nascimento: '1995-02-10',
    cpf: '334.455.667-88',
    mae: 'Tereza Souza',
  },
  {
    id: 4,
    name: 'Fernanda Costa',
    iniciais: 'FC',
    nascimento: '1992-09-15',
    cpf: '445.566.778-99',
    mae: 'Mariana Costa',
  },
  {
    id: 5,
    name: 'Roberto Pereira',
    iniciais: 'RP',
    nascimento: '1983-11-05',
    cpf: '556.677.889-00',
    mae: 'Luciana Pereira',
  }
];

// EXCLUIR ESTA LISTA ASSIM QUE A CONEXÃO COM O BACK-END ESTIVER ATIVA //

export default function Home({ navigation }) {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(list);

  const filteredList = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  /* useEffect(() => {
     const checkAuth = async () => {
       const token = await AsyncStorage.getItem('token');
       if (!token) {
         Alert.alert('Sessão expirada', 'Você precisa fazer login novamente.');
         navigation.replace('Login');
       }
     };
 
     checkAuth();
   }, []); */

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Avatar
        rounded
        title={item.iniciais}
        containerStyle={{ backgroundColor: '#666' }}
        size="small"
      />
      <View style={{ marginLeft: 12, flex: 1 }}>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <Icon
        name="chevron-right"
        type="feather"
        color="#ccc"
        onPress={() => navigation.navigate('Idoso', {
          id: item.id,
          name: item.name,
          iniciais: item.iniciais,
          nascimento: item.nascimento,
          cpf: item.cpf,
          mae: item.mae})}
      />
    </View>
  );

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
    marginVertical: 7,
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