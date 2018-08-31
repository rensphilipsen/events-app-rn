export const ALL_EVENTS = 'ALL_EVENTS';
export const ALL_EVENTS_SUCCESS = 'ALL_EVENTS_SUCCESS';
export const ALL_EVENTS_FAIL = 'ALL_EVENTS_FAIL';

// Reducer
export default function reducer(state = {events: []}, action) {
    switch (action.type) {
        case ALL_EVENTS:
            return {...state, loading: true};
        case ALL_EVENTS_SUCCESS:
            return {...state, loading: false, events: action.payload.data};
        case ALL_EVENTS_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching events'
            };
        default:
            return state;
    }
}

// Action
export function getAllEvents() {
    return {
        type: ALL_EVENTS,
        payload: {
            request: {
                url: '/albums/1/photos'
            }
        }
    }
}