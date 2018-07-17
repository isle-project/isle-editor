// MODULES //

import removeFirst from '@stdlib/string/remove-first';
import removeLast from '@stdlib/string/remove-last';
import replace from '@stdlib/string/replace';
import contains from '@stdlib/assert/contains';


// VARIABLES //

const RE_SNIPPETS = /snippet ([^\n]*)\n([\s\S]*?)(?=snippet|$)/g;


// MAIN //

function extractSnippets( text ) {
	const snippets = [];
	let match;
	do {
		match = RE_SNIPPETS.exec( text );
		if ( match ) {
			let value = match[ 2 ];
			value = replace( value, '\n\t', '\n' );
			value = removeFirst( value );
			value = removeLast( value );
			snippets.push({
				'name': match[ 1 ],
				'value': value,
				'selfClosing': !contains( value, '</'+match[ 1 ]+'>' )
			});
		}
	} while ( match );
	return snippets;
}


// EXPORTS //

export default extractSnippets;
