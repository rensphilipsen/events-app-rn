import React, {PureComponent} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';

export default class Row extends PureComponent {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <TouchableHighlight onPress={() => navigate('EventDetail', {item: this.props.item})} style={styles.row}>
                <View>
                    <Image
                        ImageResizeMode={'cover'}
                        style={{height: 200}}
                        source={{uri: this.props.item.url}}
                    />
                    <Text>{this.props.item.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }

}