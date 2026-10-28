import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
     
      <View style={styles.headerContainer}>
        <Text style={styles.tituloEmpresa}>SportTech Store</Text>
        <Text style={styles.slogan}>O seu estilo em movimento</Text>
      </View>

      
      <View style={styles.cardDescricao}>
        <Text style={styles.descricao}>
          Bem-vindo à SportTech Store! Somos especialistas em calçados, roupas e acessórios esportivos de alta qualidade com os melhores preços do mercado e envio rápido para todo o Brasil.
        </Text>
      </View>

   
      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Produtos')}
        >
          <Ionicons name="cart-outline" size={24} color="#000" style={styles.iconeBotao} />
          <Text style={styles.textoBotao}>Ver Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, styles.botaoContato]}
          onPress={() => navigation.navigate('Contato')}
        >
          <Ionicons name="call-outline" size={25} color="#000" style={styles.iconeBotao} />
          <Text style={styles.textoBotao}>Contato</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
  },
  content: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  tituloEmpresa: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#0000',
  },
  slogan: {
    fontSize: 20,
    color: '#666',
    marginTop: 6,
  },
  cardDescricao: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  descricao: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    lineHeight: 22,
  },
  botoesContainer: {
    width: '100%',
    gap: 12,
  },
  botao: {
    flexDirection: 'row',
    backgroundColor: '#ff2600',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoContato: {
    backgroundColor: '#ff2600',
  },
  iconeBotao: {
    marginRight: 8,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});