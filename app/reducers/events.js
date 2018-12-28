export function eventsHasErrored(state = false, action) {
	switch (action.type) {
		case 'EVENTS_HAS_ERRORED':
			return action.hasErrored;

		default:
			return state;
	}
}

export function eventsIsLoading(state = false, action) {
	switch (action.type) {
		case 'EVENTS_IS_LOADING':
			return action.isLoading;

		default:
			return state;
	}
}

export function events(state = [], action) {
	switch (action.type) {
		case 'EVENTS_FETCH_SUCCESS':
			return action.event;

		default:
			return state;
	}
}