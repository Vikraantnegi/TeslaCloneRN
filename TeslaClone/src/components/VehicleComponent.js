/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './ButtonComponent';

const VehicleComponent = ({model, image, tagline, taglineCTA, button1, button2}) => {
    return (
        <View style={styles.VehicleContainer}>
            <ImageBackground source={image} style={styles.VehicleImage} />
            <View style={styles.VehicleDescription}>
              <Text style={styles.VehicleModel}>{model}</Text>
              <Text style={styles.VehiclePrice}>{tagline}{' '}{taglineCTA && <Text style={styles.VehicleOption}>{taglineCTA}</Text>}</Text>
            </View>
            <View style={styles.Buttons}>
              {button1 &&
                <ButtonComponent
                  text={button1}
                  color="#FFFFFF"
                  bgColor="#171A20CC"
                  onPress={() => console.log('Custom Order was pressed')}
                />
              }
              {button2 &&
                <ButtonComponent
                  text={button2}
                  color="#171A20"
                  bgColor="#FFFFFFA6"
                  onPress={() => console.log('Existing Inventory was pressed')}
                />
              }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    VehicleContainer: {
      width: '100%',
      height: Dimensions.get('screen').height,
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
    Buttons: {
      position: 'absolute',
      bottom: 50,
      width: '100%',
    },
    VehicleOption: {
      textDecorationLine: 'underline',
    },
  });

export default VehicleComponent;
