// MODULES //

import logger from 'debug';
import typeOf from '@stdlib/utils/type-of';
import replace from '@stdlib/string/replace';
import contains from '@stdlib/assert/contains';
import rtrim from '@stdlib/string/right-trim';
import endsWith from '@stdlib/string/ends-with';
import COMPONENT_DOCS from './components_documentation.json';
import CSS_PROPERTIES from './css_properties.json';
import CSS_NAMES from './css_names.json';


// VARIABLES //

const debug = logger( 'isle:editor' );
const RE_FUNCTION = /^(?:function ?)?[a-z0-9]*\(([^)]*)\)/i;
const RE_TAG = /<\/*(?=\S*)([a-zA-Z-]+)/g;
const RE_QUOTES = /"/g;
const RE_OPENING_BRACES = /{/g;
const RE_CLOSING_BRACES = /}/g;
const RE_LAST_ATTRIBUTE = /([a-z]+)=[^=]*?$/i;
const RE_CLOSING_ANGLE = /[^=]>/;
const RE_OBJECT_PROPERTY = /([a-z]+):\s*$/i;


// FUNCTIONS //

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

function indexOfClosingAngle( text ) {
	return text.search( RE_CLOSING_ANGLE );
}

function extractOptions( description ) {
	const listStart = description.indexOf( 'either ' );
	if ( listStart === -1 ) {
		return null;
	}
	description = description.substring( listStart );
	const RE_BACKTICK_STRINGS = /`([^`]+)`/g;
	let match = RE_BACKTICK_STRINGS.exec( description );
	const values = [];
	while ( match !== null ) {
		values.push( match[ 1 ] );
		match = RE_BACKTICK_STRINGS.exec( description );
	}
	return values;
}


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
* @returns {Object} object with `tagName` holding the name of the last opened tag and boolean `inTagAttributes` indicating whether we are inside the tag attributes or its children
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
					const nOpeningBraces = text.match( RE_OPENING_BRACES ) || [];
					const nClosingBraces = text.match( RE_CLOSING_BRACES ) || [];
					const out = {
						tagName: tag,
						inTagAttributes: text.indexOf( '<' ) > indexOfClosingAngle( text ),
						inAttribute: (
							( text.match( RE_QUOTES ) || [] ).length % 2 === 1 ||
							nOpeningBraces.length - nClosingBraces.length >= 1
						)
					};
					if ( out.inAttribute ) {
						const match = text.match( RE_LAST_ATTRIBUTE );
						out.attributeName = match ? match[ 1 ] : null;
					}
					return out;
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
		const tag = getLastOpenedTag( textUntilPosition );
		if ( tag && tag.tagName && tag.inTagAttributes ) {
			debug( `Encountered tag ${tag.tagName}, cursor ${tag.inTagAttributes ? 'in' : 'not in'} attributes${tag.inAttribute ? `, in attribute ${tag.attributeName}` : ''}` );
			const docs = COMPONENT_DOCS[ tag.tagName ];
			if ( !tag.inAttribute ) {
				let suggestions = [];
				if ( docs ) {
					suggestions = docs.props.map( x => {
						let insertText;
						const replacement = generateReplacement( x.default );
						if ( x.type === 'boolean' ) {
							insertText = x.name;
							if ( x.default ) {
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
							documentation: x.description,
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
					documentation: 'Component identifier',
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
						const options = extractOptions( prop.description );
						if ( options ) {
							return {
								suggestions: options.map( x => {
									return {
										label: x,
										documentation: prop.description,
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
									label: prop.default,
									documentation: prop.description,
									kind: monaco.languages.CompletionItemKind.Snippet,
									insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
									insertText: prop.default,
									sortText: 'a'+prop.default
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
