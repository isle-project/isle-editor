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
			updateDownloadPercent: action.payload.percent
		};
	case types.UPDATE_DOWNLOADED:
		return {
			...state,
			updateStatus: 'downloaded'
		};
	case types.UPDATE_AVAILABLE:
		return {
			...state,
			updateStatus: 'available',
			updateInfo: action.payload.info
		};
	case types.UPDATE_DOWNLOADING:
		return {
			...state,
			updateStatus: 'downloading'
		};
	default:
		return state;
	}
}
