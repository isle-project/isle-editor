// MODULES //

import removeFirst from '@stdlib/string/remove-first';
import COMPONENT_DOCS from './components_documentation.json';
import { componentSnippets } from 'snippets';


// MAIN //

function factory( monaco ) {
	return provideCompletionItems;

	function provideCompletionItems( model, position ) {
		const lastChar = model.getValueInRange({
			startLineNumber: position.lineNumber,
			startColumn: position.column - 1,
			endLineNumber: position.lineNumber,
			endColumn: position.column
		});
		const suggestions = componentSnippets.map( x => {
			const docs = COMPONENT_DOCS[ x.name ];
			let description = 'No documentation available';
			if ( docs ) {
				description = docs.description;
			}
			return {
				label: x.name,
				kind: monaco.languages.CompletionItemKind.Snippet,
				documentation: description,
				insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
				insertText: lastChar === '<' ? removeFirst( x.value ) : x.value,
				sortText: 'a'+x.value
			};
		});
		return {
			suggestions: suggestions,
			incomplete: false
		};
	}
}


// EXPORTS //

export default factory;
