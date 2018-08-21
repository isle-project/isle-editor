// MODULES //

import copy from '@stdlib/utils/copy';


// MAIN //

function extractValue( action ) {
	if ( action.type === 'USER_FEEDBACK_FORM' ) {
		action = copy( action );
		const json = JSON.parse( action.value );
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
		if ( json.needsExplanation ) {
			action.value += 'I can\'t follow the logic. ';
		}
	}
	return action;
}


// EXPORTS //

export default extractValue;
