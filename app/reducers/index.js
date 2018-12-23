import {combineReducers} from 'redux';
import {events, eventsHasErrored, eventsIsLoading} from "./events";
import {activationLoading, activations} from "./activations";

export default combineReducers({
	events,
	eventsIsLoading,
	eventsHasErrored,
	activations,
	activationLoading
});
