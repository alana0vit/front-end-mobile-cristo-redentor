import { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function CadastroAdmin({navigation}) {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [crf, setCrf] = useState('');

    const salvarAdmin = () => {
        axios.post('http://localhost:8000/auth/register', {
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            email: email,
            crf: crf
        }).then(function (response) {
            console.log("Administrador cadastrado", response.data);
            navigation.navigate('Login');
        }).catch(function (error) {
            console.log("Erro ao tentar cadastrar o administrador", error);
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label}>Nome do farmacêutico:</Text>
                <Input
                    style={styles.input}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    value={nome} onChange={setNome}
                />

                <Text style={styles.label}>CPF do farmacêutico:</Text>
                <Input
                    style={styles.input}
                    inputContainerStyle={{ borderBottomWidth: 0 }} value={cpf} onChange={setCpf}
                />

                <Text style={styles.label}>Telefone do farmacêutico:</Text>
                <Input
                    style={styles.input}
                    inputContainerStyle={{ borderBottomWidth: 0 }} value={telefone} onChange={setTelefone}
                />

                <Text style={styles.label}>E-mail do farmacêutico:</Text>
                <Input
                    style={styles.input}
                    inputContainerStyle={{ borderBottomWidth: 0 }} value={email} onChange={setEmail}
                />

                <Text style={styles.label}>CRF do farmacêutico:</Text>
                <Input
                    style={styles.input}
                    inputContainerStyle={{ borderBottomWidth: 0 }} value={crf} onChange={setCrf}
                />
            </ScrollView>

            <Button title="Cadastrar" buttonStyle={styles.button} onPress={salvarAdmin}/>
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
        marginBottom: 20,
    },
    label: {
        alignSelf: 'flex-start',
        margin: 10,
        fontSize: 15,
        fontWeight: '500',
        color: '#2CA8E8',
    },
});