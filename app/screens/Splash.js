import React, {PureComponent} from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

class Splash extends PureComponent {

	constructor(props) {
		super(props);
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