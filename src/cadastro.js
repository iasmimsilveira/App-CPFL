import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import ButtonDefault from './components/ButtonDefault';

export default function Cadastro({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <TouchableOpacity>
            <Image
              style={styles.logo}
              source={require('../assets/apresentacao.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Cadastro cliente no App</Text>
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

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="NOME COMPLETO"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="E-MAIL"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="SENHA"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="CONFIRMAR SENHA"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
            />
          </View>

          <ButtonDefault
            style={{
              height: 45,
            }}
            width={'80%'}
            onPress={() => navigation.navigate('Fim')}
            underlayColor="transparent"
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 14,
              }}
            >
              CADASTRAR
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
            onPress={() => navigation.navigate('Login')}
            underlayColor="transparent"
          >
            <Text
              style={{
                color: '#43B3DD',
                fontWeight: 'bold',
                fontSize: 14,
              }}
            >
              VOLTAR
            </Text>
          </ButtonDefault>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
