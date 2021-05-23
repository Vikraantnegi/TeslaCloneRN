/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ButtonComponent = ({text, color, bgColor, onPress}) => {
    return (
        <View style={styles.ButtonContainer}>
            <Pressable style={[styles.button, {backgroundColor: bgColor}]} onPress={() => onPress()}>
                <Text style={[styles.ButtonText, {color: color}]}>{text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    ButtonContainer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    button: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    ButtonText: {
        fontSize: 14,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
  });

export default ButtonComponent;
