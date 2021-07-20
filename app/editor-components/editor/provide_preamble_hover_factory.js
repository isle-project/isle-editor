// MODULES //

import contains from '@stdlib/assert/contains';
import PREAMBLE_FIELDS from './preamble_fields.json';


// VARIABLES //

const DESCRIPTIONS = {};
for ( let i = 0; i < PREAMBLE_FIELDS.length; i++ ) {
	DESCRIPTIONS[ PREAMBLE_FIELDS[ i ].name ] = PREAMBLE_FIELDS[ i ].description;
}


// MAIN //

/**
 * Returns a function which provides preamble field's hover text.
 *
 * @param {Object} monaco - monaco editor instance
 * @returns {Function} function which provides preamble field's hover texts
 */
function factory( monaco ) {
	return provideHoverItems;

	function provideHoverItems( model, position ) {
		const textUntilPosition = model.getValueInRange({
			startLineNumber: 0,
			startColumn: 1,
			endLineNumber: position.lineNumber,
			endColumn: position.column
		});
		if ( !contains( textUntilPosition, '\n---' ) ) { // Case: still in preamble
			let word = model.getWordAtPosition( position );
			word = word && word.word;
			if ( !word ) {
				return null;
			}
			const contents = [];
			if ( DESCRIPTIONS[ word ] ) {
				contents.push({
					value: DESCRIPTIONS[ word ]
				});
			}
			return {
				contents
			};
		}
		return null;
	}
}


// EXPORTS //

export default factory;
