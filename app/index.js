import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './config/routes';
import store from './config/store';
import axios from 'axios';
import Config from 'react-native-config';
import { AsyncStorage } from 'react-native';

let isRefreshing = false;
let refreshSubscribers = [];

/**
 * Create an client for API requests
 *
 * @type {AxiosInstance}
 */
export const client = axios.create({
    baseURL: Config.API_URL,
    responseType: 'json'
});

export function getUrl(url) {
    return Config.API_URL + '/' + url;
}

client.interceptors.request.use(async (config) => {
    config.headers.authorization = 'Bearer ' + await AsyncStorage.getItem('access_token');
    return config;
});

client.interceptors.response.use(response => {
    return response;
}, error => {
    const {config, response: {status}} = error;
    const originalRequest = config;

    if (status === 401) {
        if (!isRefreshing) {
            isRefreshing = true;
            client.post('/authentication/refresh')
                .then(data => {
                    isRefreshing = false;
                    AsyncStorage.setItem('access_token', data.data.access_token);
                    onRefreshed(data.data.access_token);
                }).catch((err) => console.log(err.request));
        }

        return new Promise((resolve, reject) => {
            subscribeTokenRefresh(token => {
                originalRequest.headers['Authorization'] = 'Bearer ' + token;
                resolve(axios(originalRequest));
            });
        });
    }
    return Promise.reject(error);
});

export function subscribeTokenRefresh(cb) {
    refreshSubscribers.push(cb);
}

export function onRefreshed(token) {
    refreshSubscribers.map(cb => cb(token));
}

export default () => (
    <Provider store={store}>
        <Navigator/>
    </Provider>
);
