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

export function eventsFetchSuccess(events) {
	return {
		type: 'EVENTS_FETCH_SUCCESS',
		events
	};
}

export function getAllEvents() {
	return (dispatch) => {
		dispatch(eventsIsLoading(true));

		return client.get('/events')
			.then((data) => dispatch(eventsFetchSuccess(data.data.data)))
			.catch((err) => dispatch(eventsHasErrored(err)))
			.then(() => dispatch(eventsIsLoading(false)));
	}
}