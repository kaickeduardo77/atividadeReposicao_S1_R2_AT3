import { View, Text, Image, Button, Alert, ScrollView } from 'react-native';
import { useState } from 'react';

export default function Produtos() {
  const [quantidades, setQuantidades] = useState({
    Tênis: 1,
    Camiseta: 1,
    Boné: 1,
    Mochila: 1,
    Relógio: 1,
  });

 const produtos = [
    {
      nome: 'Tênis nike',
      preco: '199,90',
      pix: '179,91',
      imagem: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300', 
    },
    {
      nome: 'Camiseta nike',
      preco: '79,90',
      pix: '71,91',
      imagem: 'https://cdnv2.moovin.com.br/iriacalcados/imagens/produtos/det/camiseta-nike-dr13430010-preto-ee25423ae256778cf2b11e7c2bfbeaa3.png', 
    },
    {
      nome: 'Boné nike',
      preco: '49,90',
      pix: '44,91',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx50jOX8RYUq9llhPrm8HE8wkYTRG2ION710Ab3O-f2A&s=10',
    },
    {
      nome: 'Mochila nike',
      preco: '129,90',
      pix: '116,91',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1-Ma4FE8pMSgSUtOaxxlYoVtoMPd5ehkx84yF8t11Q&s=10', 
    },
    {
      nome: 'Relógio Rolex',
      preco: '10.090',
      pix: '9580,91',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yV_inZBBW_Ud39g6388J40sSeHfp8JYb0y7_LRNcNQ&s=10', 
    },
  ];

  const alterarQtd = (nome, delta) => {
    setQuantidades({
      ...quantidades,
      [nome]: Math.max(1, (quantidades[nome] || 1) + delta),
    });
  };

  return (
    <ScrollView style={{ padding: 15 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>
        Nossos Produtos
      </Text>

      {produtos.map((produto) => (
        <View
          key={produto.nome}
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            padding: 10,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 8,
          }}
        >
       
          <Image
            source={{ uri: produto.imagem }}
            style={{ width: 80, height: 80, borderRadius: 5, marginRight: 10 }}
          />

        
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{produto.nome}</Text>
            <Text>Preço normal: R$ {produto.preco}</Text>
            <Text>Preço no PIX: R$ {produto.pix}</Text>

     
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
              <View style={{ width: 35 }}>
                <Button title="-" onPress={() => alterarQtd(produto.nome, -1)} />
              </View>

              <Text style={{ marginHorizontal: 10 }}>
                Qtd: {quantidades[produto.nome] || 1}
              </Text>

              <View style={{ width: 35 }}>
                <Button title="+" onPress={() => alterarQtd(produto.nome, 1)} />
              </View>
            </View>

            
            <Button
              title="Adicionar ao carrinho"
              onPress={() => Alert.alert('Aviso', 'Produto adicionado ao carrinho!')}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}