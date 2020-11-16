import React, { useState } from 'react';
import RadioButton from 'react-native-radio-button';
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
} from 'react-native';
import ButtonDefault from './components/ButtonDefault';

export default function Solicitacao({ navigation }) {
  const [check, setCheck] = useState('pf');
  const [addressCheck, setAddressCheck] = useState('first');
  return (
    <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
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
          <Text style={styles.title}>Solicitação de cadastro</Text>

          <View style={{ marginBottom: 15 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <RadioButton
                  animation={'bounceIn'}
                  isSelected={check === 'pf' ? true : false}
                  onPress={() => setCheck('pf')}
                  size={11}
                  outerColor="#43B3DD"
                  innerColor="#43B3DD"
                />
                <Text
                  style={{
                    color: '#999',
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginRight: 20,
                    textTransform: 'uppercase',
                  }}
                >
                  Pessoa Física
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <RadioButton
                  animation={'bounceIn'}
                  isSelected={check === 'pj' ? true : false}
                  onPress={() => setCheck('pj')}
                  size={11}
                  outerColor="#43B3DD"
                  innerColor="#43B3DD"
                />
                <Text
                  style={{
                    color: '#999',
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginRight: 20,
                    textTransform: 'uppercase',
                  }}
                >
                  Pessoa Jurídica
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="NOME COMPLETO"
              underlineColorAndroid="transparent"
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="CPF"
              keyboardType="numeric"
              underlineColorAndroid="transparent"
            />
          </View>

          {check === 'pj' && (
            <>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="RAZÃO SOCIAL"
                  underlineColorAndroid="transparent"
                  autoCapitalize="words"
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="NOME FANTASIA"
                  underlineColorAndroid="transparent"
                  autoCapitalize="words"
                />
              </View>
            </>
          )}

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="TELEFONE"
              keyboardType="numeric"
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
              placeholder="ESTADO"
              underlineColorAndroid="transparent"
              autoCapitalize="characters"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="CIDADE"
              underlineColorAndroid="transparent"
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="ENDEREÇO COMPLETO"
              underlineColorAndroid="transparent"
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="CARGA DESEJADA"
              underlineColorAndroid="transparent"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="CARGA DESEJADA"
              underlineColorAndroid="transparent"
              keyboardType="numeric"
            />
          </View>

          <Text style={styles.title}>*endereço de entrega de conta</Text>

          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <View style={{ flexDirection: 'column' }}>
              <RadioButton
                animation={'bounceIn'}
                isSelected={addressCheck === 'first' ? true : false}
                onPress={() => setAddressCheck('first')}
                size={11}
                outerColor="#43B3DD"
                innerColor="#43B3DD"
              />
            </View>
            <Text
              style={{
                color: '#999',
                fontWeight: 'bold',
                marginLeft: 10,
                marginRight: 20,
                textTransform: 'uppercase',
              }}
            >
              mesmo endereço da instalação
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginBottom: 20,
            }}
          >
            <View style={{ flexDirection: 'column' }}>
              <RadioButton
                animation={'bounceIn'}
                isSelected={addressCheck === 'second' ? true : false}
                onPress={() => setAddressCheck('second')}
                size={11}
                outerColor="#43B3DD"
                innerColor="#43B3DD"
              />
            </View>
            <Text
              style={{
                color: '#999',
                fontWeight: 'bold',
                marginLeft: 10,
                marginRight: 20,
                textTransform: 'uppercase',
              }}
            >
              outro endereço
            </Text>
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
