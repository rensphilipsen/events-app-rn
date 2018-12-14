// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

/**
 * Sample React Native Snapshot Test
 */

'use strict';

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import ShallowRenderer from 'react-test-renderer/shallow';
import Chat from "../Chat";
import moment from 'moment';

jest.setTimeout(15000);

it('renders correctly', () => {
	const messages = [
		{
			_id: 1,
			text: 'Hello developer',
			createdAt: moment('2018-12-12 00:00:00').format('Y-M-D HH:mm'),
			user: {
				_id: 2,
				name: 'React Native',
				avatar: 'https://placeimg.com/140/140/any',
			}
		}
	];


	const renderer = new ShallowRenderer();
	renderer.render(<Chat messages={messages}/>);
	const tree = renderer.getRenderOutput();
	expect(tree).toMatchSnapshot();
});