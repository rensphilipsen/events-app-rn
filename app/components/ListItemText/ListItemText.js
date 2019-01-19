import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const ListItemText = (props) => {
    return (
        <Text style={[styles.itemText, props.style]} numberOfLines={props.numberOfLines}>
            {props.children}
        </Text>
    );
};

export default ListItemText