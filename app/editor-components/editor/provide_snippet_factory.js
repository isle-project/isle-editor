// MODULES //

import removeFirst from '@stdlib/string/remove-first';
import COMPONENT_DOCS from './components_documentation.json';
import { componentSnippets } from 'snippets';


// MAIN //

function factory( monaco ) {
	return provideCompletionItems;

	function provideCompletionItems( model, position ) {
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
				insertText: removeFirst( x.value ),
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
