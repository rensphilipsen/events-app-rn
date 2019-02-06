import React, { PureComponent } from 'react';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getUrl } from '../../utils/Helpers';

class PeopleAttending extends PureComponent {

    event = null;

    renderUsers(data) {
        const items = [];
        const users = data.data;

        if (users.length > 1)
            users.forEach((user) => {
                items.push(this.renderUser(user));
            });

        return items;
    }

    getUserProfilePicture(user) {
        if (user.profile_picture)
            return {uri: getUrl(user.profile_picture)};

        return require('../../../assets/placeholder_user.png');
    }

    renderUser(user) {
        return (
            <TouchableOpacity style={styles.personWrapper} key={user.id}>
                <Image style={styles.personImage} source={this.getUserProfilePicture(user)}/>
                <Text style={styles.personName} ellipsizeMode='tail' numberOfLines={1}>
                    {user.name}
                </Text>
            </TouchableOpacity>
        );
    }

    render() {
        this.event = this.props.event;

        return (
            <ScrollView style={styles.view} horizontal={true}>
                {this.renderUsers(this.event.users)}
            </ScrollView>
        );
    }
}

export default PeopleAttending