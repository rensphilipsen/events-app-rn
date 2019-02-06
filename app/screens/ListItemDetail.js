import React, { PureComponent } from 'react';
import { ScrollView, View } from 'react-native';
import ListItemText from '../components/ListItemText/ListItemText';
import Barcode from 'react-native-barcode-builder';
import { FONT } from '../styles/theme';

class ListItemDetail extends PureComponent {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('title'),
            headerTitleStyle: {
                fontFamily: FONT.REGULAR
            },
        };
    };

    /**
     * Render content based on boolean
     *
     * @param isTicket
     * @param data
     * @returns {*}
     */
    renderContent(isTicket, data) {
        if (isTicket)
            return (
                <View style={{alignSelf: 'center'}}>
                    <Barcode height={200} width={3} value={data} format="CODE128"/>
                </View>);
        else
            return <ListItemText>{data}</ListItemText>;
    }

    /**
     * The render method.
     *
     * @returns {*}
     */
    render() {
        const {navigation} = this.props;
        const isTicket = navigation.getParam('isTicket');
        const data = navigation.getParam('data');

        return (
            <ScrollView style={{flex: 1}}>
                {this.renderContent(isTicket, data)}
            </ScrollView>);
    }
}

export default ListItemDetail