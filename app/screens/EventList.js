import React, { PureComponent } from 'react';
import Container from '../components/Container/Container';
import { FONT } from '../styles/theme';
import { connect } from 'react-redux';
import Row from '../components/Row/Row';
import { FlatList } from 'react-native';

class EventList extends PureComponent {

    /**
     * Component specific navigationOptions
     *
     * @type {{header: null}}
     */
    static navigationOptions = {
        title: 'Events',
        headerTitleStyle: {
            fontFamily: FONT.REGULAR
        },
    };

    _keyExtractor = (item) => item.id.toString();

    _renderItem = ({item}) => <Row item={item} navigation={this.props.navigation}/>;

    /**
     * The render method.
     *
     * @returns {*}
     */
    render() {
        return (
            <Container>
                <FlatList
                    style={{width: '100%'}}
                    data={this.props.events}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </Container>
        );
    }

}

const mapStateToProps = state => {
    return {
        events: state.events[0].events.data
    };
};

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(EventList);
