import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const ListItemText = ({style, numberOfLines, children}) => {
    return (
        <Text style={[styles.itemText, style]}
              numberOfLines={numberOfLines}>
            {children}
        </Text>
    );
};

export default ListItemText