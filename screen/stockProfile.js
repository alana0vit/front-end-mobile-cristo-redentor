import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

export default function PerfilItem({ navigation }) {
    return (
        <View style={styles.container}>
            <Avatar
                rounded
                containerStyle={styles.avatar}
                size="xlarge"
            />

            <View style={styles.infoBox}>
                <Text style={styles.name}>Vassoura</Text>
                <Text style={styles.infoText}>Quantidade: 7</Text>
                <Text style={styles.infoText}>Necesssário: Sim</Text>
                <Text style={styles.infoText}>Categoria: Produto</Text>
            </View>

            <Button 
                title="Editar" 
                buttonStyle={styles.button} 
                onPress={() => navigation.navigate('Editar Item')} 
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
        backgroundColor: '#2ce8ca',
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