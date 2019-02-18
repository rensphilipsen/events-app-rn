import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Container from '../components/Container/Container';
import { Image, View } from 'react-native';
import ProgressiveImage from '../components/ProgressiveImage/ProgressiveImage';
import { getUrl } from '../utils/Helpers';

class Profile extends PureComponent {

    renderProfilePicture() {
        console.log(this.props.user);

        const picture = getUrl(this.props.user.profile_picture);
        const thumbPicture = getUrl(this.props.user.thumb_profile_picture);

        if (picture && thumbPicture)
            return <ProgressiveImage thumbnailSource={{uri: thumbPicture}}
                                     source={props.source}/>;
        else
            return <Image source={require('../../assets/placeholder_user.png')}/>;

    }

    /**
     * The render method.
     *
     * @returns {*}
     */
    render() {
        return (
            <Container>
                <View>
                    {this.renderProfilePicture()}
                </View>
            </Container>
        );
    }

}

const mapStateToProps = state => {
    return {
        user: state.users
    };
};

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
