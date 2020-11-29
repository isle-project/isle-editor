// MODULES //

import * as types from 'constants/editor_actions.js';


// VARIABLES //

const initialState = {
	configuratorIsOpened: false,
	selectedComponent: {}
};


// EXPORTS //

export default function configurator( state = initialState, action ) {
	switch ( action.type ) {
	case types.TOGGLE_CONFIGURATOR:
		return {
			...state,
			configuratorIsOpened: action.payload.opened
		};
	case types.SET_CONFIGURATOR_COMPONENT:
		return {
			...state,
			selectedComponent: action.payload.component
		};
	default:
		return state;
	}
}
