import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Tabs = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
          style={styles.gradientBorder}
        >
          <View style={styles.innerContent}>
            <Text style={styles.tabText}>pay</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <LinearGradient
          colors={['rgba(169, 8, 8, 1)', 'rgba(169, 8, 8, 0)']}
          style={styles.gradientBorder}
        >
          <View style={styles.innerContent}>
            <Text style={[styles.tabText, styles.activeTabText]}>card</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 20,
  },
  tab: {
    marginRight: 8,
  },
  gradientBorder: {
    borderRadius: 40,
    padding: 1, // This creates the border effect
  },
  innerContent: {
    backgroundColor: '#0d0d0d',
    borderRadius: 40,
    width: 96,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  activeTabText: {
    color: '#a90808',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Tabs; 