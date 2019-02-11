import { combineReducers } from 'redux';
import { events, eventsHasErrored, eventsIsLoading, eventsSelected } from './events';
import { activationLoading, activations } from './activations';
import { userLoading, users } from './users';

export default combineReducers({
    events,
    eventsIsLoading,
    eventsHasErrored,
    eventsSelected,
    activations,
    activationLoading,
    users,
    userLoading
});
