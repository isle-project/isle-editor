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
		let increment = 0;
		if (
			lintErrors.length !== state.lintErrors.length ||
			!lintErrors.every( ( v, i ) => v.startLineNumber === state.lintErrors[ i ].startLineNumber )
		) {
			increment += 1;
		}
		lintErrors.revision = ( state.lintErrors.revision || 0 ) + increment;
		return {
			...state,
			lintErrors
		};
	}
	case types.SPELLING_ERRORS: {
		const spellingErrors = action.payload.errors;
		let increment = 0;
		if (
			spellingErrors.length !== state.spellingErrors.length ||
			!spellingErrors.every( ( v, i ) => v.startLineNumber === state.spellingErrors[ i ].startLineNumber )
		) {
			increment += 1;
		}
		spellingErrors.revision = ( state.spellingErrors.revision || 0 ) + increment;
		return {
			...state,
			spellingErrors
		};
	}
	default:
		return state;
	}
}
