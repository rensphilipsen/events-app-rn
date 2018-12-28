import React, {PureComponent} from 'react';
import {FlatList} from 'react-native';
import Row from '../Row/Row';
import {connect} from 'react-redux';

class EventListView extends PureComponent {

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
	return {
		events: state.events[0].events.data
	};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EventListView);
