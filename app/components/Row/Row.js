import React, { PureComponent } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ListItemText from '../ListItemText/ListItemText';
import { getDate, getUrl } from '../../utils/Helpers';

class Row extends PureComponent {

    event;

    getFeatureImage() {
        const medias = this.event['medias'].data;

        return medias.length >= 1 ?
            {uri: getUrl(medias[0].path)} :
            require('../../../assets/placeholder.png')
    }

    render() {
        const {push} = this.props.navigation;
        this.event = this.props.item;


        return (
            <TouchableOpacity style={styles.row} onPress={() => push('EventDetail', {event: this.event})}>
                <View>
                    <View style={[styles.image, styles.imageWrapper]}>
                        <Image
                            ImageResizeMode={'cover'}
                            style={styles.image}
                            source={this.getFeatureImage()}
                        />
                    </View>
                    <ListItemText>
                        {this.props.item.title}&nbsp;
                        <Text style={styles.smallText}>
                            {getDate(this.event)}
                        </Text>
                    </ListItemText>
                </View>
            </TouchableOpacity>
        );
    }

}

export default Row