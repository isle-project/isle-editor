// MODULES //

import NAMESPACE from './stdlib/namespace.json';


// MAIN //

/**
 * Returns a factory for creating a require function.
 *
 * @param {Object} monaco - a monaco editor instance
 * @param {Function} t - translation function
 * @returns {Function} function to provide `require` completions
 */
function factory( monaco, t ) {
	return provideCompletionItems;

	function provideCompletionItems( model, position ) {
		const { word } = model.getWordUntilPosition({
			lineNumber: position.lineNumber,
			column: position.column - 1
		});
		const match = model.findMatches( 'require:' )[ 0 ];
		const suggestions = [];
		if ( match ) {
			const range = match.range;
			for ( let i = 0; i < NAMESPACE.length; i++ ) {
				const x = NAMESPACE[ i ];
				if (
					x.alias === word &&
					model.findMatches( x.path ).length === 0 // not already required
				) {
					suggestions.push({
						label: x.alias,
						documentation: t('require-in-preamble', { alias: x.alias }),
						kind: monaco.languages.CompletionItemKind.Reference,
						insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
						insertText: '',
						additionalTextEdits: [
							{
								range: range,
								text: `require:\n    ${x.alias}: "${x.path}"` // eslint-disable-line i18next/no-literal-string
							}
						]
					});
				}
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
