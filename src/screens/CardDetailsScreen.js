import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import Card from '../components/Card';
import Tabs from '../components/Tabs';

const CardDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}>select payment mode</Text>
            <Text style={styles.subtitle}>choose your preferred payment method to make payment.</Text>
        </View>
        <Tabs />
        <Card />
      </ScrollView>
      <Image source={require('../../images/Rectangle-29.png')} style={styles.navBarArc} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 120, // To avoid being hidden by BottomNav
  },
  headerContainer: {
    marginVertical: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
    textTransform: 'capitalize',
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 21,
  },
  navBarArc: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    width: '100%',
    height: 30,
    resizeMode: 'stretch',
  }
});

export default CardDetailsScreen; 