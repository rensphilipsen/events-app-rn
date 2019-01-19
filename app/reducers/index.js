import { combineReducers } from 'redux';
import { eventRoomId, events, eventsHasErrored, eventsIsLoading } from './events';
import { activationLoading, activations } from './activations';
import { userLoading, users } from './users';

export default combineReducers({
    events,
    eventRoomId,
    eventsIsLoading,
    eventsHasErrored,
    activations,
    activationLoading,
    users,
    userLoading
});
