import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const ListItemText = (props) => {
    return (
        <Text style={styles.itemText}>
            {props.children}
        </Text>
    );
};

export default ListItemText