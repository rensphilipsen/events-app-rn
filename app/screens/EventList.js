import React, {PureComponent} from 'react';
import Container from '../components/Container/Container';
import EventListView from '../components/EventListView/EventListView';

class EventList extends PureComponent {

	static navigationOptions = {
		title: 'EVENTS',
		headerStyle: {
			backgroundColor: '#f0f3f8',
			borderBottomWidth: 0,
		},
		headerTintColor: '#5e5e82',
		headerTitleStyle: {
			fontFamily: 'RobotoCondensed-Bold',
		},
	};

	render() {
		return (
			<Container>
				<EventListView navigation={this.props.navigation}/>
			</Container>
		);
	}

}

export default EventList;