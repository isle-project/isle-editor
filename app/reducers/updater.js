// MODULES //

import * as types from 'constants/editor_actions.js';


// VARIABLES //

const initialState = {
	downloadPercent: null
};


// EXPORTS //

export default function updater( state = initialState, action ) {
	switch ( action.type ) {
	case types.DOWNLOAD_PROGRESS:
		console.log( 'REDUCER DOWNLOAD PROGRESS' );
		return {
			...state,
			downloadPercent: action.payload.percent
		};
	default:
		return state;
	}
}
