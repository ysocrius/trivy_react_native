import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ActionButtons = ({ isFrozen, onToggleFreeze }) => {
  return (
    <View style={styles.controls}>
      <TouchableOpacity onPress={onToggleFreeze} style={styles.controlButton}>
        <LinearGradient
          colors={isFrozen ? ['#FF0000', 'rgba(255, 0, 0, 0)'] : ['#FFFFFF', 'rgba(255, 255, 255, 0)']}
          style={styles.controlButtonBorder}>
          <View style={styles.controlButtonInner}>
            <Image
              source={isFrozen ? require('../../images/1-306.png') : require('../../images/freeze_icon.png')}
              style={styles.controlIcon}
            />
          </View>
        </LinearGradient>
        <Text style={[styles.controlText, isFrozen && styles.unfreezeText]}>{isFrozen ? 'unfreeze' : 'freeze'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    marginLeft: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 296,
  },
  controlButton: {
    alignItems: 'center',
  },
  controlButtonBorder: {
    borderRadius: 70,
    padding: 1,
    marginBottom: 8,
  },
  controlButtonInner: {
    width: 58,
    height: 58,
    borderRadius: 70,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlIcon: {
    width: 20,
    height: 20,
  },
  controlText: {
    color: '#ffffff',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  unfreezeText: {
    color: '#FF0000',
  },
  copyText: {
    color: '#01D167',
  }
});

export default ActionButtons; 