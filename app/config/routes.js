import EventList from '../screens/EventList';
import EventDetail from '../screens/EventDetail';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import React from 'react';
import Chat from '../screens/Chat';
import {Icon} from "react-native-elements";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Splash from "../screens/Splash";
import Scan from "../screens/Scan";
import {COLOR, FONT} from "../styles/theme";

const mainNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: createStackNavigator({
				EventDetail: {screen: EventDetail},
				EventList: {screen: EventList},
			}, {
				headerMode: 'none',
			}),
			navigationOptions: {
				tabBarIcon: ({tintColor}) => (
					<Icon name="home" color={tintColor}/>
				),
				headerTransparent: true
			},
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
				fontFamily: FONT.BOLD
			},
			activeTintColor: COLOR.PRIMARY,
			style: {
				backgroundColor: COLOR.WHITE,
				shadowColor: COLOR.SHADOW,
				shadowRadius: 5,
				shadowOpacity: 0.1,
				borderTopWidth: 0,
			},
			iconStyle: {
				flexGrow: 0,
				marginTop: 1.5
			}
		}
	}
);

const registerNavigator = createStackNavigator(
	{
		Login: Login,
		Scan: Scan,
		Register: Register
	},
	{
		navigationOptions: {
			headerTransparent: true,
			headerTintColor: 'white',
			headerBackTitle: 'TERUG',
			headerBackTitleStyle: {
				fontFamily: FONT.BOLD,
				fontSize: 18
			}
		}
	}
);

export default createSwitchNavigator({
	Splash: Splash,
	Register: registerNavigator,
	Main: mainNavigator
}, {
	initialRouteName: 'Splash'
});


