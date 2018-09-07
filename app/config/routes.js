import EventList from '../screens/EventList';
import EventDetail from '../screens/EventDetail';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import React from 'react';
import Chat from "../screens/Chat";

export default createBottomTabNavigator(
    {
        Home: {
            screen: createStackNavigator({
                EventDetail: {screen: EventDetail},
                EventList: {screen: EventList},
            }, {
                headerMode: 'none'
            }),
        },
        Chat: {
            screen: Chat
        }
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            showIcon: true,
            labelStyle: {
                fontSize: 12,
                fontFamily: 'RobotoCondensed-Bold'
            },
            style: {
                shadowColor: 'black',
                shadowRadius: 5,
                shadowOpacity: 0.1,
                backgroundColor: '#ffffff',
                borderTopWidth: 0,
            },
            iconStyle: {
                flexGrow: 0,
                marginTop: 1.5
            }
        }
    }
);


