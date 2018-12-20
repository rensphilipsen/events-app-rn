import React, {PureComponent} from 'react';
import {StatusBar, View} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import theme from "../styles/theme";

class Scan extends PureComponent {

	onSuccess = (res) => {
		console.log(res);
		const {navigate} = this.props.navigation;
		navigate('Register');
	};

	render() {
		return (
			<View style={theme.introWrapper}>
				<StatusBar barStyle={'light-content'}/>
				<QRCodeScanner
					onRead={this.onSuccess.bind(this)}
				/>
			</View>
		)
	}
}

export default Scan