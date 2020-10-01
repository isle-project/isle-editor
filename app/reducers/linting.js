// MODULES //

import * as types from 'constants/editor_actions.js';


// VARIABLES //

const initialState = {
	lintErrors: [],
	spellingErrors: []
};


// EXPORTS //

export default function linting( state = initialState, action ) {
	switch ( action.type ) {
	case types.LINT_ERRORS: {
		const lintErrors = action.payload.errors;
		lintErrors.revision = ( state.lintErrors.revision || 0 ) + 1;
		return {
			...state,
			lintErrors
		};
	}
	case types.SPELLING_ERRORS: {
		const spellingErrors = action.payload.errors;
		spellingErrors.revision = ( state.spellingErrors.revision || 0 ) + 1;
		return {
			...state,
			spellingErrors
		};
	}
	default:
		return state;
	}
}
