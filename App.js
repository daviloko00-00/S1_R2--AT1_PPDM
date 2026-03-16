import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  function salvarUsuario() {

    if (nome !== '' && email !== '' && telefone !== '' && dataNascimento !== '') {
      Alert.alert("Sucesso", "Registro salvo com sucesso!");
    } else {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    }

  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.cardA}>

        <Text style={styles.titulo}>Cadastro de usuário</Text>

        <View style={styles.cardB}>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu telefone"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
          />

          <Text style={styles.label}>Data de nascimento</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            value={dataNascimento}
            onChangeText={setDataNascimento}
          />

          <Pressable style={styles.botao} onPress={salvarUsuario}>
            <Text style={styles.textoBotao}>Salvar</Text>
          </Pressable>

        </View>

        <StatusBar style="auto" />

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F2F0EA',
    alignItems: "center",
    justifyContent: 'center'
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },

  cardB: {
    marginTop: 50,
    width: '85%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 50,
    elevation: 5
  },

  label: {
    fontSize: 20,
    marginTop: 10
  },

  input: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#bfdce4',
    padding: 10,
    borderRadius: 5,
    alignSelf: "center"
  },

  cardA: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: 'rgba(36, 30, 30, 0)',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#A8D5E3'
  },

  botao: {
    marginTop: 20,
    backgroundColor: '#FF78AC',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold"
  }

});