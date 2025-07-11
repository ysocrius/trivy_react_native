import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const YoloPayScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yolo Pay Screen</Text>
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

export default YoloPayScreen; 