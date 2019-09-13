// MODULES //

import logger from 'debug';
import markdownit from 'markdown-it';
import replace from '@stdlib/string/replace';
import startsWith from '@stdlib/string/starts-with';
import removeFirst from '@stdlib/string/remove-first';
import removeLast from '@stdlib/string/remove-last';
import hasOwnProp from '@stdlib/assert/has-own-property';


// VARIABLES //

const debug = logger( 'isle:tokenizer' );
const IN_BASE = 0;
const IN_EQUATION = 1;
const IN_DISPLAY_EQUATION = 2;
const IN_OPENING_TAG = 3;
const IN_OPENING_TAG_NAME = 4;
const IN_CLOSING_TAG = 5;
const IN_STRING_ATTRIBUTE = 6;
const IN_JSX_ATTRIBUTE = 7;
const IN_JSX_STRING = 8;
const IN_JSX_OBJECT = 9;
const IN_JSX_ARRAY = 10;
const IN_JSX_EXPRESSION = 11;
const IN_JSX_OTHER = 12;
const IN_BETWEEN_TAGS = 13;
const IN_ANGLE_LINK = 14;
const RE_ALPHANUMERIC = /[A-Z0-9]/i;
const RE_HTML_INNER_TAGS = /^(?:p|th|td)$/;
const RE_HTML_INLINE_TAGS = /^(?:a|abbr|acronym|b|bdo|big|br|button|cite|code|dfn|em|i|img|input|kbd|label|map|object|output|q|samp|script|select|small|span|strong|sub|sup|textarea|time|tt|var)$/;
const RE_ISLE_INLINE_TAGS = /^(?:Badge|BeaconTooltip|Button|CheckboxInput|Clock|Input|NumberInput|RHelp|SelectInput|SelectQuestion|SliderInput|Text|TeX|TextArea|TextInput|Typewriter)$/;

const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
const defaultRender = md.renderer.rules.link_open || function onRender( tokens, idx, options, env, renderer ) {
	return renderer.renderToken( tokens, idx, options );
};
md.renderer.rules.link_open = function onLink( tokens, idx, options, env, renderer ) {
	// If you are sure other plugins can't add `target` - drop check below
	const aIndex = tokens[ idx ].attrIndex( 'target' );
	if ( aIndex < 0 ) {
		tokens[ idx ].attrPush( [ 'target', '_blank' ] ); // add new attribute...
	} else {
		tokens[ idx ].attrs[ aIndex ][ 1 ] = '_blank'; // replace value of existing attribute...
	}
	// Pass token to default renderer:
	return defaultRender( tokens, idx, options, env, renderer );
};
const RE_RAW_ATTRIBUTE = /<(TeX|Text)([^>]*?)raw *= *("[^"]*"|{`[^`]*`})/g;
const RE_LINE_BEGINNING = /(\n+)\s*/g;


// FUNCTIONS //

/**
* Escapes raw attribute tags of TeX and Text components.
*/
const rawEscaper = ( match, p1, p2, p3 ) => {
	if ( startsWith( p3, '{`' ) ) {
		p3 = '{String.raw`' + p3.substring( 2 );
		return '<'+p1+' '+p2+' raw='+p3;
	} else if ( startsWith( p3, '"' ) ) {
		p3 = '{String.raw`' + p3.substring( 1, p3.length-1 );
		return '<'+p1+' '+p2+' raw='+p3+'`}';
	}
	return match;
};

/**
* Tests whether character is a quotation mark.
*
* @param {string} c - input character
* @returns {boolean} boolean indicating whether character is a quotation mark
*/
function isQuotationMark( c ) {
	return (
		c === '\'' ||
		c === '"'
	);
}

function tagName( str, pos ) {
	let out = '';
	let char = str.charAt( pos );
	if ( char === '/' ) {
		pos += 1;
		char = str.charAt( pos );
	}
	while ( RE_ALPHANUMERIC.test( char ) ) {
		out += char;
		pos += 1;
		char = str.charAt( pos );
	}
	return out;
}

