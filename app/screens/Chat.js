import React, { PureComponent } from 'react';
import { Bubble, GiftedChat } from 'react-native-gifted-chat'
import Config from 'react-native-config';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import connect from 'react-redux/es/connect/connect';
import { COLOR } from '../styles/theme';
import Container from '../components/Container/Container';
import 'moment/locale/nl';
import moment from 'moment';

// TODO: Replace this with the actual
const USER_AVATAR = 'https://www.chaarat.com/wp-content/uploads/2017/08/placeholder-user.png';

class Chat extends PureComponent {

    state = {
        messages: [],
    };

    /**
     * When component is  mounted
     */
    componentDidMount() {
        moment.locale('nl');
        this.initChat();
    }

    /**
     * When component has updated
     *
     * @param prevProps
     */
    componentDidUpdate(prevProps) {
        if (prevProps.eventRoomId !== this.props.eventRoomId)
            this.initChat();
    }

    /**
     * Initializes the chat
     */
    initChat() {
        this.setState({messages: []});

        const tokenProvider = new TokenProvider({
            url: Config.CHATKIT_TOKEN_PROVIDER_ENDPOINT,
        });

        const chatManager = new ChatManager({
            instanceLocator: Config.CHATKIT_INSTANCE_LOCATOR,
            userId: this.props.user.email,
            tokenProvider: tokenProvider,
        });

        chatManager
            .connect()
            .then(currentUser => {
                this.currentUser = currentUser;
                this.currentUser.subscribeToRoom({
                    roomId: this.props.eventRoomId,
                    hooks: {
                        onMessage: this.onReceive,
                    },
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    /**
     * On receive of a message
     *
     * @param data
     */
    onReceive = data => {
        const {id, senderId, text, createdAt} = data;
        const incomingMessage = {
            _id: id,
            text: text,
            createdAt: new Date(createdAt),
            user: {
                _id: senderId,
                name: senderId,
                avatar: USER_AVATAR,
            },
        };

        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, incomingMessage),
        }));
    };

    /**
     * On send of message(s)
     *
     * @param messages
     */
    onSend = (messages = []) => {
        messages.forEach(message => {
            this.currentUser
                .sendMessage({
                    text: message.text,
                    roomId: this.props.eventRoomId,
                })
                .then(() => {
                })
                .catch(err => {
                    console.log(err);
                });
        });
    };

    renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: COLOR.WHITE
                    },
                    right: {
                        backgroundColor: COLOR.PRIMARY
                    }
                }}
            />
        )
    }

    /**
     * The render method.
     *
     * @returns {*}
     */
    render() {
        return (
            <Container>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    renderBubble={this.renderBubble}
                    locale={'nl'}
                    user={{
                        _id: this.props.user.email,
                    }}
                />
            </Container>
        )
    }
}

/**
 * All the VALUES from the Redux store that should be available within the props of this component
 *
 * @param state
 * @returns {{eventRoomId: *, user: *}}
 */
const mapStateToProps = state => {
    return {
        user: state.users,
        eventRoomId: state.eventRoomId,
    }
};

/**
 * All the METHODS from the Redux store that should be available within the props of this component
 *
 * @type {{}}
 */
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chat)