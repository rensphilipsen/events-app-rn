import {client} from "../index";
import {getAllEvents} from "./events";
import {AsyncStorage} from "react-native";

export function userCreated(user) {
	return {
		type: 'USERS_CREATED',
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
			dispatch(userCreated(data.data.data));

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
				return dispatch(userCreated(false))
			});
		}).catch(() => {
			dispatch(userLoading(false));
			return dispatch(userCreated(false))
		})
	}
}