import { client } from '../index';
import { getAllEvents } from './events';
import { AsyncStorage } from 'react-native';

export function userLoaded(user) {
    return {
        type: 'USERS_LOADED',
        user
    };
}

export function userLoading(bool) {
    return {
        type: 'USERS_LOADING',
        userLoading: bool
    };
}

export function createUser(user) {
    return dispatch => {
        dispatch(userLoading(true));

        return client.post('/users', {
            ...user
        }).then((data) => {
            dispatch(userLoaded(data.data.data));

            client.post('/authentication/login', {
                email: user.email,
                password: user.password
            }).then((data) => {
                return AsyncStorage.setItem('access_token', data.data.access_token).then(() => {
                    return dispatch(getAllEvents()).then(() => {
                        dispatch(userLoading(false));
                    });
                })
            }, () => {
                dispatch(userLoading(false));
                return dispatch(userLoaded(false))
            });
        }).catch(() => {
            dispatch(userLoading(false));
            return dispatch(userLoaded(false))
        })
    }
}

export function loginUser(email, password) {
    return dispatch => {
        dispatch(userLoading(true));

        client.post('/authentication/login', {
            email: email,
            password: password
        }).then((data) => {
            console.log(data);
            return AsyncStorage.setItem('access_token', data.data.access_token).then(() => {
                dispatch(loadUser());
                return dispatch(getAllEvents()).then(() => {
                    dispatch(userLoading(false));
                });
            })
        }, (err) => {

            console.log(err.response);
            dispatch(userLoading(false));
            return dispatch(userLoaded(false))
        });
    }
}

export function loadUser() {
    return dispatch => {
        dispatch(userLoading(true));

        client.get('/authentication/me').then((data) => {
            dispatch(userLoading(false));
            dispatch(userLoaded(data.data));
        }).catch(() => {
            dispatch(userLoading(false));
            return dispatch(userLoaded(false))
        });
    }
}