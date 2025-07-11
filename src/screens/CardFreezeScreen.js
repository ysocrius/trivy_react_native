import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Card from '../components/Card';
import BottomNav from '../components/BottomNav';

const CardFreezeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Freeze Card</Text>
          <Text style={styles.subtitle}>Temporarily freeze your card for security.</Text>
        </View>
        <Card />
        <View style={styles.freezeContainer}>
          <Image 
            source={require('../../images/freeze_icon.png')}
            style={styles.freezeIcon}
          />
          <TouchableOpacity style={styles.freezeButton}>
            <Text style={styles.freezeButtonText}>Freeze Card</Text>
          </TouchableOpacity>
          <Text style={styles.freezeInfo}>
            Freezing your card will temporarily prevent all transactions. 
            You can unfreeze it at any time.
          </Text>
        </View>
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 120, // To avoid being hidden by BottomNav
  },
  headerContainer: {
    marginVertical: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  backText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 21,
  },
  freezeContainer: {
    alignItems: 'center',
    marginTop: 30,
    padding: 20,
  },
  freezeIcon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  freezeButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 20,
  },
  freezeButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  freezeInfo: {
    color: '#999999',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
  },
});

export default CardFreezeScreen; 