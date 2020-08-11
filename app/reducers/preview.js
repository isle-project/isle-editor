// MODULES //

import Store from 'electron-store';
import * as types from 'constants/editor_actions.js';


// VARIABLES //

const config = new Store( 'ISLE' );
const initialState = {
	autoUpdatePreview: true,
	showLineButtons: true,
	renderInterval: config.get( 'renderInterval' ) || 2000
};


// EXPORTS //

export default function linting( state = initialState, action ) {
	switch ( action.type ) {
	case types.RENDER_INTERVAL_CHANGED:
		config.set( 'renderInterval', action.payload.renderInterval );
		return {
			...state,
			renderInterval: action.payload.renderInterval
		};
	case types.TOGGLE_LINE_BUTTONS:
		return {
			...state,
			showLineButtons: action.payload.show
		};
	case types.AUTO_UPDATE_CHANGED:
		return {
			...state,
			autoUpdatePreview: action.payload.autoUpdatePreview
		};
	default:
		return state;
	}
}
