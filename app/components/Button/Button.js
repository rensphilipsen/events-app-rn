import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Button = ({backgroundColor, onPress, color, text}) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={[styles.container, {backgroundColor: backgroundColor}]}
                              onPress={onPress}>

                <Text style={[styles.text, {color: color}]}>
                    {text}
                </Text>

            </TouchableOpacity>
        </View>
    );
};

export default Button