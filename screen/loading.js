import { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Loading({ navigation }) {
  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.replace('Home');
      } else {
        navigation.replace('Login');
      }
    };

    checkLogin();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2CA8E8" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});