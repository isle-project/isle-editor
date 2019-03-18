// MODULES //

import * as types from 'constants/editor_actions.js';


// VARIABLES //

const initialState = {
	lintErrors: []
};


// EXPORTS //

export default function linting( state = initialState, action ) {
	switch ( action.type ) {
	case types.LINT_ERRORS:
		return {
			...state,
			lintErrors: action.payload.errors
		};
	default:
		return state;
	}
}
