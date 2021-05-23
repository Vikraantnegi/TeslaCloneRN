/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, ImageBackground, StyleSheet, Text, View} from 'react-native';
import VehicleData from './src/assets/cars';
import VehicleList from './src/components/VehicleList';

const App = () => {
  return (
    <View style={styles.AppContainer}>
      <VehicleList data={VehicleData} />
    </View>
  );
};

const styles = StyleSheet.create({
  AppContainer: {
    height: '100%',
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
