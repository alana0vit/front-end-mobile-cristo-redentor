import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function EditarEstoque({ navigation }) {
    const [nome, setNome] = useState('');
    const [necessidade, setNecessidade] = useState('');
    const [categoria, setCategoria] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label}>Novo nome do item:</Text>
                <Input
                    style={styles.input}
                    inputContainerStyle={{ borderBottomWidth: 0 }} value={nome} onChange={setNome}
                />

                <Text style={styles.label}>Necessario?</Text>
                <View style={styles.radioContainer}>
                    <TouchableOpacity
                        style={[
                            styles.radioButton,
                            necessidade === 'sim' && styles.radioSelected,
                        ]}
                        onPress={() => setNecessidade('sim')}
                    >
                        <Text style={[styles.radioText, necessidade === 'sim' && { color: "#fff" },]}>Sim</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.radioButton,
                            necessidade === 'nao' && styles.radioSelected,
                        ]}
                        onPress={() => setNecessidade('nao')}
                    >
                        <Text style={[styles.radioText, necessidade === 'nao' && { color: '#fff' },]}>Não</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>Categoria atual:</Text>
                <View style={styles.radioContainer}>
                    <TouchableOpacity
                        style={[
                            styles.radioButton,
                            categoria === 'remedio' && styles.radioSelected,
                        ]}
                        onPress={() => setCategoria('remedio')}
                    >
                        <Text style={[styles.radioText, categoria === 'remedio' && { color: "#fff" },]}>Remédio</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.radioButton,
                            categoria === 'produto' && styles.radioSelected,
                        ]}
                        onPress={() => setCategoria('produto')}
                    >
                        <Text style={[styles.radioText, categoria === 'produto' && { color: '#fff' },]}>Produto</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Button title="Salvar" buttonStyle={styles.button} />
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
        padding: 20,
    },
    input: {
        backgroundColor: "#fff",
        color: "black",
        width: 320,
        height: 48,
        borderRadius: 50,
        padding: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 2,
        borderColor: "#7ac4e9",

        // Sombras para iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // Sombra para Android
        elevation: 4,
    },
    button: {
        backgroundColor: '#2CA8E8',
        width: 280,
        height: 48,
        borderRadius: 50,
        marginBottom: 10,
    },
    buttonRed: {
        backgroundColor: '#e8522c',
        width: 280,
        height: 48,
        borderRadius: 50,
        marginBottom: 20,
    },
    label: {
        alignSelf: 'flex-start',
        margin: 10,
        fontSize: 15,
        fontWeight: '500',
        color: '#2CA8E8',
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    radioButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#2CA8E8',
        borderRadius: 20,
        width: 100,
        alignItems: 'center',
    },
    radioText: {
        color: '#2CA8E8',
    },
    radioSelected: {
        color: '#fff',
        backgroundColor: '#2CA8E8',
    },
});