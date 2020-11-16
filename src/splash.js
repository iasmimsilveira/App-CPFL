import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const Splash = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Apresentacao');
          }}
        >
          <Image
            style={styles.logo}
            source={require('../assets/splashlogo.png')}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
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
    justifyContent: 'center',
    alignSelf: 'center',
    height: 188,
    width: 243,
  },
});

export default Splash;
