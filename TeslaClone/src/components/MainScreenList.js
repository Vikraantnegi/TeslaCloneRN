/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { FlatList, View, StyleSheet, Dimensions, Alert } from 'react-native';
import VehicleComponent from './VehicleComponent';

const MainScreenList = ({data}) => {

    const [offset, setOffset] = useState({});

    const ScrollEvent = (event) => {
        // var currentOffset = event.nativeEvent.contentOffset.y;
        // var direction = currentOffset > offset ? 'down' : 'up';
        // setOffset(currentOffset);
        // console.log(offset);
    };

    return (
        <View style={styles.ListContainer}>
            <FlatList
                onScroll={(event) => ScrollEvent(event)}
                data={data}
                renderItem={({item}) => (
                    <VehicleComponent
                        model={item.name}
                        image={item.image}
                        tagline={item.tagline}
                        taglineCTA={item.taglineCTA}
                        button1={item.button1}
                        button2={item.button2}
                    />
                )}
                keyExtractor={(vehicle, index) => index}
                snapToAlignment={'start'}
                snapToInterval={Dimensions.get('screen').height}
                decelerationRate={'fast'}
                showsVerticalScrollIndicator={false}
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

export default MainScreenList;
