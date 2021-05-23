/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View} from 'react-native';
import VehicleData from './src/assets/cars';
import MainScreenList from './src/components/LandingScreen/MainScreenList';
import Header from './src/components/LandingScreen/Header';

const App = () => {
  return (
    <View style={styles.AppContainer}>
      <Header />
      <MainScreenList data={VehicleData} />
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
