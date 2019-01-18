import React, {PureComponent} from 'react';
import Container from '../components/Container/Container';
import EventListView from "../components/EventListView/EventListView";

class EventList extends PureComponent {

	/**
	 * The render method.
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<Container>
				<EventListView navigation={this.props.navigation}/>
			</Container>
		);
	}

}

export default EventList;