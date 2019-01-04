import React, {PureComponent} from 'react';
import {getAllEvents} from "../actions/events";
import FeatureImagePage from "../components/FeatureImagePage/FeatureImagePage";
import {Image, ScrollView, View} from "react-native";
import ListItem from "../components/ListItem/ListItem";
import theme from "../styles/theme";
import connect from "react-redux/es/connect/connect";
import ListItemText from "../components/ListItemText/ListItemText";
import moment from "moment";
import {getUrl} from "../index";

class EventDetail extends PureComponent {

	event;
	navigate;

	defaultFields = [
		{icon: 'phone', value: 'contact_phone', onPress: () => null},
		{icon: 'info', value: 'description', onPress: () => null},
	];

	constructor() {
		super();
		this.state = {showNavTitle: false};
	}

	componentDidMount() {
		this.props.getAllEvents();
	}

	getFeatureImage() {
		const medias = this.event['medias'].data;

		return medias.length >= 1 ?
			{uri: getUrl(medias[0].path)} :
			require('../../assets/placeholder.png')
	}

	renderGallery() {
		const items = [];
		const medias = this.event['medias'].data;

		medias.forEach((item) => {
			items.push(this.renderGalleryItem(item));
		});

		if (medias.length >= 1)
			return (
				<ListItem contentStyle={{flex: 1, flexDirection: 'row'}}>
					<ScrollView horizontal={true}>
						{items}
					</ScrollView>
				</ListItem>);
	}

	renderGalleryItem(item) {
		return <Image style={theme.eventDetailImage} source={{uri: getUrl(item.path)}} key={item.id}/>
	}

	renderEvents() {
		const events = this.event.events.data;

		if (events.length >= 1)
			return (
				<ListItem icon={'star'} onPress={() => this.navigate('EventList')} key={'events'}>
					<ListItemText>{events.length} evenementen op programma</ListItemText>
				</ListItem>);
	}

	renderDate() {
		// Parse date
		const start = this.event.start_time ? moment(this.event.start_time) : null;
		const end = this.event.end_time ? moment(this.event.end_time) : null;

		// Condition checking
		if (start && end) return start.format('dd D MMM') + ' - ' + end.format('dd D MMM YYYY');
		else if (start) return start.format('dd D MMM YYYY');
		else return '';
	}

	renderAdditionalFields() {
		const fieldsToRender = [];
		const metas = this.event['metas'].data;

		metas.forEach((meta) => {
			// Check if meta is in default fields array and value is not empty..
			const field = this.defaultFields.find(field => field.value === meta.key && meta.value !== '');

			if (field)
				fieldsToRender.push(
					<ListItem icon={field.icon} key={meta.key}><ListItemText>{meta.value}</ListItemText></ListItem>
				);
		});

		return fieldsToRender;
	}

	render() {
		const {navigation} = this.props;
		this.navigate = navigation.navigate;

		this.event = navigation.state.params ? navigation.state.params['event'] : this.props.event;

		if (this.event)
			return (
				<FeatureImagePage
					image={this.getFeatureImage()}
					title={this.event.title}
					type={this.event.type}
					date={this.renderDate()}>

					{this.renderEvents()}

					{this.renderAdditionalFields()}

					{this.renderGallery()}

				</FeatureImagePage>);
		else
			return <View/>
	}
}

const mapStateToProps = state => {
	return {
		event: state.events[0]
	};
};

const mapDispatchToProps = {
	getAllEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail)