import React, {PureComponent} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import ListItemText from '../ListItemText/ListItemText';

export default class Row extends PureComponent {

	render() {
		const {push} = this.props.navigation;

		return (
			<TouchableOpacity style={styles.row} onPress={() => push('EventDetail', {event: this.props.item})}>
				<View>
					<View style={[styles.image, styles.imageWrapper]}>
						<Image
							ImageResizeMode={'cover'}
							style={styles.image}
							source={require('../../../assets/placeholder.png')}
						/>
					</View>
					<ListItemText>{
						this.props.item.title}
						<Text style={styles.smallText}>

						</Text>
					</ListItemText>
				</View>
			</TouchableOpacity>
		);
	}

}