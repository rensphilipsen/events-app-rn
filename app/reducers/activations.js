export function activations(state = {}, action) {
	switch (action.type) {
		case 'ACTIVATIONS_VALIDATED':
			return action.activation;

		default:
			return state;
	}
}

export function activationLoading(state = false, action) {
	switch (action.type) {
		case 'ACTIVATIONS_LOADING':
			return action.activationLoading;

		default:
			return state;
	}
}