function trimLineStarts( str ) {
	return replace( str, RE_LINE_BEGINNING, ( match, p1 ) => {
		return '\n'.repeat( p1.length > 2 ? p1.length : 2 );
	});
}

/**
* Tests whether character is whitespace.
*
* @param {string} c - input character
* @returns {boolean} boolean indicating whether character is whitespace
*/
function isWhitespace( c ) {
	return (
		c === ' ' ||
		c === '\n' ||
		c === '\t' ||
		c === '\f' ||
		c === '\r'
	);
}

class Tokenizer {
	constructor( opts ) {
		this.addEmptySpans = ( opts && opts.addEmptySpans ) ? true : false;
		this.inline = ( opts && opts.inline ) ? true : false;
	}

	setup( str ) {
		this.tokens = [];
		this._buffer = str;
		this._current = '';
		this._openTagEnd = null;
		this._endTagStart = null;
		this._state = IN_BASE;
		this._braceLevel = 0;
		this._level = 0;
		this.pos = 0;
		this.divHash = {};
		this.inBetweenEquation = false;
	}

	_inBase( char ) {
		const pos = this.pos;
		if ( this.addEmptySpans && char === '\n' && this._buffer.charAt( pos+1 ) === '\n' ) {
			this._current += '\n<span />';
		}
		else if (
			char === '<' &&
			!isWhitespace( this._buffer.charAt( pos+1 ) ) && // Avoid mistaking smaller than sign in text as tag opening
			this._buffer.charAt( pos-1 ) !== '\\' // Allow escaping of left angle brackets
		) {
			debug( 'IN_BASE -> IN_OPENING_TAG_NAME' );
			this._state = IN_OPENING_TAG_NAME;
			this._level += 1;
			this._startTagNamePos = 0;
		}
		else if ( char === '$' ) {
			this._eqnChar = char;
			const prevChar = this._buffer.charAt( pos-1 );
			const nextChar = this._buffer.charAt( pos+1 );
			if (
				nextChar === '$' &&
				prevChar !== '\\'
			) {
				debug( 'IN_BASE -> IN_DISPLAY_EQUATION' );
				this._state = IN_DISPLAY_EQUATION;
				this.pos += 1; // skip the next opening `$` character
			}
			else if (
				( prevChar !== '\\' && nextChar !== '$' ) ||
				( prevChar === '\\' && nextChar === '(' )
			) {
				debug( 'IN_BASE -> IN_EQUATION' );
				this._state = IN_EQUATION;
			}
		}
		else if ( char === '\\' ) {
			this._eqnChar = char;
			const nextChar = this._buffer.charAt( pos+1 );
			if ( nextChar === '[' ) {
				debug( 'IN_BASE -> IN_DISPLAY_EQUATION' );
				this._state = IN_DISPLAY_EQUATION;
				this.pos += 1; // skip the next opening `[` character
			}
			else if ( nextChar === '(' ) {
				debug( 'IN_BASE -> IN_EQUATION' );
				this._state = IN_EQUATION;
				this.pos += 1; // skip the next opening `(` character
			}
		}
		else if ( char === '{' && this._buffer.charAt( pos-1 ) !== '\\' ) {
			this._JSX_ATTRIBUTE_START = this._current.length;
			this._braceLevel = 1;
			debug( 'IN_BASE -> IN_JSX_ATTRIBUTE' );
			this._state = IN_JSX_ATTRIBUTE;
		}
		if ( this._state !== IN_BASE ) {
			// Exiting base state, push token:
			this.tokens.push( this._current );
			this._current = char;
		} else {
			this._current += char;
		}
	}

