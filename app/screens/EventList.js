import React, { PureComponent } from 'react';
import Container from '../components/Container/Container';
import EventListView from '../components/EventListView/EventListView';
import { FONT } from '../styles/theme';

class EventList extends PureComponent {

    static navigationOptions = {
        title: 'Events',
        headerTitleStyle: {
            fontFamily: FONT.REGULAR
        },
    };

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