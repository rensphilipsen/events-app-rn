// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

/**
 * Sample React Native Snapshot Test
 */

'use strict';

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import EventList from "../EventList";
import ShallowRenderer from 'react-test-renderer/shallow';

jest.setTimeout(15000);

it('renders correctly', () => {
	const renderer = new ShallowRenderer();
	renderer.render(<EventList/>);
	const tree = renderer.getRenderOutput();
	expect(tree).toMatchSnapshot();
});