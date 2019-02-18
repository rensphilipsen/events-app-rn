import React, { PureComponent } from 'react';
import { StatusBar, View } from 'react-native';
import HeaderText from '../components/HeaderText/HeaderText';
import Button from '../components/Button/Button';
import theme, { COLOR } from '../styles/theme';
import connect from 'react-redux/es/connect/connect';
import InputText from '../components/InputText/InputText';
import { loginUser } from '../actions/users';
import Loader from '../components/Loader/Loader';

class Login extends PureComponent {

    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    /**
     * When component has updated
     *
     * @param prevProps
     */
    componentDidUpdate(prevProps) {

        if (!this.props.userLoading) {

            if (this.props.users['email'])
                this.props.navigation.navigate('Home');

            // TODO: Do error handling
            if (this.props.users === false)
                console.log('Do error handling')

        }
    }

    /**
     * Submit the form
     */
    submit = () => {
        this.props.loginUser(this.state.email, this.state.password);
    };

    /**
     * The render method.
     *
     * @returns {*}
     */
    render() {
        return (
            <View style={theme.introWrapper}>
                <StatusBar barStyle="light-content"/>

                <Loader visible={this.props.userLoading}/>

                <HeaderText/>

                <InputText
                    borderColor={COLOR.PRIMARY_DARKER}
                    color={COLOR.WHITE}
                    value={this.state.email}
                    placeholder={'Vul uw email in...'}
                    onChange={(email) => this.setState({email})}
                />

                <InputText
                    borderColor={COLOR.PRIMARY_DARKER}
                    color={COLOR.WHITE}
                    value={this.state.password}
                    placeholder={'Vul uw wachtwoord in...'}
                    secureTextEntry={true}
                    onChange={(password) => this.setState({password})}
                />


                <Button text={'Inloggen'}
                        color={COLOR.WHITE}
                        backgroundColor={COLOR.SECONDARY}
                        onPress={this.submit}/>
            </View>
        )
    }
}

/**
 * All the VALUES from the Redux store that should be available within the props of this component
 * @param state
 * @returns {{userLoading, activations: *, users: *}}
 */
const mapStateToProps = state => {
    return {
        userLoading: state.userLoading,
        users: state.users
    };
};

/**
 * All the METHODS from the Redux store that should be available within the props of this component
 *
 * @type {{createUser: createUser}}
 */
const mapDispatchToProps = {
    loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);