	_inEquation( char ) {
		if (
			( this._eqnChar === '$' && char === '$' ) ||
			( this._eqnChar === '\\' && char === ')' && this._buffer.charAt( this.pos-1 ) === '\\' )
		) {
			let eqn = removeFirst( this._current );
			if ( this._eqnChar === '\\' ) {
				eqn = removeLast( eqn );
			}
			const str = '<TeX raw={String.raw`' + eqn + '`} />';
			this.divHash[ '<div id="placeholder_'+this.pos+'"/>' ] = str;
			this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
			debug( 'IN_EQUATION -> IN_BASE' );
			this._current = '';
			this._state = IN_BASE;
		} else {
			this._current += char;
		}
	}

	_inDisplayEquation( char ) {
		if (
			( char === '$' && this._buffer.charAt( this.pos-1 ) === '$' ) ||
			( this._eqnChar === '\\' && char === ']' && this._buffer.charAt( this.pos-1 ) === '\\' )
		) {
			const eqn = this._current.substring( 1, this._current.length-1 );
			const str = '<TeX raw={String.raw`' + eqn + '`} displayMode />';
			this.divHash[ '<div id="placeholder_'+this.pos+'"/>' ] = str;
			this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
			debug( 'IN_DISPLAY_EQUATION -> IN_BASE' );
			this._current = '';
			this._state = IN_BASE;
		} else {
			this._current += char;
		}
	}

	_inAngleLink( char ) {
		this._current += char;
		if ( char === '>' ) {
			const url = this._current.substring( this._startTagNamePos+1, this._current.length-1 );
			debug( 'IN_ANGLE_LINK -> IN_BASE' );
			this._state = IN_BASE;
			const replacement = ' <a href="'+url+'">'+url+'</a>';
			this.divHash[ '<div id="placeholder_'+this.pos+'"/>' ] = replacement;
			this.tokens.push( replacement );
			this._current = '';
		}
	}

	_inBetweenTags( char ) {
		const nextChar = this._buffer.charAt( this.pos+1 );
		if ( char === '<' ) {
			const nextTag = tagName( this._buffer, this.pos+1 );
			if ( nextTag === this._openingTagName ) {
				if ( nextChar !== '/' ) {
					this._level += 1;
				}
				else if ( nextChar === '/' ) {
					this._level -= 1;
				}
				if ( this._level === 0 ) {
					const isInner = RE_HTML_INNER_TAGS.test( this._openingTagName ) ||
						RE_HTML_INLINE_TAGS.test( this._openingTagName ) ||
						RE_ISLE_INLINE_TAGS.test( this._openingTagName );
					const tokenizer = new Tokenizer({
						inline: isInner
					});
					if ( this.betweenStr && this.betweenStr.length > 0 ) {
						const str = tokenizer.parse( trimLineStarts( this.betweenStr ) );
						this._current += str + '<';
					} else {
						this._current += '<';
					}
					this.betweenStr = null;
					this._endTagNewStart = this._current.length - 1;
					debug( 'IN_BETWEEN_TAGS -> IN_CLOSING_TAG' );
					this._state = IN_CLOSING_TAG;
				}
			}
		}

		if ( this._state === IN_BETWEEN_TAGS ) {
			if ( !this.betweenStr ) {
				this.betweenStr = char;
			} else {
				this.betweenStr += char;
			}
		}
	}

	_inClosingTag( char ) {
		this._current += char;
		const prevChar = this._buffer.charAt( this.pos-1 );
		if ( char === '>' && prevChar !== '=' ) {
			this._openTagEnd = this._current.length;
			this._endTagStart = null;
			this.divHash[ '<div id="placeholder_'+this.pos+'"/>' ] = this._current;
			this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
			this._current = '';
			debug( 'IN_CLOSING_TAG -> IN_BASE' );
			this._state = IN_BASE;
			this._openingTagName = null;
		}
	}

	_inOpeningTagName( char ) {
		this._current += char;
		const nextChar = this._buffer.charAt( this.pos+1 );
		if ( isWhitespace( nextChar ) || nextChar === '>' ) {
			debug( 'IN_OPENING_TAG_NAME -> IN_OPENING_TAG' );
			const name = this._current.substring( this._startTagNamePos );
			this._openingTagName = removeFirst( name );
			this._state = IN_OPENING_TAG;
		}
		else if ( char === '.' || char === ':' ) {
			debug( 'IN_OPENING_TAG_NAME -> IN_OPENING_TAG' );
			this._state = IN_ANGLE_LINK;
		}
	}

