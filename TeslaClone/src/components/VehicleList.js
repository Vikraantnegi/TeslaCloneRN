/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import VehicleComponent from './VehicleComponent';

const VehicleList = ({data}) => {
    return (
        <View style={styles.ListContainer}>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <VehicleComponent
                        model={item.name}
                        image={item.image}
                        tagline={item.tagline}
                        taglineCTA={item.taglineCTA}
                    />
                )}
                keyExtractor={(vehicle, index) => index}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    ListContainer: {
      width: '100%',
      height: '100%',
      flex: 1,
    },
  });

export default VehicleList;
