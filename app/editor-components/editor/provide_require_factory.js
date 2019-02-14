// MODULES //

import NAMESPACE from './stdlib/namespace.json';


// MAIN //

function factory( monaco ) {
	return provideCompletionItems;

	function provideCompletionItems( model, position ) {
		const { word } = model.getWordUntilPosition({
			lineNumber: position.lineNumber,
			column: position.column - 1
		});
		const range = model.findMatches( 'require:' )[ 0 ].range;
		const suggestions = [];
		for ( let i = 0; i < NAMESPACE.length; i++ ) {
			const x = NAMESPACE[ i ];
			if (
				x.alias === word &&
				model.findMatches( x.path ).length === 0 // not already required
			) {
				suggestions.push({
					label: x.alias,
					documentation: `Require ${x.alias} in preamble`,
					kind: monaco.languages.CompletionItemKind.Reference,
					insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
					insertText: '',
					additionalTextEdits: [
						{
							range: range,
							text: `require:\n    ${x.alias}: "${x.path}"`
						}
					]
				});
			}
		}
		console.log( suggestions );
		return {
			suggestions: suggestions,
			incomplete: false
		};
	}
}


// EXPORTS //

export default factory;
