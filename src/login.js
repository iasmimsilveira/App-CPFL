import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ButtonDefault from './components/ButtonDefault';

export default function LoginView({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
          <Image
            style={styles.logo}
            source={require('../assets/apresentacao.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Área do cliente</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="CPF OU CNPJ"
            keyboardType="numeric"
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="NÚMERO DA INSTALAÇÃO"
            keyboardType="numeric"
            underlineColorAndroid="transparent"
          />
        </View>

        <ButtonDefault
          style={{
            height: 45,
          }}
          width={'80%'}
          onPress={() => navigation.navigate('Drawer')}
          underlayColor="transparent"
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 14,
            }}
          >
            ENTRAR
          </Text>
        </ButtonDefault>

        <ButtonDefault
          bgcolor={'#fff'}
          style={{
            height: 45,
            marginTop: 15,
            borderWidth: 1,
            borderColor: '#43B3DD',
          }}
          width={'80%'}
          onPress={() => navigation.navigate('Cadastro')}
          underlayColor="transparent"
        >
          <Text
            style={{
              color: '#43B3DD',
              fontWeight: 'bold',
              fontSize: 14,
            }}
          >
            CADASTRAR
          </Text>
        </ButtonDefault>

        <Text
          style={{
            color: '#999',
            marginTop: 15,
            marginBottom: 15,
            fontWeight: 'bold',
          }}
        >
          OU
        </Text>

        <View style={styles.groupSocial}>
          <TouchableOpacity>
            <AntDesign name="apple1" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 32, height: 32 }}
              source={require('../assets/google.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="facebook" size={32} color="#4e69a2" />
          </TouchableOpacity>
        </View>

        <ButtonDefault
          bgcolor={'#fff'}
          style={{
            height: 45,
            marginTop: 20,
            borderWidth: 1,
            borderColor: '#F39800',
          }}
          width={'80%'}
          onPress={() => navigation.navigate('Solicitacao')}
          underlayColor="transparent"
        >
          <Text
            style={{
              color: '#F39800',
              fontWeight: 'bold',
              fontSize: 14,
            }}
          >
            QUERO SER CLIENTE CPFL
          </Text>
        </ButtonDefault>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    marginBottom: 16,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    height: 45,
    marginBottom: 15,
  },
  inputs: {
    height: 45,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#999',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  fabookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#ff0000',
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer: {
    width: 250,
    marginBottom: 15,
    alignItems: 'flex-end',
  },
  socialButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    color: '#FFFFFF',
    marginRight: 5,
  },
  groupSocial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
});
