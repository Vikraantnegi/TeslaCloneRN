/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.HeaderContainer}>
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Image source={require('../assets/logo.png')} style={styles.HeaderLogo} />
            </Pressable>
            <Pressable onPress={() => navigation.toggleDrawer()}>
                <Image source={require('../assets/menu.png')} style={styles.HeaderMenuLogo} />
            </Pressable>
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
