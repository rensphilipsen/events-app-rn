import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Timetable = ({items, height}) => {

    return (
        <View style={[styles.container, {height: height}]}>
            <View style={styles.left}/>
            {items.map((item) => {
                return (
                    <View style={styles.item}>
                        <Text style={styles.when}>
                            {item.when}
                        </Text>
                        <Text style={styles.what}>
                            {item.what}
                        </Text>
                    </View>
                )
            })}
        </View>
    );
};

export default Timetable