import React, {PureComponent} from 'react';
import {StatusBar, TextInput, View} from "react-native";
import HeaderText from "../components/HeaderText/HeaderText";
import Button from "../components/Button/Button";
import theme, {COLOR, FONT} from "../styles/theme";

class Register extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {code: ''};
	}

	render() {
		return (
			<View style={theme.introWrapper}>
				<StatusBar barStyle="light-content"/>

				<HeaderText/>

				<TextInput
					style={{
						height: 40,
						borderColor: COLOR.WHITE,
						borderBottomWidth: 1,
						width: '80%',
						fontFamily: FONT.REGULAR,
						color: COLOR.WHITE,
						textAlign: 'center',
						fontSize: 24,
						margin: 20,
					}}
					onChangeText={(code) => this.setState({code})}
					value={this.state.code}
					selectionColor={COLOR.WHITE}
					placeholder={'Voer uw unieke code in...'}
				/>

				<Button text={'Voltooien'}
						color={COLOR.WHITE}
						backgroundColor={COLOR.SECONDARY}/>
			</View>
		)
	}
}

export default Register