// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

/**
 * Sample React Native Snapshot Test
 */

'use strict';

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import EventList from '../EventList';
import ShallowRenderer from 'react-test-renderer/shallow';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

jest.setTimeout(15000);

jest.mock('react-native-qrcode-scanner', () => jest.fn());

it('renders correctly', () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);

    const renderer = new ShallowRenderer();
    const store = mockStore({});

    renderer.render(<EventList store={store}/>);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
});