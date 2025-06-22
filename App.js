import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Login from './screen/login.js';
import Home from './screen/home.js';
import Cadastro from './screen/registry.js';
import Loading from './screen/loading.js';
import Stock from './screen/stock.js';

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
              onPress={() => navigation.navigate('Cadastro')}
            />
          ),
        })} />

        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerTitleAlign: 'left' }} />

        <Stack.Screen name="Stock" component={Stock} options={{ headerTitleAlign: 'left' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}