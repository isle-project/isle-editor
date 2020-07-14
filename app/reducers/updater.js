// MODULES //

import * as types from 'constants/editor_actions.js';


// VARIABLES //

const initialState = {
	downloadPercent: null,
	updateStatus: null,
	updateInfo: null
};


// EXPORTS //

export default function updater( state = initialState, action ) {
	switch ( action.type ) {
	case types.DOWNLOAD_PROGRESS:
		return {
			...state,
			downloadPercent: action.payload.percent
		};
	case types.UPDATE_DOWNLOADED:
		console.log( 'REDUCER DOWNLOAD PROGRESS' );
		return {
			...state,
			updateStatus: 'downloaded'
		};
	case types.UPDATE_AVAILABLE:
		console.log( 'REDUCER DOWNLOAD AVAILABLE' );
		return {
			...state,
			updateStatus: 'available',
			updateInfo: action.payload.info
		};
	default:
		return state;
	}
}
