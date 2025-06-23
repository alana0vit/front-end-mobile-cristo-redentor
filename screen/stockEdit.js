import React, { useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function EditarEstoque({ navigation }) {
    const [nome, setNome] = useState('');
    const [necessidade, setNecessidade] = useState('');
    const [categoria, setCategoria] = useState('');

    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                placeholder='Alterar nome'
                inputContainerStyle={{ borderBottomWidth: 0 }}
            />

            <Input
                style={styles.input}
                placeholder='Alterar necessidade'
                inputContainerStyle={{ borderBottomWidth: 0 }}
            />

            <Input
                style={styles.input}
                placeholder='Alterar categoria'
                inputContainerStyle={{ borderBottomWidth: 0 }}
            />

            <Button title="Salvar" buttonStyle={styles.buttonBlue} />
            <Button title="Excluír" buttonStyle={styles.buttonRed} />
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
    input: {
        backgroundColor: "#fff",
        color: "black",
        marginBottom: 30,
        width: 320,
        height: 48,
        borderRadius: 50,
        padding: 10,
    },
    buttonBlue: {
        backgroundColor: '#2CA8E8',
        width: 280,
        height: 48,
        borderRadius: 50,
        marginBottom: 5,
    },
    buttonRed: {
        backgroundColor: '#e8522c',
        width: 280,
        height: 48,
        borderRadius: 50,
    },
});