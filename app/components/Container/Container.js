import React from 'react';
import {SafeAreaView} from 'react-native';

import styles from './styles';

export default ({children, backgroundColor}) => {
    const containerStyles = [styles.container];
    if (backgroundColor) {
        containerStyles.push({backgroundColor});
    }
    return <SafeAreaView style={containerStyles}>{children}</SafeAreaView>;
};