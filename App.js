import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Login from './screen/login.js';
import Home from './screen/home.js';
import PerfilIdoso from './screen/elderlyProfile.js';
import CadastroIdoso from './screen/elderlyRegistry.js';
import EditarIdoso from './screen/elderlyEdit.js';
import Loading from './screen/loading.js';
import Stock from './screen/stock.js';
import PerfilItem from './screen/stockProfile.js';
import CadastroItem from './screen/stockRegistry.js';
import EditarEstoque from './screen/stockEdit.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loading'>
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />

        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

        <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
          headerTitleAlign: 'left',
          headerRight: () => (
            <Ionicons
              name='add'
              size={24}
              color="black"
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('Cadastrar Idoso')}
            />
          ),
        })} />

        <Stack.Screen name="Idoso" component={PerfilIdoso} options={{ headerTitleAlign: 'left' }} />

        <Stack.Screen name="Cadastrar Idoso" component={CadastroIdoso} options={{ headerTitleAlign: 'left' }} />

        <Stack.Screen name="Editar Idoso" component={EditarIdoso} options={{ headerTitleAlign: 'left' }} />

        <Stack.Screen name="Estoque" component={Stock} options={({ navigation }) => ({
          headerTitleAlign: 'left',
          headerRight: () => (
            <Ionicons
              name='add'
              size={24}
              color="black"
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('Cadastrar Item')}
            />
          ),
        })} />

        <Stack.Screen name="Item" component={PerfilItem} options={{ headerTitleAlign: 'left' }} />

        <Stack.Screen name="Cadastrar Item" component={CadastroItem} options={{ headerTitleAlign: 'left' }} />

        <Stack.Screen name="Editar Item" component={EditarEstoque} options={{ headerTitleAlign: 'left' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}