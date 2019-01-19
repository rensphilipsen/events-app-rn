import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const HeaderText = (props) => {
    return (
        <View>
            <Text style={[styles.text, {fontSize: 40}]}>
                Events
            </Text>
            <Text style={[styles.text, {fontSize: 14}]}>
                by Social Brothers
            </Text>
        </View>
    );
};

export default HeaderText