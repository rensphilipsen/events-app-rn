import React, {PureComponent} from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import OneSignal from "react-native-onesignal";
import Config from 'react-native-config';

class Splash extends PureComponent {

	constructor(props) {
		super(props);
		OneSignal.init(Config.ONESIGNAL_APP_ID);
		this.bootstrapAsync();
	}

	componentDidMount() {
		SplashScreen.hide();
	}

	bootstrapAsync = async () => {
		const token = await AsyncStorage.getItem('access_token');
		this.props.navigation.navigate(token ? 'Main' : 'Register');
	};

	render() {
		return (
			<View>
				<ActivityIndicator/>
				<StatusBar barStyle="default"/>
			</View>
		);
	}
}

export default Splash