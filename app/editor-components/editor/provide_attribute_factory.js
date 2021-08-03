// MODULES //

import logger from 'debug';
import typeOf from '@stdlib/utils/type-of';
import replace from '@stdlib/string/replace';
import contains from '@stdlib/assert/contains';
import rtrim from '@stdlib/string/right-trim';
import endsWith from '@stdlib/string/ends-with';
import COMPONENT_DOCS from '@isle-project/components/documentation.json';
import extractOptionsFromDescription from 'utils/extract-options-from-description';
import mainStore from 'store/main.js';
import getLastOpenedTag from './get_last_opened_tag.js';
import CSS_PROPERTIES from './css_properties.json';
import CSS_NAMES from './css_names.json';

// VARIABLES //

const debug = logger( 'isle:editor' );
const RE_FUNCTION = /^(?:function ?)?[a-z0-9]*\(([^)]*)\)/i;
const RE_OBJECT_PROPERTY = /([a-z]+):\s*$/i;


// FUNCTIONS //

/**
 * Generates a replacement opposite to the provided default value.
 *
 * @private
 * @param {*} defaultValue - default value
 * @returns {string} replacement value
 */
function generateReplacement( defaultValue ) {
	const match = RE_FUNCTION.exec( defaultValue );
	if ( match ) {
		// Convert to arrow function:
		defaultValue = replace( defaultValue, match[ 0 ], '('+match[1]+') => ' );
		return '{'+defaultValue+'}';
	}
	const type = typeOf( defaultValue );
	switch ( type ) {
		case 'object':
		case 'array': {
			const str = JSON.stringify( defaultValue );
			const len = str.length;
			if ( len === 2 ) {
				return '{'+str[0]+'${1:}'+str[1]+'}'; // eslint-disable-line
			}
			return '{'+str[0]+'${1:'+str.substr( 1, len-2 )+'}'+str[ len-1 ]+'}';
		}
		case 'string':
			if ( contains( defaultValue, '\n' ) ) {
				return '{`${1:'+defaultValue+'}`}';
			}
			if ( !defaultValue ) {
				defaultValue = '';
			}
			return '"${1:'+defaultValue+'}"';
		case 'number':
			return '{${1:'+defaultValue+'}}';
		default:
			return '{${1:}}'; // eslint-disable-line
	}
}


// MAIN //

/**
 * Returns a function which provides a default value for an attribute.
 *
 * @param {Object} monaco - monaco editor instance
 * @param {Function} t - translation function
 */
function factory( monaco, t ) {
	return provideCompletionItems;

	function provideCompletionItems( model, position ) {
		const textUntilPosition = model.getValueInRange({
			startLineNumber: 0,
			startColumn: 1,
			endLineNumber: position.lineNumber,
			endColumn: position.column
		});
		const tag = getLastOpenedTag( textUntilPosition );
		if ( tag && tag.tagName && tag.inTagAttributes ) {
			debug( `Encountered tag ${tag.tagName}, cursor ${tag.inTagAttributes ? 'in' : 'not in'} attributes${tag.inAttribute ? `, in attribute ${tag.attributeName}` : ''}` );
			const docs = COMPONENT_DOCS[ tag.tagName ];
			if ( !tag.inAttribute ) {
				let suggestions = [];
				if ( docs ) {
					suggestions = docs.props.map( x => {
						let insertText;
						const replacement = generateReplacement( x.defaultValue );
						if ( x.type === 'boolean' ) {
							insertText = x.name;
							if ( x.defaultValue ) {
								insertText += '={false}$1';
							}
						} else {
							insertText = x.name+'='+replacement+'$2';
						}
						return {
							label: x.name,
							command: {
								title: 'Trigger new suggestion',
								id: 'editor.action.triggerSuggest'
							},
							documentation: t('ComponentDocs:'+x.description ),
							kind: monaco.languages.CompletionItemKind.Snippet,
							detail: x.type,
							insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
							insertText: insertText,
							sortText: 'a'+x.value
						};
					});
				}
				suggestions.push({
					label: 'id',
					command: {
						title: 'Trigger new suggestion',
						id: 'editor.action.triggerSuggest'
					},
					documentation: 'Component identifier. Has to begin with a letter followed by letters, digits, hyphens ( - ), underscores ( _ ), colons ( : ), and periods ( . ).',
					kind: monaco.languages.CompletionItemKind.Snippet,
					detail: 'string',
					insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
					insertText: 'id="${1:}"', // eslint-disable-line
					sortText: 'aid'
				});
				return {
					suggestions: suggestions,
					incomplete: false
				};
			}
			if ( tag.attributeName === 'className' ) {
				const preambleClassNames = mainStore.get( 'preambleClassNames' ) || [];
				return {
					suggestions: preambleClassNames.map( name => {
						return {
							label: name,
							kind: monaco.languages.CompletionItemKind.Snippet,
							insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
							insertText: name,
							sortText: 'a'+name
						};
					}),
					incomplete: false
				};
			}
			// Case: in tag attribute
			if ( tag.attributeName === 'style' ) {
				if ( endsWith( rtrim( textUntilPosition ), ':' ) ) {
					const attr = textUntilPosition.match( RE_OBJECT_PROPERTY )[ 1 ];
					const prop = CSS_PROPERTIES[ attr ];
					return {
						suggestions: prop.values.map( name => {
							return {
								label: name,
								kind: monaco.languages.CompletionItemKind.Snippet,
								insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
								insertText: '\''+name+'\'',
								sortText: 'a'+name
							};
						}),
						incomplete: false
					};
				}
				return {
					suggestions: CSS_NAMES.map( name => {
						const prop = CSS_PROPERTIES[ name ];
						return {
							label: name,
							documentation: prop.description,
							kind: monaco.languages.CompletionItemKind.Snippet,
							insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
							insertText: name+': $1',
							sortText: 'a'+name
						};
					}),
					incomplete: false
				};
			}
			if ( docs ) {
				let prop = null;
				for ( let i = 0; i < docs.props.length; i++ ) {
					if ( docs.props[ i ].name === tag.attributeName ) {
						prop = docs.props[ i ];
					}
				}
				if ( prop ) {
					if ( prop.type === 'boolean' ) {
						return {
							suggestions: [
								{
									label: 'true',
									documentation: 'A boolean true',
									kind: monaco.languages.CompletionItemKind.Snippet,
									insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
									insertText: 'true',
									sortText: 'atrue'
								},
								{
									label: 'false',
									documentation: 'A boolean false',
									kind: monaco.languages.CompletionItemKind.Snippet,
									insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
									insertText: 'false',
									sortText: 'afalse'
								}
							],
							incomplete: false
						};
					}
					if ( prop.type === 'string' ) {
						const description = t( 'ComponentDocs:'+prop.description );
						const options = extractOptionsFromDescription( description );
						if ( options ) {
							return {
								suggestions: options.map( x => {
									return {
										label: x,
										documentation: description,
										kind: monaco.languages.CompletionItemKind.Snippet,
										insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
										insertText: x,
										sortText: 'a'+x
									};
								}),
								incomplete: false
							};
						}
						return {
							suggestions: [
								{
									label: prop.defaultValue,
									documentation: prop.description,
									kind: monaco.languages.CompletionItemKind.Snippet,
									insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
									insertText: prop.defaultValue,
									sortText: 'a'+prop.defaultValue
								}
							],
							incomplete: false
						};
					}
				}
			}
		}
		return {
			suggestions: [],
			incomplete: false
		};
	}
}


// EXPORTS //

export default factory;
