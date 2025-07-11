import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GinieScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ginie Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B0B0B',
  },
  text: {
    color: 'white',
    fontSize: 24,
  }
});

export default GinieScreen; 