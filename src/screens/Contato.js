import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Contato() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Contato - SportTech Store</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Telefone</Text>
        <Text style={styles.valor}>(19) 3333-4444</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>WhatsApp</Text>
        <Text style={styles.valor}>(19) 99999-9999</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Endereço</Text>
        <Text style={styles.valor}>Campinas - SP</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>CNPJ</Text>
        <Text style={styles.valor}>23.410.936/0001-96</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Horário</Text>
        <Text style={styles.valor}>Segunda a Sexta, das 9h às 18h</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.valor}>contato@sporttechstore.com.br</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F6F9',
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  label: {
    fontSize: 12,
    color: '#888',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  valor: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
});