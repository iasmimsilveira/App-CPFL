import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Fim({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#404040',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#fff',
          textAlign: 'center',
          textTransform: 'uppercase',
          lineHeight: 40,
        }}
      >
        Seu cadastro foi efetuado com sucesso !
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Drawer')}
        style={{ marginTop: 20 }}
      >
        <Image
          source={require('./../assets/fim.png')}
          style={{ width: 80, height: 80 }}
        />
      </TouchableOpacity>
    </View>
  );
}
