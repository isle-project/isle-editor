// MODULES //

import PREAMBLE_FIELDS from './preamble_fields.json';
import contains from '@stdlib/assert/contains';


// MAIN //

function factory( monaco ) {
	return provideCompletionItems;

	function provideCompletionItems( model, position ) {
		const textUntilPosition = model.getValueInRange({
			startLineNumber: 0,
			startColumn: 1,
			endLineNumber: position.lineNumber,
			endColumn: position.column
		});
		let suggestions = [];
		if ( !contains( textUntilPosition, '\n---' ) ) { // Case: still in preamble
			suggestions = PREAMBLE_FIELDS.map( x => {
				return {
					label: x.name,
					documentation: x.description,
					kind: monaco.languages.CompletionItemKind.Snippet,
					insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
					insertText: x.value,
					sortText: 'a'+x.value
				};
			});
		}
		return {
			suggestions: suggestions,
			incomplete: false
		};
	}
}


// EXPORTS //

export default factory;
