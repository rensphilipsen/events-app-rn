import {combineReducers} from 'redux';
import {events, eventsHasErrored, eventsIsLoading} from "./events";
import {activationLoading, activations} from "./activations";
import {userLoading, users} from "./users";

export default combineReducers({
	events,
	eventsIsLoading,
	eventsHasErrored,
	activations,
	activationLoading,
	users,
	userLoading
});
