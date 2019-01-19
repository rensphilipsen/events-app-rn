export function users(state = {}, action) {
    switch (action.type) {
        case 'USERS_LOADED':
            return action.user;

        default:
            return state;
    }
}

export function userLoading(state = false, action) {
    switch (action.type) {
        case 'USERS_LOADING':
            return action.userLoading;

        default:
            return state;
    }
}