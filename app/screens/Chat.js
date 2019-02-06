// @flow
import React, { PureComponent } from 'react';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import Fire from '../utils/Fire';
import connect from 'react-redux/es/connect/connect';
import { COLOR } from '../styles/theme';

class Chat extends PureComponent {

    /**
     * Local state
     *
     * @type {{messages: Array}}
     */
    state = {
        messages: [],
    };

    /**
     * Component did mount
     */
    componentDidMount() {
        new Fire(this.props.user.email).on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }

    /**
     * Component should unmount
     */
    componentWillUnmount() {
        new Fire(this.props.user.email).off();
    }

    /**
     * Fetch user from redux store
     *
     * @returns {{name: *, _id: string | string}}
     */
    get user() {
        return {
            name: this.props.user.name,
            _id: this.props.user.email,
        };
    }

    renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: COLOR.PRIMARY
                    },
                }}
            />
        );
    };

    /**
     * Render method.
     *
     * @returns {*}
     */
    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={new Fire(this.props.user.email).send}
                renderBubble={this.renderBubble}
                locale={'nl'}
                user={this.user}
            />
        );
    }
}

/**
 * All the VALUES from the Redux store that should be available within the props of this component
 *
 * @param state
 * @returns {{user: *}}
 */
const mapStateToProps = state => {
    return {
        user: state.users
    };
};

/**
 * All the METHODS from the Redux store that should be available within the props of this component
 */
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chat)