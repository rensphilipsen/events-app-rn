import React, {PureComponent} from 'react';
import {StatusBar, View} from "react-native";
import HeaderText from "../components/HeaderText/HeaderText";
import Button from "../components/Button/Button";
import theme, {COLOR} from "../styles/theme";
import connect from "react-redux/es/connect/connect";
import InputText from "../components/InputText/InputText";

class Register extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
		};
	}

	render() {
		return (
			<View style={theme.introWrapper}>
				<StatusBar barStyle="light-content"/>

				<HeaderText/>

				<InputText
					borderColor={COLOR.PRIMARY_DARKER}
					color={COLOR.WHITE}
					value={this.props.activations['email']}
					editable={false}
				/>

				<InputText
					borderColor={COLOR.PRIMARY_DARKER}
					color={COLOR.WHITE}
					value={this.state.name}
					placeholder={'Vul uw naam in...'}
					onChange={(name) => this.setState({name})}
				/>

				<InputText
					borderColor={COLOR.PRIMARY_DARKER}
					color={COLOR.WHITE}
					value={this.state.password}
					placeholder={'Vul uw wachtwoord in...'}
					secureTextEntry={true}
					onChange={(password) => this.setState({password})}
				/>


				<Button text={'Voltooien'}
						color={COLOR.WHITE}
						backgroundColor={COLOR.SECONDARY}
						onPress={this.submit}/>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		activations: state.activations
	};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Register);