import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon, ListItem, Avatar, SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-web';
import { logout } from '../services/authService';

// ESTA LISTA ESTÁ AQUI TEMPORARIAMENTE PARA FINS DE TESTE, ATÉ QUE SEJA FEITA A REQUISIÇÃO PRO BACK-END COM A VERDADEIRA LISTA DE IDOSOS //

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'PK',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'CG',
  },
  {
    name: 'Amy Farha',
    avatar_url: 'KN',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'DT',
  },
  {
    name: 'Amy Farha',
    avatar_url: 'JG',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'JC',
  },
  {
    name: 'Amy Farha',
    avatar_url: 'PK',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'UY',
  },
  {
    name: 'Amy Farha',
    avatar_url: 'HJ',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'MD',
  },
]

// EXCLUIR ESTA LISTA ASSIM QUE A CONEXÃO COM O BACK-END ESTIVER ATIVA //

export default function Home({ navigation }) {
  const [search, setSearch] = React.useState('');
  const [data, setData] = React.useState(list);

  const filteredList = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert('Sessão expirada', 'Você precisa fazer login novamente.');
        navigation.replace('Login');
      }
    };

    checkAuth();
  }, []);

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

        <View>
          {
            filteredList.map((l, i) => (
              <ListItem key={i} bottomDivider onPress={() => navigation.navigate('Idoso')}>
                <Avatar
                  rounded
                  title={l.avatar_url}
                  containerStyle={{ backgroundColor: '#666666' }}
                  size="small"
                />
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))
          }
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <Icon name="home" type="feather" color="#fff" onPress={() => navigation.navigate('Home')} />
        <Icon name="box" type="feather" color="#fff" onPress={() => navigation.navigate('Stock')} />
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
    justifyContent: 'center',
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
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 35,
  },
});