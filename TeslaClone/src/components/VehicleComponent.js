/* eslint-disable prettier/prettier */
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const VehicleComponent = () => {
    return (
        <View style={styles.VehicleContainer}>
            <ImageBackground source={require('../assets/ModelS.jpeg')} style={styles.VehicleImage} />
            <View style={styles.VehicleDescription}>
            <Text style={styles.VehicleModel}>Model S</Text>
            <Text style={styles.VehiclePrice}>Starting at $75,320</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    VehicleContainer: {
      width: '100%',
      height: '100%',
    },
    VehicleImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
    },
    VehicleDescription: {
      marginTop: '30%',
      alignItems: 'center',
    },
    VehicleModel: {
      fontSize: 40,
      fontWeight: '600',
    },
    VehiclePrice: {
      fontSize: 16,
      color: '#5c5e62',
    },
  });

export default VehicleComponent;
