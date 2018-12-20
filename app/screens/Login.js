import React, {PureComponent} from 'react';
import {StatusBar, View} from "react-native";
import Button from "../components/Button/Button";
import HeaderText from "../components/HeaderText/HeaderText";
import theme, {COLOR} from "../styles/theme";
import InputText from "../components/InputText/InputText";

class Login extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			code: ''
		};
	}

	submit() {

	}

	render() {
		const {navigate} = this.props.navigation;

		return (
			<View style={theme.introWrapper}>
				<StatusBar barStyle="light-content"/>

				<HeaderText/>

				<InputText
					borderColor={COLOR.PRIMARY_DARKER}
					color={COLOR.WHITE}
					placeholder={'Voer uw unieke code in...'}
					value={this.state.code}
					onChange={(code) => this.setState({code})}
				/>

				<Button text={'Verder'}
						color={COLOR.WHITE}
						backgroundColor={COLOR.SECONDARY}
				/>

				<Button text={'Code scannen'}
						color={COLOR.WHITE}
						backgroundColor={COLOR.PRIMARY_DARKER}
						onPress={() => navigate('Scan')}/>
			</View>
		)
	}
}

export default Login