	_inOpeningTag( char ) {
		this._current += char;
		if ( char === '{' && this._buffer.charAt( this.pos-1 ) === '=' ) {
			this._JSX_ATTRIBUTE_START = this._current.length;
			this._braceLevel = 1;
			debug( 'IN_OPENING_TAG -> IN_JSX_ATTRIBUTE' );
			this._state = IN_JSX_ATTRIBUTE;
		}
		else if ( char === '>' ) {
			this._openTagEnd = this._current.length;
			if ( this._buffer.charAt( this.pos-1 ) === '/' ) {
				this._level -= 1;
				if ( this._level === 0 ) {
					this.divHash[ '<div id="placeholder_'+this.pos+'"/>' ] = this._current;
					this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
					this._current = '';
					debug( 'IN_OPENING_TAG -> IN_BASE' );
					this._state = IN_BASE;
					this._openingTagName = null;
				} else {
					debug( 'IN_OPENING_TAG: IN_BETWEEN_TAGS' );
					this._state = IN_BETWEEN_TAGS;
				}
			} else {
				debug( 'IN_OPENING_TAG -> IN_BETWEEN_TAGS' );
				this._state = IN_BETWEEN_TAGS;
			}
		} else if ( isQuotationMark( char ) ) {
			this._stringOpener = char;
			debug( 'IN_OPENING_TAG -> IN_STRING_ATTRIBUTE' );
			this._state = IN_STRING_ATTRIBUTE;
		}
	}

	_inStringAttribute( char ) {
		this._current += char;
		if ( char === this._stringOpener && this._buffer.charAt( this.pos-1 ) !== '/' ) {
			debug( 'IN_STRING_ATTRIBUTE -> IN_OPENING_TAG' );
			this._state = IN_OPENING_TAG;
		}
	}

	_inJSXString( char ) {
		this._current += char;
		if ( char === '{' ) {
			this._braceLevel += 1;
		}
		else if ( char === '}' ) {
			this._braceLevel -= 1;
		}
		if ( this._braceLevel === 0 && this._buffer.charAt( this.pos-1 ) === '`' && char === '}' ) {
			if ( this._openingTagName ) {
				debug( 'IN_JSX_STRING -> IN_OPENING_TAG' );
				this._state = IN_OPENING_TAG;
			} else {
				debug( 'IN_JSX_STRING -> IN_BASE' );
				this.divHash[ '<div id="placeholder_'+this.pos+'"/>' ] = this._current;
				this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
				this._current = '';
				this._state = IN_BASE;
			}
		}
	}

	_replaceInnerJSXExpressions() {
		let inner = this._current.substring( this._JSX_ATTRIBUTE_START );
		this._current = this._current.substring( 0, this._JSX_ATTRIBUTE_START );

		let innerJSXStartTag = null;
		let current = '';
		let braceLevel = 0;
		let tagLevel = 0;
		let inString = false;
		let notSelfClosing = false;
		for ( let i = 0; i < inner.length; i++ ) {
			const char = inner[ i ];
			const prevChar = inner[ i-1 ];
			if ( innerJSXStartTag ) {
				if ( char === '{' ) {
					braceLevel += 1;
				}
				else if ( char === '}' ) {
					braceLevel -= 1;
				}
				current += char;
			}
			if ( isQuotationMark( char ) && prevChar !== '\\' ) {
				inString = !inString;
			}
			if ( braceLevel === 0 ) {
				if ( !innerJSXStartTag && char === '<' && inner[ i+1 ] !== '/' && !inString ) {
					innerJSXStartTag = tagName( inner, i+1 );
					notSelfClosing = false;
					tagLevel += 1;
					current = char;
				}
				else if ( innerJSXStartTag && char === '<' && inner[ i+1 ] !== '/' && !inString ) {
					if ( tagName( inner, i+1 ) === innerJSXStartTag ) {
						tagLevel += 1;
					} else {
						notSelfClosing = true;
					}
				}
				else if ( prevChar === '<' && char === '/' && !inString && tagName( inner, i+1 ) === innerJSXStartTag ) {
					tagLevel -= 1;
					if ( tagLevel === 0 ) {
						debug( 'Outer tag match found...' );
						const tokenizer = new Tokenizer();
						current += innerJSXStartTag + '>';
						i += innerJSXStartTag.length + 1;
						this._current += tokenizer.parse( current );
						current = '';
						innerJSXStartTag = null;
					}
				}
				else if ( innerJSXStartTag && !notSelfClosing && char === '>' && prevChar === '/' && tagLevel === 1 && !inString ) {
					debug( 'Self-closing tag match found...' );
					const tokenizer = new Tokenizer();
					this._current += tokenizer.parse( current );
					current = '';
					innerJSXStartTag = null;
					tagLevel = 0;
				}
				else if ( !innerJSXStartTag ) {
					this._current += char;
				}
			}
		}
	}

