// MODULES //

import contains from '@stdlib/assert/contains';
import PREAMBLE_FIELDS from './preamble_fields.json';
import LICENSES from './preamble_licenses.json';
import LANGUAGES from './preamble_languages.json';
import NAMESPACE from './stdlib/namespace.json';
import COMPONENTS_DOCS from '@isle-project/components/documentation.json';


// VARIABLES //

const RE_MAIN_FIELD = /\n([a-z]+):/gi;
const RE_ENDS_WITH_WHITESPACE = /[ \t]+$/;


// MAIN //

/**
 * Returns a function for providing completions for preamble fields.
 *
 * @param {Object} monaco - a monaco editor instance
 * @returns {Function} function providing completions
 */
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
									insertText: `${x.alias}: "${x.path}"`, // eslint-disable-line i18next/no-literal-string
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
						else if ( last === '\nreferences:' ) {
							suggestions = [
								{
									label: 'Journal Article',
									documentation: 'A reference entry for a journal article',
									insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
									insertText: '${1:key}:\n\ttype: article\n\tauthor: ${2:}\n\ttitle: ${3:}\n\tjournal: ${4:}\n\tyear: ${5:}\n\tnumber: ${6:}\n\tpages: ${7:}\n\tmonth: ${8:}\n\tvolume: ${9:}', // eslint-disable-line no-template-curly-in-string
									kind: monaco.languages.CompletionItemKind.Snippet,
									sortText: 'aa'
								},
								{
									label: 'Book',
									documentation: 'A reference entry for a book',
									insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
									insertText: '${1:key}:\n\ttype: book\n\tauthor: ${2:}\n\ttitle: ${3:}\n\tpublisher: ${4:}\n\tyear: ${5:}\n\taddress: ${6:}\n\tedition: ${7:}\n\tmonth: ${8:}\n\tisbn: ${9:}', // eslint-disable-line no-template-curly-in-string
									kind: monaco.languages.CompletionItemKind.Snippet,
									sortText: 'ab'
								}
							];
						}
						else if ( last === '\npresentation:' ) {
							suggestions = COMPONENTS_DOCS.Deck.props.map( o => {
								return {
									label: o.name,
									documentation: o.description,
									insertText: `${o.name}: ${String( o.defaultValue )}`,
									kind: monaco.languages.CompletionItemKind.Snippet,
									sortText: 'aa'
								};
							});
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
