import { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function EditarIdoso({ navigation }) {
    const [nome, setNome] = useState('');
    const [iniciais, setIniciais] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [nomeMae, setNomeMae] = useState('');
    const [cpf, setCpf] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label}>Novo nome do idoso:</Text>
                <Input
                    style={styles.input}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    value={nome} onChange={setNome}
                />
                <Text style={styles.label}>Novas inicias:</Text>
                <Input
                    style={styles.input}
                    inputContainerStyle={{ borderBottomWidth: 0 }} value={iniciais} onChange={setIniciais}
                />
                <Text style={styles.label}>Data de nascimento correta:</Text>
                <Input
                    style={styles.input}
                    inputContainerStyle={{ borderBottomWidth: 0 }} value={dataNasc} onChange={setDataNasc}
                />
                <Text style={styles.label}>Nome correto da mãe:</Text>
                <Input
                    style={styles.input}
                    inputContainerStyle={{ borderBottomWidth: 0 }} value={nomeMae} onChange={setNomeMae}
                />

                <Text style={styles.label}>CPF correto:</Text>
                <Input
                    style={styles.input}
                    inputContainerStyle={{ borderBottomWidth: 0 }} value={cpf} onChange={setCpf}
                />
            </ScrollView>

            <Button title="Salvar" buttonStyle={styles.button} />
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
    label: {
        alignSelf: 'flex-start',
        margin: 10,
        fontSize: 15,
        fontWeight: '500',
        color: '#2CA8E8',
    },
    buttonRed: {
        backgroundColor: '#e8522c',
        width: 280,
        height: 48,
        borderRadius: 50,
        marginBottom: 20,
    },
});