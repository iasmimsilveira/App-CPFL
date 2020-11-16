import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';

export default function Fatura() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="dark-content" />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Text style={{ marginBottom: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>Instalação </Text>
            <Text style={{ color: '#83B81A', fontWeight: 'bold' }}>
              000000000
            </Text>
          </Text>

          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textTransform: 'uppercase',
                color: '#999',
                marginBottom: 10,
              }}
            >
              Detalhes da última fatura
            </Text>

            <View
              style={{
                width: '95%',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 8,
                marginBottom: 20,
                padding: 20,
                backgroundColor: '#D0ECF7',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    marginRight: 100,
                  }}
                >
                  <Text>Mês</Text>
                  <Text style={{ color: '#F39800', marginTop: 5 }}>
                    MM/AAAA
                  </Text>
                </View>
                <View>
                  <Text>Valor</Text>
                  <Text
                    style={{ color: '#F39800', marginTop: 5, marginLeft: 0 }}
                  >
                    R$ 0,00
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    marginRight: 40,
                  }}
                >
                  <Text>Vencimento</Text>
                  <Text style={{ color: '#F39800', marginTop: 5 }}>
                    DD/MM/AAAA
                  </Text>
                </View>
                <View>
                  <Text>Situação atual</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#83B81A', marginTop: 5 }}>Paga</Text>
                    <Image
                      source={require('./../assets/fim.png')}
                      style={{
                        width: 20,
                        height: 20,
                        marginLeft: 40,
                        marginTop: 5,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderColor: '#83B81A',
              borderWidth: 2,
              borderRadius: 5,
              flexDirection: 'row',
              width: '95%',
              marginBottom: 10,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesome name="flag" size={30} color="#83B81A" />
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text>Novembro/2020 em vigor</Text>
              <Text>
                Bandeira Tarifária{' '}
                <Text style={{ color: '#83B81A', fontWeight: 'bold' }}>
                  Verde
                </Text>
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TextInput style={styles.inputs} placeholder="Buscar por..." />
            <Image
              style={{
                position: 'absolute',
                top: 13,
                right: 50,
              }}
              source={require('./../assets/lupa.png')}
            />
          </View>

          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              textAlign: 'center',
              color: '#999',
              marginBottom: 20,
              marginTop: 10,
            }}
          >
            Serviços em destaque
          </Text>

          <View style={styles.grid}>
            <TouchableOpacity style={styles.card} onPress={() => {}}>
              <Image
                style={{ width: '100%' }}
                resizeMode="contain"
                source={require('../assets/card2.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => alert('Tela em desenvolvimento')}
            >
              <Image
                style={{ width: '100%' }}
                resizeMode="contain"
                source={require('../assets/card6.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => alert('Tela em desenvolvimento')}
            >
              <Image
                style={{ width: '100%' }}
                resizeMode="contain"
                source={require('../assets/card3.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => alert('Tela em desenvolvimento')}
            >
              <Image
                style={{ width: '100%' }}
                resizeMode="contain"
                source={require('../assets/card4.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => alert('Tela em desenvolvimento')}
            >
              <Image
                style={{ width: '100%' }}
                resizeMode="contain"
                source={require('../assets/card5.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => alert('Tela em desenvolvimento')}
            >
              <Image
                style={{ width: '100%' }}
                resizeMode="contain"
                source={require('../assets/suporte.png')}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}
          >
            <TextInput style={styles.inputs} placeholder="Mais serviços" />
            <Image
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
              }}
              source={require('./../assets/item1.png')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '95%',
  },
  card: {
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '46%',
    marginLeft: 8,
    marginTop: 8,
  },
  inputs: {
    height: 45,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    width: '95%',
    marginBottom: 10,
  },
});
