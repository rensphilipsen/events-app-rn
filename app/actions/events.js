import {client} from '../index';

export function eventsHasErrored(bool) {
	return {
		type: 'EVENTS_HAS_ERRORED',
		hasErrored: bool
	};
}

export function eventsIsLoading(bool) {
	return {
		type: 'EVENTS_IS_LOADING',
		isLoading: bool
	};
}

export function eventsFetchSuccess(event) {
	return {
		type: 'EVENTS_FETCH_SUCCESS',
		event
	};
}

export function getAllEvents() {
	return (dispatch) => {
		dispatch(eventsIsLoading(true));

		return client.get('/events')
			.then((data) => dispatch(eventsFetchSuccess(data.data.data)))
			.catch(() => dispatch(eventsHasErrored(true)))
			.then(() => dispatch(eventsIsLoading(false)));
	}
}