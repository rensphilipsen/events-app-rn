import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ListItemText from '../ListItemText/ListItemText';
import { getDate, getFeatureImage } from '../../utils/Helpers';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';

const Row = ({item, navigation}) => {
    const {push} = navigation;

    return (
        <TouchableOpacity
            style={styles.row}
            onPress={() => push('EventDetail', {event: item})}>
            <View>

                <View style={[styles.image, styles.imageWrapper]}>
                    <ProgressiveImage
                        ImageResizeMode={'cover'}
                        style={styles.image}
                        thumbnailSource={getFeatureImage(item, true)}
                        source={getFeatureImage(item)}
                    />
                </View>

                <ListItemText>
                    {item.title}&nbsp;
                    <Text style={styles.smallText}>
                        {getDate(item)}
                    </Text>
                </ListItemText>
            </View>
        </TouchableOpacity>
    );
};

export default Row