import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios'; //axios.get(`http://localhost:8000/historico/${item.id}`)


export default function Historico({ route, navigation }) {
    const { itemId } = route.params;
    const [historico, setHistorico] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/historico/${itemId}`);
                setHistorico(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Histórico de Movimentações</Text>
            {historico.map((mov, index) => (
                <View key={index} style={styles.card}>
                    <Text style={{ fontWeight: 'bold' }}>
                        {mov.tipo === 'entrada' ? '🔼 Entrada' : '🔽 Saída'}
                    </Text>
                    <Text>Quantidade: {mov.quantidade}</Text>
                    <Text>{mov.tipo === 'entrada' ? 'Doador' : 'Idoso'}: {mov.nomePessoa}</Text>
                    {mov.data && <Text>Data: {new Date(mov.data).toLocaleString()}</Text>}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2CA8E8',
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
    }
});