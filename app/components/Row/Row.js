import React, {PureComponent} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import ListItemText from '../ListItemText/ListItemText';
import {getUrl} from "../../index";

export default class Row extends PureComponent {

	getFeatureImage() {
		const medias = this.props.item['medias'].data;


		console.log(medias);

		return medias.length >= 1 ?
			{uri: getUrl(medias[0].path)} :
			require('../../../assets/placeholder.png')
	}

	render() {
		const {push} = this.props.navigation;

		return (
			<TouchableOpacity style={styles.row} onPress={() => push('EventDetail', {event: this.props.item})}>
				<View>
					<View style={[styles.image, styles.imageWrapper]}>
						<Image
							ImageResizeMode={'cover'}
							style={styles.image}
							source={this.getFeatureImage()}
						/>
					</View>
					<ListItemText>
						{this.props.item.title}
						<Text style={styles.smallText}>

						</Text>
					</ListItemText>
				</View>
			</TouchableOpacity>
		);
	}

}