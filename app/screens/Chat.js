import React, { PureComponent } from 'react';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import connect from 'react-redux/es/connect/connect';
import { COLOR } from '../styles/theme';
import firebase from 'react-native-firebase';

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

    get channelName() {
        const event = this.props.eventsSelected;
        return event.type + '_' + event.id;
    }

    /**
     * Component did mount
     */
    componentDidMount() {
        this.ref = firebase.database().ref(this.channelName + '_messages');
        this.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }

    /**
     * Component will unmount
     */
    componentWillUnmount() {
        this.ref.off();
    }

    /**
     * Render the bubble to change style
     *
     * @param props
     * @returns {*}
     */
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
     * Parse data on change
     *
     * @param snapshot
     * @returns {{_id: *, text, user, timestamp: Date}}
     */
    parse = snapshot => {
        const {timestamp: numberStamp, text, user} = snapshot.val();
        const {key: _id} = snapshot;
        const timestamp = new Date(numberStamp);
        return {
            _id,
            timestamp,
            text,
            user,
        };
    };

    /**
     * Listen for items
     *
     * @param callback
     * @returns {(a: (database.DataSnapshot | null), b?: string) => QuerySuccessCallback}
     */
    on = callback =>
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));

    /**
     * Send a message
     *
     * @param messages
     */
    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const {text, user} = messages[i];

            user._id = this.props.user.email;

            const message = {
                text,
                user,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
            };
            this.ref.push(message);
        }
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
                onSend={this.send}
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
        user: state.users,
        eventsSelected: state.eventsSelected
    };
};

/**
 * All the METHODS from the Redux store that should be available within the props of this component
 */
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chat)