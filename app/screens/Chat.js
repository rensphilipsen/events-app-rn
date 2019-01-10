import React, {PureComponent} from 'react';
import {GiftedChat} from 'react-native-gifted-chat'
import moment from "moment";

class Chat extends PureComponent {
	state = {
		messages: [],
	};

	componentWillMount() {
		this.setState({
			messages: [
				{
					_id: 1,
					text: 'Hello',
					createdAt: moment('2018-12-12 00:00:00').format('Y-M-D HH:mm'),
					user: {
						_id: 2,
						name: 'React Native',
						avatar: 'https://placeimg.com/140/140/any',
					},
				},
			],
		})
	}

	onSend(messages = []) {
		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, messages),
		}));
	}

	render() {
		return (
			<GiftedChat
				messages={this.state.messages}
				onSend={messages => this.onSend(messages)}
				user={{
					_id: 1,
				}}
			/>
		)
	}
}

export default Chat