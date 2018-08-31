import React, {PureComponent} from 'react';
import Container from '../components/Container/Container';
import {Image, Text} from 'react-native';

class EventDetail extends PureComponent {

    render() {
        const {params} = this.props.navigation.state;
        const item = params.item;

        return (
            <Container>
                <Image
                    ImageResizeMode={'cover'}
                    style={{height: 200, width: '100%'}}
                    source={{uri: item.url}}
                />
                <Text>{item.title}</Text>
            </Container>
        );
    }
}

export default (EventDetail);