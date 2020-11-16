import React from 'react';
import { Text, View } from 'react-native';

export default function Conta() {
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
        Conta
      </Text>
    </View>
  );
}