	_inJSXObject( char ) {
		this._current += char;
		if ( char === '{' ) {
			this._braceLevel += 1;
		}
		else if ( char === '}' ) {
			this._braceLevel -= 1;
		}
		if ( this._braceLevel === 0 ) {
			this._replaceInnerJSXExpressions();
			if ( this._openingTagName ) {
				debug( 'IN_JSX_OBJECT -> IN_OPENING_TAG' );
				this._state = IN_OPENING_TAG;
			} else {
				debug( 'IN_JSX_OBJECT -> IN_BASE' );
				this.divHash[ '<div id="placeholder_'+this.pos+'"/>' ] = this._current;
				this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
				this._current = '';
				this._state = IN_BASE;
			}
		}
	}

	_inJSXArray( char ) {
		this._current += char;
		if ( char === '{' ) {
			this._braceLevel += 1;
		}
		else if ( char === '}' ) {
			this._braceLevel -= 1;
		}
		if ( this._braceLevel === 0 && this._buffer.charAt( this.pos-1 ) === ']' && char === '}' ) {
			this._replaceInnerJSXExpressions();
			if ( this._openingTagName ) {
				debug( 'IN_JSX_ARRAY -> IN_OPENING_TAG' );
				this._state = IN_OPENING_TAG;
			} else {
				debug( 'IN_JSX_ARRAY -> IN_BASE' );
				this.divHash[ '<div id="placeholder_'+this.pos+'"/>' ] = this._current;
				this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
				this._current = '';
				this._state = IN_BASE;
			}
		}
	}

	_inJSXOther( char ) {
		this._current += char;
		if ( char === '{' ) {
			this._braceLevel += 1;
		}
		else if ( char === '}' ) {
			this._braceLevel -= 1;
		}
		if ( this._braceLevel === 0 ) {
			if ( this._openingTagName ) {
				debug( 'IN_JSX_OTHER -> IN_OPENING_TAG' );
				this._state = IN_OPENING_TAG;
			} else {
				debug( 'IN_JSX_OTHER -> IN_BASE' );
				this.divHash[ '<div id="placeholder_'+this.pos+'"/>' ] = this._current;
				this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
				this._current = '';
				this._state = IN_BASE;
			}
		}
	}

	_inJSXExpression( char ) {
		this._current += char;
		if ( char === '{' ) {
			this._braceLevel += 1;
		}
		else if ( char === '}' ) {
			this._braceLevel -= 1;
		}
		if ( this._braceLevel === 0 ) {
			this._JSX_ATTRIBUTE_END = this._current.length;
			const inner = this._current.substring( this._JSX_ATTRIBUTE_START, this._JSX_ATTRIBUTE_END-1 );
			const tokenizer = new Tokenizer();
			let replacement = tokenizer.parse( inner );
			this._current = this._current.substring( 0, this._JSX_ATTRIBUTE_START ) +
				replacement + char;
			if ( this._openingTagName ) {
				debug( 'IN_JSX_EXPRESSION -> IN_OPENING_TAG' );
				this._state = IN_OPENING_TAG;
			} else {
				debug( 'IN_JSX_EXPRESSION -> IN_BASE' );
				this.divHash[ '<div id="placeholder_'+this.pos+'"/>' ] = this._current;
				this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
				this._current = '';
				this._state = IN_BASE;
			}
		}
	}

