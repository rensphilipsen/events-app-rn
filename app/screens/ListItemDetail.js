import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import ListItemText from '../components/ListItemText/ListItemText';

class ListItemDetail extends PureComponent {

    /**
     * The render method.
     *
     * @returns {*}
     */
    render() {
        const {navigation} = this.props;
        const description = navigation.getParam('data');


        return (
            <ScrollView>
                <ListItemText>
                    {description}
                </ListItemText>
            </ScrollView>);
    }
}

export default ListItemDetail