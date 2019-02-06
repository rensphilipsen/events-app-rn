import { client } from '../index';

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

export function eventsMediaUploadSuccess(event) {
    return {
        type: 'EVENTS_MEDIA_UPLOAD_SUCCESS',
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

export function addMediaToEvent(eventId, media) {
    return (dispatch) => {
        dispatch(eventsIsLoading(true));

        const formData = new FormData();
        formData.append('media', {
            uri: media.uri,
            type: media.type ? media.type : 'image/jpeg',
            name: media.fileName ? media.fileName : 'test.jpg',
            data: media.data
        });

        return client.post('/events/' + eventId + '/medias', formData)
            .then((data) => dispatch(eventsMediaUploadSuccess(data.data.data)))
            .catch((error) => {
                console.log(error.response);
                dispatch(eventsHasErrored(true))
            })
            .then(() => dispatch(eventsIsLoading(false)));
    }
}