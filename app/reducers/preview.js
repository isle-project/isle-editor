// MODULES //

import Configstore from 'configstore';
import * as types from 'constants/actionTypes';


// VARIABLES //

const config = new Configstore( 'ISLE' );
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
