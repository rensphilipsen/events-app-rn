import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getUrl } from '../../utils/Helpers';

const PeopleAttending = ({event}) => {

    const users = event['users'].data.map((user) => {
        const profilePicture = user.profile_picture ?
            {uri: getUrl(user.profile_picture)} :
            require('../../../assets/placeholder_user.png');

        return (
            <TouchableOpacity style={styles.personWrapper} key={user.id}>
                <Image style={styles.personImage} source={profilePicture}/>
                <Text style={styles.personName} ellipsizeMode='tail' numberOfLines={1}>
                    {user.name}
                </Text>
            </TouchableOpacity>
        )
    });

    return (
        <ScrollView style={styles.view} horizontal={true}>
            {users}
        </ScrollView>
    );

};

export default PeopleAttending