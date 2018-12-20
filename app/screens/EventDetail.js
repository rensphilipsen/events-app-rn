import React, {PureComponent} from 'react';
import FeatureImagePage from '../components/FeatureImagePage/FeatureImagePage';
import ListItem from '../components/ListItem/ListItem';
import ListItemText from '../components/ListItemText/ListItemText';
import {Image, ScrollView} from 'react-native';
import {COLOR, FONT} from "../styles/theme";

const TitleStyle = {
	fontSize: 20,
	fontFamily: FONT.BOLD,
	color: COLOR.PRIMARY,
	margin: 10
};

const ItemStyle = {
	width: 120,
	height: 120,
	margin: 5,
	shadowColor: COLOR.SHADOW,
	shadowRadius: 5,
	shadowOpacity: 0.1,
	borderRadius: 5,
	shadowOffset: {height: 5},
};

// TODO: Replace this with actual dynamic data
const event = {
	title: 'Bedrijfsborrel',
	date: '7 december 2018',
	image: require('../../assets/featureEvent.jpg'),
	description: 'De maandelijkse borrel staat weer op ...',
	contact_phone: '+31 6 36 50 11 91'
};

class EventDetail extends PureComponent {

	constructor() {
		super();
		this.state = {showNavTitle: false};
	}

	render() {
		return (
			<FeatureImagePage
				image={event.image}
				title={event.title}
				date={event.date}>

				<ListItem icon={'info'}>
					<ListItemText>{event.description}</ListItemText>
				</ListItem>

				<ListItem icon={'phone'}>
					<ListItemText>{event.contact_phone}</ListItemText>
				</ListItem>

				<ListItem contentStyle={{flex: 1, flexDirection: 'row'}}>
					<ScrollView horizontal={true}>
						<Image style={ItemStyle} source={require('../../assets/event1.jpg')}/>
						<Image style={ItemStyle} source={require('../../assets/event2.jpg')}/>
						<Image style={ItemStyle} source={require('../../assets/event3.jpg')}/>
					</ScrollView>
				</ListItem>
			</FeatureImagePage>
		);
	}
}

export default (EventDetail);