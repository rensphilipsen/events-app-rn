import React, {PureComponent} from 'react';
import FeatureImagePage from "../components/FeatureImagePage/FeatureImagePage";
import ListItem from "../components/ListItem/ListItem";
import ListItemText from "../components/ListItemText/ListItemText";
import {Image, ScrollView, Text} from "react-native";

const TitleStyle = {
    fontSize: 20,
    fontFamily: 'RobotoCondensed-Bold',
    color: '#5e5e82',
    margin: 10
};

const ItemStyle = {
    width: 120,
    height: 120,
    margin: 5,
    shadowColor: '#484848',
    shadowRadius: 5,
    shadowOpacity: 0.1,
    borderRadius: 5,
    shadowOffset: {height: 5},
};

// TODO: Replace this with actual dynamic data
const event = {
    title: 'Bedrijfsborrel',
    date: '7 december 2018',
    image: require('../../assets/featureEvent.jpg')
};

class EventDetail extends PureComponent {

    constructor() {
        super();
        this.state = {showNavTitle: false};
    }

    render() {
        return (
            <FeatureImagePage
                image={event.image}
                title={event.title}
                date={event.date}>

                <Text style={TitleStyle}>{event.title}</Text>

                <ListItem icon={'info'}>
                    <ListItemText>De maandelijkse borrel staat weer op ...</ListItemText>
                </ListItem>

                <ListItem icon={'phone'}>
                    <ListItemText>+31 6 36 50 11 91</ListItemText>
                </ListItem>

                <ListItem contentStyle={{flex: 1, flexDirection: 'row'}}>
                    <ScrollView horizontal={true}>
                        <Image style={ItemStyle} source={require('../../assets/event1.jpg')}/>
                        <Image style={ItemStyle} source={require('../../assets/event2.jpg')}/>
                        <Image style={ItemStyle} source={require('../../assets/event3.jpg')}/>
                    </ScrollView>
                </ListItem>
            </FeatureImagePage>
        );
    }
}

export default (EventDetail);