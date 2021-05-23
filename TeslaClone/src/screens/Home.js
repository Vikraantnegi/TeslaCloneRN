/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View} from 'react-native';
import VehicleData from '../assets/cars';
import Header from '../components/Header';
import MainScreenList from '../components/MainScreenList';

const Home = ({navigation}) => {
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

export default Home;
