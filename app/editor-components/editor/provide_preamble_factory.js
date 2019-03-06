// MODULES //

import contains from '@stdlib/assert/contains';
import PREAMBLE_FIELDS from './preamble_fields.json';
import NAMESPACE from './stdlib/namespace.json';


// VARIABLES //

const RE_MAIN_FIELD = /\n([a-z]+):/g;
const RE_ENDS_WITH_WHITESPACE = /[ \t]+$/;


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
			const matches = textUntilPosition.match( RE_MAIN_FIELD );
			const last = matches[ matches.length - 1 ];
			if ( RE_ENDS_WITH_WHITESPACE.test( textUntilPosition ) ) {
				if ( last === '\nrequire:' ) {
					suggestions = NAMESPACE.map( x => {
						return {
							label: x.alias,
							documentation: x.description,
							kind: monaco.languages.CompletionItemKind.Snippet,
							insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
							insertText: `${x.alias}: "${x.path}"`
						};
					});
				}
			}
			else {
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
		}
		return {
			suggestions: suggestions,
			incomplete: false
		};
	}
}


// EXPORTS //

export default factory;
