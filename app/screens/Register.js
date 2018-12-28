import React, {PureComponent} from 'react';
import {StatusBar, View} from "react-native";
import HeaderText from "../components/HeaderText/HeaderText";
import Button from "../components/Button/Button";
import theme, {COLOR} from "../styles/theme";
import connect from "react-redux/es/connect/connect";
import InputText from "../components/InputText/InputText";
import {createUser} from "../actions/users";
import Loader from "../components/Loader/Loader";

class Register extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			name: '',
			password: '',
		};
	}

	componentDidUpdate(prevProps) {

		if (!this.props.userLoading) {

			if (this.props.users['email'])
				this.props.navigation.navigate('Home');

			// TODO: Do error handling
			if (this.props.users === false)
				console.log('Do error handling')

		}
	}

	componentDidMount() {
		this.setState({email: this.props.activations['email']});
	}

	submit = () => {
		this.props.createUser(this.state);
	};

	render() {
		return (
			<View style={theme.introWrapper}>
				<StatusBar barStyle="light-content"/>

				<Loader visible={this.props.userLoading}/>

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
		activations: state.activations,
		userLoading: state.userLoading,
		users: state.users
	};
};

const mapDispatchToProps = {
	createUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);