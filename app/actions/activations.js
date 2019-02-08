import { client } from '../index';

// ACTIONS
export function activationValidated(activation) {
    return {
        type: 'ACTIVATIONS_VALIDATED',
        activation
    };
}

export function activationLoading(bool) {
    return {
        type: 'ACTIVATIONS_LOADING',
        activationLoading: bool
    };
}

// ACTION CREATORS
export function checkActivation(code) {
    return dispatch => {
        dispatch(activationLoading(true));

        return client.post('/activations/validate', {
            code: code
        }).then((data) => dispatch(activationValidated(data.data)))
            .catch(() => dispatch(activationValidated(false)))
            .done(() => dispatch(activationLoading(false)));
    }
}