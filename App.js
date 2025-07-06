import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Login from './screen/login.js';
import RecuperarSenha from './screen/recoverPass.js';
import CadastroAdmin from './screen/adminRegistry.js';
import Home from './screen/home.js';
import PerfilPessoa from './screen/personProfile.js';
import CadastroPessoa from './screen/personRegistry.js';
import EditarPessoa from './screen/personEdit.js';
import Loading from './screen/loading.js';
import Stock from './screen/stock.js';
import PerfilItem from './screen/stockProfile.js';
import CadastroItem from './screen/stockRegistry.js';
import EditarEstoque from './screen/stockEdit.js';
import EntradaSaida from './screen/inOutStock.js';
import Historico from './screen/inOutHistory.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />

        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

        <Stack.Screen name="Cadastrar Admin" component={CadastroAdmin} options={{
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2CA8E8',
          },
        }} />

        <Stack.Screen name="Recuperar Senha" component={RecuperarSenha} options={{
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2CA8E8',
          },
        }} />

        <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2CA8E8'
          },
          headerRight: () => (
            <Ionicons
              name='add'
              size={24}
              color="#fff"
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('Cadastrar Pessoa')}
            />
          ),
        })} />

        <Stack.Screen name="Perfil" component={PerfilPessoa} options={{
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2CA8E8',
          },
        }} />

        <Stack.Screen name="Cadastrar Pessoa" component={CadastroPessoa} options={{
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2CA8E8',
          },
        }} />

        <Stack.Screen name="Editar Perfil" component={EditarPessoa} options={{
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2CA8E8',
          },
        }} />

        <Stack.Screen name="Estoque" component={Stock} options={({ navigation }) => ({
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2CA8E8',
          },
          headerRight: () => (
            <Ionicons
              name='add'
              size={24}
              color="#fff"
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('Cadastrar Item')}
            />
          ),
        })} />

        <Stack.Screen name="Item" component={PerfilItem} options={{
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2CA8E8',
          },
        }} />

        <Stack.Screen name="Cadastrar Item" component={CadastroItem} options={{
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2CA8E8',
          },
        }} />

        <Stack.Screen name="Editar Item" component={EditarEstoque} options={{
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2CA8E8',
          },
        }} />

        <Stack.Screen name="Alterar Estoque" component={EntradaSaida} options={{
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2CA8E8',
          },
        }} />

        <Stack.Screen name="Historico" component={Historico} options={{
          headerTitleAlign: 'left',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2CA8E8',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}