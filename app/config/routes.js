import EventList from '../screens/EventList';
import EventDetail from '../screens/EventDetail';
import {createStackNavigator, createTabNavigator} from 'react-navigation';
import React from 'react';

export default createTabNavigator(
    {
        Events: {
            screen: createStackNavigator({
                EventList: {screen: EventList},
                EventDetail: {screen: EventDetail}
            }),
        },
    },
    {
        initialRouteName: 'Events',
    }
);


