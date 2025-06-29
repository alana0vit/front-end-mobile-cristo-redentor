import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList, TextInput } from 'react-native';
import { Icon, SearchBar, Button } from 'react-native-elements';
import axios from 'axios';
import { logout } from '../services/authService';

// ESTA LISTA ESTÁ AQUI TEMPORARIAMENTE PARA FINS DE TESTE, ATÉ QUE SEJA FEITA A REQUISIÇÃO PRO BACK-END COM A VERDADEIRA LISTA DE IDOSOS //

const list = [
  { id: '1', name: 'Clonazepam', quantity: 15, necessidade: "Sim", categoria: 'Rémedio' },
  { id: '2', name: 'Fralda geriátrica', quantity: 8, necessidade: "Não", categoria: 'Produto' },
  { id: '3', name: 'Shampoo', quantity: 0, necessidade: "Sim", categoria: 'Produto' },
  { id: '4', name: 'Vassoura', quantity: 2, necessidade: "Não", categoria: 'Produto' },
  { id: '5', name: 'Dipirona', quantity: 4, necessidade: "Sim", categoria: 'Rémedio' },
  { id: '6', name: 'Creme dental', quantity: 6, necessidade: "Não", categoria: 'Produto' },
  { id: '7', name: 'Luva', quantity: 0, necessidade: "Sim", categoria: 'Produto' },
  { id: '8', name: 'Losartana', quantity: 9, necessidade: "Não", categoria: 'Rémedio' },
  { id: '9', name: 'Desifetante', quantity: 1, necessidade: "Sim", categoria: 'Produto' },
  { id: '10', name: 'Sabão', quantity: 11, necessidade: "Não", categoria: 'Produto' },
];

// EXCLUIR ESTA LISTA ASSIM QUE A CONEXÃO COM O BACK-END ESTIVER ATIVA //

export default function Stock({ navigation }) {
  const [search, setSearch] = React.useState('');
  const [stock, setStock] = useState(list);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [actionType, setActionType] = useState(null); // 'add' ou 'remove'
  const [quantityInput, setQuantityInput] = useState('');

  // Filtro da barra de pesquisa
  const filteredList = stock.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const openQuantityModal = (item, type) => {
    setSelectedItem(item);
    setActionType(type);
    setQuantityInput('');
    setModalVisible(true);
  };

  const confirmQuantityChange = async () => {
    const qty = parseInt(quantityInput);
    if (isNaN(qty) || qty <= 0) {
      alert('Digite uma quantidade válida');
      return;
    }

    try {
      const endpoint =
        actionType === 'add' ? '/estoque/entrada' : '/estoque/saida';

      await axios.post(endpoint, {
        id: selectedItem.id,
        quantidade: qty,
      });

      // Atualiza localmente após sucesso
      setStock((prev) =>
        prev.map((item) => {
          if (item.id === selectedItem.id) {
            const novaQuantidade =
              actionType === 'add'
                ? item.quantity + qty
                : Math.max(item.quantity - qty, 0);

            return { ...item, quantity: novaQuantidade };
          }
          return item;
        })
      );

      setModalVisible(false);
    } catch (error) {
      console.error('Erro ao atualizar estoque:', error);
      alert('Erro ao atualizar o estoque. Verifique a conexão ou tente novamente.');
    }
  };

  // Renderizando a lista
  const renderItem = ({ item }) => {
    const isLow = item.quantity <= 5;
    const isZero = item.quantity === 0;

    return (
      <View style={styles.card}>
        <View style={{ flex: 1 }}>
          <Text style={styles.itemName} onPress={() => navigation.navigate('Item', {
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            necessidade: item.necessidade,
            categoria: item.categoria})}>{item.name}</Text>
          <Text style={[
            styles.itemQuantity,
            isZero && { color: 'red' },
            isLow && !isZero && { color: 'orange' }
          ]}>
            Quantidade: {item.quantity}
          </Text>
        </View>
        <Button
          title="➖"
          type="outline"
          onPress={() => openQuantityModal(item, 'remove')}
          buttonStyle={styles.smallBtn}
          titleStyle={styles.smallTitle}
        />
        <Button
          title="➕"
          type="outline"
          onPress={() => openQuantityModal(item, 'add')}
          buttonStyle={styles.smallBtn}
          titleStyle={styles.smallTitle}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBar
          placeholder="Pesquisar..."
          onChangeText={setSearch}
          value={search}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInput}
          lightTheme
          round
        />

        <FlatList
          data={filteredList}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 25 }}
        />
      </ScrollView>

      <View style={styles.bottomBar}>
        <Icon name="home" type="feather" color="#fff" onPress={() => navigation.navigate('Home')} />
        <Icon name="box" type="feather" color="#fff" onPress={() => navigation.navigate('Estoque')} />
        <Icon name="log-out" type="feather" color="#fff" onPress={async () => {
          await logout();
          navigation.replace('Login');
        }} />
      </View>

      {/* Modal Simples */}
      {modalVisible && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {actionType === 'add' ? 'Adicionar' : 'Retirar'} quantidade
            </Text>
            <TextInput
              placeholder="Digite a quantidade"
              value={quantityInput}
              onChangeText={setQuantityInput}
              keyboardType="numeric"
              style={styles.modalInput}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              <Button title="Confirmar" onPress={confirmQuantityChange} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  smallBtn: {
    borderColor: '#2CA8E8',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 36,
    marginHorizontal: 4,
  },
  smallTitle: {
    color: '#2CA8E8',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#2CA8E8',
    width: '100%',
    height: 64,
  },
  searchContainer: {
    backgroundColor: '#F7F7F7',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    flex: 1,
    marginLeft: 10,
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 35,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
});