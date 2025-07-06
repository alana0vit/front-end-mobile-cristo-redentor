import { View, StyleSheet, Text } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

export default function PerfilItem() {
    const navigation = useNavigation();
    const route = useRoute();
    const { id, name, quantity, necessidade, categoria } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons
                    name='document-text'
                    size={24}
                    color="#fff"
                    style={{ marginRight: 15 }}
                    onPress={() => navigation.navigate('Historico', { itemId: id })}
                />
            ),
        });
    }, [navigation, id]);

    const getAvatarIcon = (item) => {
        if (item === 'remedio') {
            return 'bottle-tonic-plus';
        } else if (item === 'produto') {
            return 'broom';
        } else {
            return 'gray';
        }
    };

    return (
        <View style={styles.container}>
            <Avatar
                rounded
                icon={{ name: getAvatarIcon(categoria), type: 'material-community' }}
                containerStyle={styles.avatar}
                size="xlarge"
            />

            <View style={styles.card}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.infoText}>Quantidade: {quantity}</Text>
                <Text style={styles.infoText}>Necesssário: {necessidade}</Text>
                <Text style={styles.infoText}>Categoria: {categoria}</Text>
            </View>

            <View style={styles.row}>
                <Button
                    title="Adicionar"
                    buttonStyle={styles.buttonOutline}
                    titleStyle={styles.buttonOutlineText}
                    onPress={() => navigation.navigate('Alterar Estoque', {
                        tipo: 'entrada',
                        item: { id, name, quantity, categoria, necessidade }
                    })}
                    containerStyle={styles.buttonHalf}
                />

                <Button
                    title="Retirar"
                    buttonStyle={styles.buttonOutline}
                    titleStyle={styles.buttonOutlineText}
                    onPress={() => navigation.navigate('Alterar Estoque', {
                        tipo: 'saida',
                        item: { id, name, quantity, categoria, necessidade }
                    })}
                    containerStyle={styles.buttonHalf}
                />
            </View>


            <Button
                title="Editar"
                buttonStyle={styles.button}
                onPress={() => navigation.navigate('Editar Item')}
                titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
            />

            <Button
                title="Excluír"
                buttonStyle={styles.buttonRed}
                titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
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
        backgroundColor: "#666",
        marginBottom: 25,
    },
    card: {
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
        alignItems: 'center',
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
        marginVertical: 4,
        textAlign: 'center',
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
    },
    buttonOutline: {
        backgroundColor: '#F7F7F7',
        height: 48,
        borderRadius: 50,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: "#7ac4e9",
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 10,
        alignItems: 'center',
    },

    buttonHalf: {
        width: '44%',
    },

    buttonOutlineText: {
        color: '#7ac4e9',
        fontWeight: 'bold',
    },
});