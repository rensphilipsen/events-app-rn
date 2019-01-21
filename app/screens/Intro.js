import React, { PureComponent } from 'react';
import { StatusBar, View } from 'react-native';
import Button from '../components/Button/Button';
import HeaderText from '../components/HeaderText/HeaderText';
import theme, { COLOR } from '../styles/theme';
import Loader from '../components/Loader/Loader';

class Intro extends PureComponent {

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

                <Button text={'Inloggen'}
                        color={COLOR.WHITE}
                        backgroundColor={COLOR.SECONDARY}
                        onPress={() => navigate('Login')}/>

                <Button text={'Registreren'}
                        color={COLOR.WHITE}
                        backgroundColor={COLOR.PRIMARY_DARKER}
                        onPress={() => navigate('Register')}/>

            </View>
        )
    }
}

export default Intro