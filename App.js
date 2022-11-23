import { StatusBar } from 'expo-status-bar';
import { Modal, Text, View, TouchableOpacity, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useState } from 'react';
import {styles} from './src/css';


export default function App() {
  
  const [cep, setCep] = useState({})
  const [visivel,setVisivel] = useState(false)

  const getCep = (cepNumbers) => {
    
    const endpoint = `https://viacep.com.br/ws/${cepNumbers}/json`;
    fetch(endpoint)
      .then(resposta => resposta.json())
      .then(json => {
        const response = {
            nome: json.name,
            cep: json.cep,
            logradouro: json.logradouro,
            complemento: json.complemento,
            localidade: json.localidade,
            uf: json.uf,
            ddd: json.ddd
        };
        setVisivel(true)
        setCep(response);

      })
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados');
      });
  }


  return (

      <View style={styles.container}>
        <Text style={styles.cabecalho}>Buscador de CEP</Text>

        <TextInput
          style={styles.input}
          placeholder="Informe o Cep"
          keyboardType='numeric'
          onChangeText={texto => setCep(texto)}
        >
        </TextInput>

        <TouchableOpacity onPress={() => getCep(cep)} style={styles.botao}>
            <Icon name="search" size={35} color="#000"/>
        </TouchableOpacity>

        <View style={styles.areaCep}>
          <Modal
          animationType='slide'
          transparent={true}
          visible={visivel}
          >
            
          <View style={styles.modal}>
            <Text  style={styles.info}>Cep: {cep.cep}</Text>
            <Text style={styles.info}>Logradouro: {cep.logradouro}</Text>
            <Text style={styles.info}>Complemento: {cep.complemento}</Text>
            <Text style={styles.info}>Localidade: {cep.localidade}</Text>
            <Text style={styles.info}>UF: {cep.uf}</Text>
            <Text style={styles.info}>DDD: {cep.ddd}</Text>
            <Button title={'Fechar'} style={styles.botaoModal} onPress={() => setVisivel(false)}/>
          </View>

          </Modal>

      </View>


      <StatusBar style="auto" />
    </View>
  );
}