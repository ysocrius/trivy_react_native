import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, LayoutAnimation, UIManager, Platform, Alert } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import LinearGradient from 'react-native-linear-gradient';
import ActionButtons from './ActionButtons';
import GinieIcon from '../assets/images/GinieIcon';
import YoloLogo from '../assets/images/YoloLogo';
import { faker } from '@faker-js/faker';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Card = () => {
  const [isFrozen, setIsFrozen] = useState(false);
  const [isCvvVisible, setIsCvvVisible] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: [],
    expiryDate: '',
    cvv: ''
  });

  useEffect(() => {
    // Generate a 16-digit card number and format it in groups of 4 digits
    const rawCardNumber = faker.finance.creditCardNumber('#### #### #### ####');
    const cardNumber = rawCardNumber.split(' '); // Split into groups of 4
    
    const expiryDate = faker.date.future().toLocaleDateString('en-GB', { month: '2-digit', year: '2-digit' });
    const cvv = faker.finance.creditCardCVV();
    setCardDetails({ cardNumber, expiryDate, cvv });
  }, []);

  const toggleFreeze = () => {
    LayoutAnimation.easeInEaseOut();
    setIsFrozen(!isFrozen);
  };

  const toggleCvv = () => {
    setIsCvvVisible(!isCvvVisible);
  };

  const { cardNumber, expiryDate, cvv } = cardDetails;

  const copyDetails = () => {
    const cardNumberString = cardNumber.join(' ');
    const details = `Card Number: ${cardNumberString}\nExpiry Date: ${expiryDate}\nCVV: ${cvv}`;
    Clipboard.setString(details);
    Alert.alert('Copied to Clipboard', 'Your card details have been copied.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>your digital debit card</Text>
      <View style={styles.cardRow}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.cardBorder}
        >
          <View style={styles.cardContainerWrapper}>
            <Image
              source={isFrozen ? require('../../images/group-1.png') : require('../../images/card_unfrozen.png')}
              style={styles.backgroundImage}
              resizeMode="cover"
            />

            {isFrozen ? (
              <>
                <Image
                  source={require('../../images/6466227_1.png')}
                  style={styles.frostImage}
                  resizeMode="cover"
                />
                <Image
                  source={require('../../images/rectangle_1518.png')}
                  style={styles.frozenOverlay}
                  resizeMode="cover"
                />
              </>
            ) : (
              <Image
                source={require('../../images/unfrozen_overlay.png')}
                style={styles.unfrozenOverlay}
                resizeMode="cover"
              />
            )}

            {!isFrozen && (
              <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                  <YoloLogo style={styles.yoloLogo} />
                  <Image source={require('../../images/card_logo.png')} style={styles.logo} />
              </View>
                
                <View style={styles.detailsRow}>
              <View style={styles.cardBody}>
                    {cardNumber.map((part, index) => (
                      <Text key={index} style={styles.cardNumber}>{part}</Text>
                    ))}
                    <TouchableOpacity style={styles.copyButton} onPress={copyDetails}>
                      <Image source={require('../../images/copy_icon.png')} style={styles.copyIcon} />
                      <Text style={styles.copyText}>copy details</Text>
                    </TouchableOpacity>
              </View>

              <View style={styles.cardFooter}>
                    <View style={{marginRight: 20}}>
                      <Text style={styles.cardTextLabel}>expiry</Text>
                      <Text style={styles.cardText}>{expiryDate}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View>
                        <Text style={styles.cardTextLabel}>cvv</Text>
                        <Text style={styles.cardText}>{isCvvVisible ? cvv : '***'}</Text>
              </View>
                      <TouchableOpacity onPress={toggleCvv}>
                        <Image source={require('../../images/eye.png')} style={styles.eyeIcon} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={{flex: 1}} />

              </View>
            )}
          </View>
        </LinearGradient>
        <ActionButtons isFrozen={isFrozen} onToggleFreeze={toggleFreeze} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    cardTitle: {
        color: '#ffffff',
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        marginBottom: 8,
    },
    cardRow: {
        flexDirection: 'row',
    },
    cardBorder: {
        borderRadius: 16,
        padding: 1,
    },
    cardContainerWrapper: {
        position: 'relative',
        width: 186,
        height: 296,
        borderRadius: 15,
        overflow: 'hidden',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    frostImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        borderRadius: 16,
        zIndex: 3,
        opacity: 0.2,
    },
    frozenOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        borderRadius: 16,
        zIndex: 3,
    },
    unfrozenOverlay: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 71,
        height: 34,
        zIndex: 4,
    },
    cardContent: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        padding: 16,
        zIndex: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 5,
        marginBottom: 20,
    },
    yoloLogo: {
        width: 49,
        height: 16,
    },
    logo: {
        width: 48,
        height: 21,
        alignSelf: 'flex-end',
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        zIndex: 5,
    },
    cardBody: {
        zIndex: 5,
    },
    cardNumber: {
        color: '#ffffff',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        letterSpacing: 2,
    },
    cardFooter: {
        zIndex: 5,
    },
    copyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 6,
        marginTop: 20,
    },
    copyIcon: {
        width: 16,
        height: 16,
        marginRight: 6,
    },
    copyText: {
        color: '#a90808',
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
    },
    cardText: {
        color: '#ffffff',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    cardTextLabel: {
        color: '#ffffff',
      fontFamily: 'Poppins-Regular',
      fontSize: 10,
      opacity: 0.5,
      marginBottom: 2,
    },
    eyeIcon: {
      width: 16,
      height: 16,
      marginLeft: 8,
      marginTop: 8,
    }
});

export default Card; 