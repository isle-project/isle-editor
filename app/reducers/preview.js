// MODULES //

import Store from 'electron-store';
import * as types from 'constants/editor_actions.js';


// VARIABLES //

const config = new Store( 'ISLE' );
const initialState = {
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
	default:
		return state;
	}
}
