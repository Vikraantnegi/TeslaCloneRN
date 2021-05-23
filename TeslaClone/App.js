/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, ImageBackground, StyleSheet, Text, View} from 'react-native';
import VehicleComponent from './src/components/VehicleComponent';

const App = () => {
  return (
    <View style={styles.AppContainer}>
      <VehicleComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  AppContainer: {
    height: '100%',
    backgroundColor: 'white',
    flex: 1,
  },
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

export default App;
