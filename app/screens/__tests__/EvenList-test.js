// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

/**
 * Sample React Native Snapshot Test
 */

'use strict';

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import EventList from "../EventList";

jest.setTimeout(15000);

it('renders correctly', () => {
	const tree = renderer.create(<EventList/>).toJSON();
	expect(tree).toMatchSnapshot();
});