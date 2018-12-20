import React, {PureComponent} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import ListItemText from '../ListItemText/ListItemText';

export default class Row extends PureComponent {

	render() {
		const {navigate} = this.props.navigation;
		return (
			<TouchableOpacity onPress={() => navigate('EventDetail', {item: this.props.item})} style={styles.row}>
				<View>
					<View style={[styles.image, styles.imageWrapper]}>
						<Image
							ImageResizeMode={'cover'}
							style={styles.image}
							source={{uri: 'https://picsum.photos/200/300'}}
						/>
					</View>
					<ListItemText>{this.props.item.first_name} {this.props.item.last_name}</ListItemText>
				</View>
			</TouchableOpacity>
		);
	}

}