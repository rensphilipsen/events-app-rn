import React, { PureComponent } from 'react';
import { StatusBar, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import theme from '../styles/theme';

class RegisterScan extends PureComponent {

    /**
     * If the code was successfully scanned.
     */
    onSuccess = () => {
        const {navigate} = this.props.navigation;
        navigate('RegisterUser');
    };

    /**
     * The render method.
     *
     * @returns {*}
     */
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

export default RegisterScan