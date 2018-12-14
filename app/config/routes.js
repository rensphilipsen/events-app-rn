import EventList from '../screens/EventList';
import EventDetail from '../screens/EventDetail';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import React from 'react';
import Chat from '../screens/Chat';
import {Icon} from "react-native-elements";

export default createBottomTabNavigator(
	{
		Home: {
			screen: createStackNavigator({
				EventList: {screen: EventList},
				EventDetail: {screen: EventDetail},
			}, {
				headerMode: 'none'
			}),
			navigationOptions: {
				tabBarIcon: ({tintColor}) => (
					<Icon name="home" color={tintColor}/>
				)
			}
		},
		Timeline: {
			screen: Chat,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => (
					<Icon name="timeline" color={tintColor}/>
				)
			}
		},
		Chat: {
			screen: Chat,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => (
					<Icon name="chat" color={tintColor}/>
				)
			}
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
			activeTintColor: '#5e5e82',
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


