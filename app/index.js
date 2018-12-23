import React from 'react';
import {Provider} from 'react-redux';
import Navigator from './config/routes';
import store from './config/store';
import axios from "axios";
import Config from 'react-native-config';

export const client = axios.create({
	baseURL: Config.API_URL,
	responseType: 'json'
});

export default () => (
	<Provider store={store}>
		<Navigator/>
	</Provider>
);
