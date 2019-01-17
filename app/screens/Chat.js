import React, {PureComponent} from 'react';
import {GiftedChat} from 'react-native-gifted-chat'
import Config from 'react-native-config';
import {ChatManager, TokenProvider} from '@pusher/chatkit-client';
import connect from "react-redux/es/connect/connect";

class Chat extends PureComponent {

	state = {
		messages: [],
	};

	componentDidMount() {
		this.initChat();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.eventRoomId !== this.props.eventRoomId)
			this.initChat();
	}

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

	onReceive = data => {
		const {id, senderId, text, createdAt} = data;
		const incomingMessage = {
			_id: id,
			text: text,
			createdAt: new Date(createdAt),
			user: {
				_id: senderId,
				name: senderId,
				avatar:
					'https://www.chaarat.com/wp-content/uploads/2017/08/placeholder-user.png',
			},
		};

		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, incomingMessage),
		}));
	};

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

	render() {
		return (
			<GiftedChat
				messages={this.state.messages}
				onSend={messages => this.onSend(messages)}
				user={{
					_id: this.props.user.email,
				}}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.users,
		eventRoomId: state.eventRoomId,
	}
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chat)