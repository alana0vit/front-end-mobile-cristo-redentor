import React, { useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function EditarIdoso({ navigation }) {
    const [nome, setNome] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [nomeMae, setNomeMae] = useState('');
    const [nomecpf, setCpf] = useState('');

    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                placeholder='Alterar nome'
                inputContainerStyle={{ borderBottomWidth: 0 }}
            />

            <Input
                style={styles.input}
                placeholder='Alterar as iniciais'
                inputContainerStyle={{ borderBottomWidth: 0 }}
            />

            <Input
                style={styles.input}
                placeholder='Alterar data de nascimento'
                inputContainerStyle={{ borderBottomWidth: 0 }}
            />

            <Input
                style={styles.input}
                placeholder='Alterar nome da mãe'
                inputContainerStyle={{ borderBottomWidth: 0 }}
            />

            <Input
                style={styles.input}
                placeholder='Alterar CPF'
                inputContainerStyle={{ borderBottomWidth: 0 }}
            />

            <Button title="Salvar" buttonStyle={styles.buttonBlue} />
            <Button title="Declarar óbito" buttonStyle={styles.buttonRed} />
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