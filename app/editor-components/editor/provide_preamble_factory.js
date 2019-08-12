// MODULES //

import contains from '@stdlib/assert/contains';
import PREAMBLE_FIELDS from './preamble_fields.json';
import LICENSES from './preamble_licenses.json';
import LANGUAGES from './preamble_languages.json';
import NAMESPACE from './stdlib/namespace.json';


// VARIABLES //

const RE_MAIN_FIELD = /\n([a-z]+):/gi;
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
			if ( position.column > 3 ) {
				const matches = textUntilPosition.match( RE_MAIN_FIELD );
				if ( matches ) {
					const last = matches[ matches.length - 1 ];
					if ( RE_ENDS_WITH_WHITESPACE.test( textUntilPosition ) ) {
						if ( last === '\nrequire:' ) {
							suggestions = NAMESPACE.map( x => {
								return {
									label: x.alias,
									documentation: x.description,
									kind: monaco.languages.CompletionItemKind.Snippet,
									insertTextRules: monaco.languages.CompletionItemInsertTextRule.KeepWhitespace,
									insertText: `${x.alias}: "${x.path}"`,
									sortText: 'a'+x.alias
								};
							});
						}
						else if ( last === '\nlicense:' ) {
							suggestions = LICENSES.map( x => {
								return {
									label: x.name,
									documentation: x.description,
									insertText: x.value,
									kind: monaco.languages.CompletionItemKind.Snippet,
									sortText: 'a'+x.value
								};
							});
						}
						else if ( last === '\nlanguage:' ) {
							suggestions = LANGUAGES.map( x => {
								return {
									label: x.name,
									documentation: x.description,
									insertText: x.name,
									kind: monaco.languages.CompletionItemKind.Snippet,
									sortText: 'a'+x.name
								};
							});
						}
						else if ( last === '\ntype:' ) {
							suggestions = [
								{
									label: 'presentation',
									documentation: 'Display ISLE lesson as a slideshow (separate slides with `===`)',
									insertText: 'presentation',
									kind: monaco.languages.CompletionItemKind.Snippet,
									sortText: 'aa'
								},
								{
									label: 'page',
									documentation: 'Display ISLE lesson as a single web page',
									insertText: 'page',
									kind: monaco.languages.CompletionItemKind.Snippet,
									sortText: 'ab'
								}
							];
						}
					}
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
