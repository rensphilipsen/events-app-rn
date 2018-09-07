import React from 'react';
import {Image, ScrollView} from "react-native";
import styles from './styles';

const PeopleAttending = (props) => {
    return (
        <ScrollView style={styles.view} horizontal={true}>
            <Image style={styles.person} source={require('../../../assets/user1.jpg')}/>
            <Image style={styles.person} source={require('../../../assets/user2.jpg')}/>
            <Image style={styles.person} source={require('../../../assets/user3.jpg')}/>
            <Image style={styles.person} source={require('../../../assets/user4.jpg')}/>
            <Image style={styles.person} source={require('../../../assets/user5.jpg')}/>
            <Image style={styles.person} source={require('../../../assets/user6.jpg')}/>
        </ScrollView>
    );
};

export default PeopleAttending