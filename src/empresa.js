import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

export default function Empresa({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Apresentacao')}>
        <Image
          style={styles.logo}
          source={require('../assets/apresentacao.png')}
        />
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Video
          source={require('./../assets/video.mp4')}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />
        <Text style={styles.text}>Conhecer a Empresa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    alignItems: 'center',
    height: 188,
    width: 243,
    top: -50,
    left: 1,
  },
  video: {
    width: 300,
    height: 200,
  },
  text: {
    color: '#888',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 16,
  },
});
