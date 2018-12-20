import React, {PureComponent} from 'react';
import {FlatList} from 'react-native';
import Row from '../Row/Row';
import {getAllEvents} from '../../reducers/events';
import {connect} from 'react-redux';

class EventListView extends PureComponent {
	componentDidMount() {
		this.props.getAllEvents();
	}

	_keyExtractor = (item) => item.id.toString();

	_renderItem = ({item}) => <Row item={item} navigation={this.props.navigation}/>;

	render() {
		const {events} = this.props;
		return (
			<FlatList
				style={{width: '100%'}}
				data={events}
				keyExtractor={this._keyExtractor}
				renderItem={this._renderItem}
			/>
		);
	}

}

const mapStateToProps = state => {
	const storedEvents = state.events.events.map(event => ({key: event.id, ...event}));
	return {events: storedEvents};
};

const mapDispatchToProps = {
	getAllEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(EventListView);
