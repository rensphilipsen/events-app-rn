import React, {PureComponent} from 'react';
import {AsyncStorage, StatusBar, View} from "react-native";
import Button from "../components/Button/Button";
import HeaderText from "../components/HeaderText/HeaderText";
import theme, {COLOR} from "../styles/theme";
import InputText from "../components/InputText/InputText";
import {checkActivation} from "../actions/activations";
import {connect} from "react-redux";
import Loader from "../components/Loader/Loader";

class Login extends PureComponent {

	/**
	 * Constructor
	 *
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			code: '',
			email: '',
			password: '',
			firstTime: false
		};
	}

	/**
	 * When component is  mounted
	 */
	componentDidMount() {
		AsyncStorage.getItem('firstTime').then((firstTime) => {
			if (!firstTime)
				firstTime = true;

			this.setState({firstTime: firstTime});
		})
	}

	/**
	 * When component has updated
	 *
	 * @param prevProps
	 */
	componentDidUpdate(prevProps) {
		if (!this.props.activationLoading) {

			if (this.props.activations['code'])
				this.props.navigation.navigate('Register');

			// TODO: Do error handling
			if (this.props.activations === false)
				console.log('Do error handling')

		}
	}

	/**
	 * Submit the form
	 */
	submit = () => {
		this.props.checkActivation(this.state.code);
	};

	/**
	 * The render method.
	 *
	 * @returns {*}
	 */
	render() {
		const {navigate} = this.props.navigation;

		return (
			<View style={theme.introWrapper}>

				<Loader visible={this.props.activationLoading}/>

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
						onPress={this.submit}/>

				<Button text={'Code scannen'}
						color={COLOR.WHITE}
						backgroundColor={COLOR.PRIMARY_DARKER}
						onPress={() => navigate('Scan')}/>

			</View>
		)
	}
}

/**
 * All the VALUES from the Redux store that should be available within the props of this component
 *
 * @param state
 * @returns {{activationLoading, activations: *}}
 */
const mapStateToProps = state => {
	return {
		activationLoading: state.activationLoading,
		activations: state.activations
	};
};

/**
 * All the METHODS from the Redux store that should be available within the props of this component
 *
 * @type {{checkActivation: checkActivation}}
 */
const mapDispatchToProps = {
	checkActivation
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);