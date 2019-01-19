// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

/**
 * Sample React Native Snapshot Test
 */

'use strict';

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import ShallowRenderer from 'react-test-renderer/shallow';
import Chat from '../Chat';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'


jest.setTimeout(15000);

it('renders correctly', () => {
	const middlewares = [thunk];
	const mockStore = configureStore(middlewares);

	const renderer = new ShallowRenderer();
	const store = mockStore({});

	renderer.render(<Chat store={store}/>);
	const tree = renderer.getRenderOutput();
	expect(tree).toMatchSnapshot();
});