import React, { PureComponent } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import Barcode from 'react-native-barcode-builder';
import { FONT } from '../styles/theme';
import { getMeta } from '../utils/Helpers';
import ListItemText from '../components/ListItemText/ListItemText';
import Timetable from '../components/Timetable/Timetable';

class ListItemDetail extends PureComponent {

    /**
     * Component specific navigationOptions
     *
     * @type {{header: null}}
     */
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('title'),
            headerTitleStyle: {
                fontFamily: FONT.REGULAR
            },
        };
    };

    /**
     * Renders the default view
     *
     * @param event
     * @param meta
     * @returns {*}
     */
    static renderDefaultView(event, meta) {
        const data = getMeta(event, meta);
        return (
            <ListItemText>{data}</ListItemText>
        );
    };

    /**
     * Renders the ticket view
     *
     * @param event
     * @returns {*}
     */
    static renderTicketView(event) {
        return (
            <View style={{alignSelf: 'center'}}>
                <Barcode height={200}
                         width={3}
                         value={event.code}
                         format="CODE128"/>
            </View>);
    };

    /**
     * Renders
     *
     * @param event
     * @param meta
     * @returns {*}
     */
    static renderTimetableView(event, meta) {
        const data = JSON.parse(getMeta(event, meta));
        const {height} = Dimensions.get('window');
        return (
            <Timetable items={data} height={height - 160}/>
        );
    };

    /**
     * Render content based on selected meta (e.g. ticket or description)
     *
     * @param event
     * @param meta
     * @returns {*}
     */
    static renderContent(event, meta) {
        switch (meta) {
            case 'ticket':
                return ListItemDetail.renderTicketView(event);

            case 'timetable':
                return ListItemDetail.renderTimetableView(event, meta);

            default:
                return ListItemDetail.renderDefaultView(event, meta);
        }
    };

    /**
     * The render method.
     *
     * @returns {*}
     */
    render() {
        const {navigation} = this.props;
        const event = navigation.getParam('event');
        const meta = navigation.getParam('meta');

        return (
            <ScrollView style={{flex: 1}}>
                {ListItemDetail.renderContent(event, meta)}
            </ScrollView>);
    }
}

export default ListItemDetail