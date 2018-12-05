// MODULES //

import COMPONENT_DOCS from './components_documentation.json';
import snippets from 'snippets';


// FUNCTIONS //

var RE_TAG = /<\/*(?=\S*)([a-zA-Z-]+)/g;


// FUNCTIONS //

/**
* Returns the last opened tag.
*
* ## Notes
*
* -   Code adapted from https://github.com/isimic413/monaco-editor-custom-intellisense/blob/master/sample-editor/completion-provider.js
*
* @author {Ivana Šimić}
* @license {MIT}
* @param {string} text - input text
* @returns {Object} object with `tagName` holding the name of the last opened tag and boolean `isAttributeSearch` indicating whether we are inside the tag attributes or its children
*/
function getLastOpenedTag( text ) {
	const tags = text.match( RE_TAG );
	if ( !tags ) {
		return;
	}
	const closingTags = [];
	for ( let i = tags.length - 1; i >= 0; i-- ) {
		if ( tags[i].indexOf( '</' ) === 0 ) {
			closingTags.push( tags[i].substring( '</'.length ) );
		}
		else {
			// Get the last position of the tag:
			const tagPosition = text.lastIndexOf(tags[i]);
			const tag = tags[i].substring( '<'.length );
			const closingBracketIdx = text.indexOf( '/>', tagPosition );
			// If the tag wasn't closed...
			if ( closingBracketIdx === -1 ) {
				// If there are no closing tags or the current tag wasn't closed...
				if (!closingTags.length || closingTags[closingTags.length - 1] !== tag) {
					// We found our tag, but let's get the information if we are looking for a child element or an attribute:
					text = text.substring( tagPosition );
					return {
						tagName: tag,
						isAttributeSearch: text.indexOf( '<' ) > text.indexOf( '>' )
					};
				}
				// Remove the last closed tag:
				closingTags.splice( closingTags.length - 1, 1 );
			}
			// Remove the last checked tag and continue processing the rest of the content:
			text = text.substring( 0, tagPosition );
		}
	}
}


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
		const tag = getLastOpenedTag( textUntilPosition );
		if ( tag && tag.tagName && tag.isAttributeSearch ) {
			const docs = COMPONENT_DOCS[ tag.tagName ];
			if ( docs ) {
				suggestions = docs.props.map( x => {
					let insertText;
					if ( x.type === 'string' ) {
						insertText = x.name+'="${1:'+x.default+'}"'; // eslint-disable-line
					} else if ( x.type === 'boolean' ) {
						insertText = x.name;
						if ( x.default ) {
							insertText += '={false}$1';
						}
					} else {
						insertText = x.name+'={${1:'+x.default+'}}';  // eslint-disable-line
					}
					return {
						label: x.name,
						documentation: x.description,
						kind: monaco.languages.CompletionItemKind.Snippet,
						detail: x.type,
						insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
						insertText: insertText,
						sortText: 'a'+x.value
					};
				});
			}
		}
		else {
			suggestions = snippets.map( x => {
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
