import { applyMiddleware, createStore } from 'redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import logger from 'redux-logger'
import reducer from '../reducers'
import Config from 'react-native-config';

const client = axios.create({
    baseURL: Config.API_URL,
    responseType: 'json'
});

const middleware = [
    axiosMiddleware(client),
    logger
];

export default createStore(reducer, applyMiddleware(...middleware));