	_inJSXAttribute( char ) {
		this._current += char;
		if ( char === '`' ) {
			debug( 'IN_BASE_JSX_ATTRIBUTE -> IN_JSX_STRING' );
			this._state = IN_JSX_STRING;
		}
		else if ( char === '{' ) {
			debug( 'IN_JSX_ATTRIBUTE -> IN_JSX_OBJECT' );
			this._state = IN_JSX_OBJECT;
		}
		else if ( char === '[' ) {
			debug( 'IN_JSX_ATTRIBUTE -> IN_JSX_ARRAY' );
			this._state = IN_JSX_ARRAY;
		}
		else if ( char === '<' ) {
			debug( 'IN_JSX_ATTRIBUTE -> IN_JSX_EXPRESSION' );
			this._state = IN_JSX_EXPRESSION;
		}
		else if ( !isWhitespace( char ) ) {
			debug( 'IN_JSX_ATTRIBUTE -> IN_JSX_OTHER' );
			this._state = IN_JSX_OTHER;
		}
	}

	parse( str ) {
		debug( 'Transform the following string: ' );
		debug( '---' );
		debug( str );
		debug( '---' );
		str = replace( str, RE_RAW_ATTRIBUTE, rawEscaper );
		this.setup( str );
		for ( this.pos = 0; this.pos < str.length; this.pos++ ) {
			let char = str.charAt( this.pos );
			switch ( this._state ) {
			case IN_BASE:
				this._inBase( char );
				break;
			case IN_EQUATION:
				this._inEquation( char );
				break;
			case IN_DISPLAY_EQUATION:
				this._inDisplayEquation( char );
				break;
			case IN_OPENING_TAG_NAME:
				this._inOpeningTagName( char );
				break;
			case IN_OPENING_TAG:
				this._inOpeningTag( char );
				break;
			case IN_CLOSING_TAG:
				this._inClosingTag( char );
				break;
			case IN_STRING_ATTRIBUTE:
				this._inStringAttribute( char );
				break;
			case IN_JSX_ATTRIBUTE:
				this._inJSXAttribute( char );
				break;
			case IN_JSX_STRING:
				this._inJSXString( char );
				break;
			case IN_JSX_OBJECT:
				this._inJSXObject( char );
				break;
			case IN_JSX_ARRAY:
				this._inJSXArray( char );
				break;
			case IN_JSX_EXPRESSION:
				this._inJSXExpression( char );
				break;
			case IN_JSX_OTHER:
				this._inJSXOther( char );
				break;
			case IN_BETWEEN_TAGS:
				this._inBetweenTags( char );
				break;
			case IN_ANGLE_LINK:
				this._inAngleLink( char );
				break;
			}
			if ( this.pos === str.length - 1 ) {
				debug( 'Remainder of input string: '+this._current );
				this.tokens.push( this._current );
			}
		}
		let out = this.tokens.join( '' );
		out = this.inline ? md.renderInline( out ) : md.render( out );
		for ( let key in this.divHash ) {
			if ( hasOwnProp( this.divHash, key ) ) {
				// Treat dollar signs literally and do not confuse them for replacement patterns:
				const replacement = replace( this.divHash[ key ], '$', '$$$$' );
				out = out.replace( key, replacement );
			}
		}
		debug( 'Processed string: ' );
		debug( '---' );
		debug( out );
		debug( '---' );
		return out;
	}
}


// EXPORTS //

export default Tokenizer;
