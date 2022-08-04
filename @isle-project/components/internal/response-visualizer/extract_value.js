// MODULES //

import copy from '@stdlib/utils/copy';
import logger from 'debug';
import isObjectLike from '@stdlib/assert/is-object-like';
import { isPrimitive as isString } from '@stdlib/assert/is-string';


// VARIABLES //

const debug = logger( 'isle:response-visualizer' );


// FUNCTIONS //

const isJSONArray = ( str ) => {
	return isString( str ) && str.startsWith( '[' ) && str.endsWith( ']' );
};


// MAIN //

function extractValue( action ) {
	if ( action.type === 'FEEDBACK_FORM' ) {
		action = copy( action );
		debug( 'Received a feedback action...' );
		let json;
		if ( isObjectLike( action.value ) ) {
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
	else if (
		action.type === 'MULTIPLE_CHOICE_MATRIX_SUBMISSION' ||
		action.type === 'MATCH_LIST_SUBMISSION'
	) {
		if ( !isObjectLike( action.value ) ) {
			action = copy( action );
			action.value = JSON.parse( action.value );
		}
	}
	else if (
		action.type === 'MULTIPLE_CHOICE_SUBMISSION' ||
		action.type === 'RANGE_QUESTION_SUBMISSION'
	) {
		if ( isJSONArray( action.value ) ) {
			action = copy( action );
			action.value = JSON.parse( action.value );
		}
	}
	return action;
}


// EXPORTS //

export default extractValue;
