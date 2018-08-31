import {applyMiddleware, createStore} from 'redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import logger from 'redux-logger'
import reducer from '../reducers'

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    responseType: 'json'
});

const middleware = [
    axiosMiddleware(client),
    logger
];

export default createStore(reducer, applyMiddleware(...middleware));
