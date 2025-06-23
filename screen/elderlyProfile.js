import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

export default function PerfilIdoso({ navigation }) {
    return (
        <View style={styles.container}>
            <Avatar
                rounded
                title='AF'
                containerStyle={styles.avatar}
                size="xlarge"
            />

            <View style={styles.infoBox}>
                <Text style={styles.name}>Amy Farha</Text>
                <Text style={styles.infoText}>Nascimento: 23/05/1962</Text>
                <Text style={styles.infoText}>Mãe: Teresa Maria de Souza</Text>
                <Text style={styles.infoText}>CPF: 111.222.333-44</Text>
            </View>

            <Button 
                title="Editar" 
                buttonStyle={styles.button} 
                onPress={() => navigation.navigate('Editar Idoso')} 
            />
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
    avatar: {
        backgroundColor: '#666666',
        marginBottom: 25,
    },
    infoBox: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 16,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
        marginBottom: 30,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#333',
    },
    infoText: {
        fontSize: 16,
        color: '#666',
        marginVertical: 2,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#2CA8E8',
        width: 280,
        height: 48,
        borderRadius: 50,
    },
});