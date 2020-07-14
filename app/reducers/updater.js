// MODULES //

import * as types from 'constants/editor_actions.js';


// VARIABLES //

const initialState = {
	updateDownloadPercent: null,
	updateStatus: null,
	updateInfo: null
};


// EXPORTS //

export default function updater( state = initialState, action ) {
	switch ( action.type ) {
	case types.DOWNLOAD_PROGRESS:
		return {
			...state,
			updateDownloadPercent: action.payload.percent,
			updateStatus: 'downloading'
		};
	case types.UPDATE_DOWNLOADED:
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
