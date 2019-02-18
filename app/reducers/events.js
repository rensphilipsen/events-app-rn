export function eventsHasErrored(state = false, action) {
    switch (action.type) {
        case 'EVENTS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function eventsIsLoading(state = true, action) {
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

        case 'EVENTS_MEDIA_UPLOAD_SUCCESS':
            return state.map((item) => {
                if (item.id !== action.id) {
                    return item
                }

                return {
                    ...item,
                    ...action.item
                }
            });

        default:
            return state;
    }
}

export function eventsSelected(state = null, action) {
    switch (action.type) {
        case 'EVENTS_SELECTED_SUCCESS':
            return action.event;

        default:
            return state;
    }
}
