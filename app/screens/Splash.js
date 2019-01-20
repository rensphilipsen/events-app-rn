import React, { PureComponent } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import OneSignal from 'react-native-onesignal';
import Config from 'react-native-config';
import connect from 'react-redux/es/connect/connect';
import { loadUser } from '../actions/users';

class Splash extends PureComponent {

    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
        OneSignal.init(Config.ONESIGNAL_APP_ID);

        this.bootstrapAsync();
    }

    /**
     * When component is  mounted
     */
    componentDidMount() {
        SplashScreen.hide();
    }

    /**
     * Async method for bootstrapping
     *
     * @returns {Promise<void>}
     */
    bootstrapAsync = async () => {
        const token = await AsyncStorage.getItem('access_token');

        if (token)
            this.props.loadUser();

        this.props.navigation.navigate(token ? 'Main' : 'Register');
    };

    /**
     * The render method.
     *
     * @returns {*}
     */
    render() {
        return (
            <View>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}

/**
 * All the VALUES from the Redux store that should be available within the props of this component
 *
 * @param state
 * @returns {{}}
 */
const mapStateToProps = state => {
    return {}
};

/**
 * All the METHODS from the Redux store that should be available within the props of this component
 *
 * @type {{loadUser: loadUser}}
 */
const mapDispatchToProps = {
    loadUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash)