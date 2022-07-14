import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./src/assets/images/logo.png')} />

      <Image
        style={styles.background}
        source={require('./src/assets/images/background.png')}
      />

      <Text style={styles.titleText}> Food for Everyone </Text>

      <View style={styles.rectangle}>
        <Text style={styles.text}> Get started </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4B3A',
  },

  logo: {
    width: 60,
    height: 60,
    top: 40,
    left: 40,
  },

  background: {
    width: 390,
    height: 420,
    top: 200,
    left: -3,
  },

  titleText: {
    width: 290,
    height: 150,
    top: -350,
    left: 50,
    fontSize: 50,
    fontWeight: '800',
    lineHeight: 50,
    color: 'white',
  },

  rectangle: {
    width: 250,
    height: 55,
    top: 20,
    left: 70,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 25,
    lineHeight: 32,
    color: '#FF460A',
  },
});

export default App;