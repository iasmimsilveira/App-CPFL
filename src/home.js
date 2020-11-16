import React, { useState } from 'react';
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

export default function Home({ navigation }) {
  const [position, setPosition] = useState(1);
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
          <Text style={{ marginBottom: 10 }}>
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
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                width: '95%',
                marginBottom: 10,
              }}
            >
              {position === 1 && (
                <Image
                  style={{ width: '100%' }}
                  source={require('./../assets/img1.png')}
                />
              )}

              {position === 2 && (
                <Image
                  style={{ width: '100%' }}
                  source={require('./../assets/img2.png')}
                />
              )}

              {position === 3 && (
                <Image
                  style={{ width: '100%' }}
                  source={require('./../assets/img3.png')}
                />
              )}
            </ScrollView>
            <View
              style={{
                marginBottom: 20,
                flexDirection: 'row',
              }}
            >
              <TouchableOpacity
                onPress={() => setPosition(1)}
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: position === 1 ? '#999' : '#ccc',
                  borderRadius: 8,
                  marginRight: 10,
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setPosition(2)}
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: position === 2 ? '#999' : '#ccc',
                  borderRadius: 8,
                  marginRight: 10,
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setPosition(3)}
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: position === 3 ? '#999' : '#ccc',
                  borderRadius: 8,
                }}
              ></TouchableOpacity>
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
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('FATURA')}
            >
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
