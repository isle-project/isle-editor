// MODULES //

import copy from '@stdlib/utils/copy';
import logger from 'debug';
import isObject from '@stdlib/assert/is-object';


// VARIABLES //

const debug = logger( 'isle:instructor-bar' );


// MAIN //

function extractValue( action ) {
	if ( action.type === 'USER_FEEDBACK_FORM' ) {
		action = copy( action );
		debug( 'Received a feedback action...' );
		let json;
		if ( isObject( action.value ) ) {
			json = action.value;
		} else {
			json = JSON.parse( action.value );
		}
		action.value = '';
		if ( json.comments ) {
			action.value += json.comments + '. ';
		}
		if ( json.noUnderstanding ) {
			action.value += 'I do not understand this. ';
		}
		if ( json.needsExplanation ) {
			action.value += 'It needs a more detailed explanation. ';
		}
		if ( json.noLogic ) {
			action.value += 'I can\'t follow the logic. ';
		}
	}
	return action;
}


// EXPORTS //

export default extractValue;
