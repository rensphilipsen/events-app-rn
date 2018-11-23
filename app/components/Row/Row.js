import React, { PureComponent } from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import styles from './styles';
import ListItemText from '../ListItemText/ListItemText';

export default class Row extends PureComponent {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <TouchableHighlight onPress={() => navigate('EventDetail', {item: this.props.item})} style={styles.row}>
                <View>
                    <Image
                        ImageResizeMode={'cover'}
                        style={{height: 200, width: '100%'}}
                        source={{uri: this.props.item.avatar}}
                    />
                    <ListItemText>{this.props.item.first_name} {this.props.item.last_name}</ListItemText>
                </View>
            </TouchableHighlight>
        );
    }

}