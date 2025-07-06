import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function RecuperarSenha() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label}>Digite seu e-mail:</Text>
                <Input
                    style={styles.input}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                />

                <Text style={styles.nota}>* Nota: o e-mail precisa ser o mesmo dado no cadastro. Ao apertar no botão "Recuperar", você receberá um e-mail com todas as instruções. Faça o que se pede e recupere seu acesso.</Text>
            </ScrollView>

            <Button title="Recuperar" buttonStyle={styles.button} titleStyle={{ fontWeight: 'bold', fontSize: 16 }}/>
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
    nota: {
        textAlign: 'justify',
        margin: 20,
    },
});