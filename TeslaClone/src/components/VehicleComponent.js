/* eslint-disable prettier/prettier */
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './ButtonComponent';

const VehicleComponent = ({model, image, tagline}) => {
    return (
        <View style={styles.VehicleContainer}>
            <ImageBackground source={image} style={styles.VehicleImage} />
            <View style={styles.VehicleDescription}>
              <Text style={styles.VehicleModel}>{model}</Text>
              <Text style={styles.VehiclePrice}>{tagline}</Text>
            </View>
            <ButtonComponent 
              text="Custom Order"
              color="#FFFFFF"
              bgColor="#171A20CC"
              onPress={() => console.log('Custom Order was pressed')}
            />
            <ButtonComponent
              text="Existing Inventory"
              color="#171A20"
              bgColor="#FFFFFFA6"
              onPress={() => console.log('Existing Inventory was pressed')}
            />
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
