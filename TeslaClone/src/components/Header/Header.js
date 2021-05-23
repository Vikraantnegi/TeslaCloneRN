/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.HeaderContainer}>
            <Image source={require('../assets/logo.png')} style={styles.HeaderLogo} />
            <Image source={require('../assets/menu.png')} style={styles.HeaderMenuLogo} />
        </View>
    );
};

const styles = StyleSheet.create({
    HeaderContainer: {
        position: 'absolute',
        top: 30,
        zIndex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    HeaderLogo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    HeaderMenuLogo: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
});

export default Header;
