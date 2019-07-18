// MODULES //

import logger from 'debug';
import trim from '@stdlib/string/trim';
import marked from './marked.js';
import { replaceAndEscapeEquations, replaceEquations } from './replace_equations.js';


// VARIABLES //

const debug = logger( 'isle:tokenizer' );
const IN_BASE = 0;
const IN_OPENING_TAG = 1;
const IN_OPENING_TAG_NAME = 11;
const IN_CLOSING_TAG = 2;
const IN_STRING_ATTRIBUTE = 3;
const IN_JSX_ATTRIBUTE = 4;
const IN_BETWEEN_TAGS = 5;
const IN_JSX_EXPRESSION = 6;
const IN_CODE = 7;
const IN_CODE_BLOCK = 8;
const IN_BLOCKQUOTE = 9;
const IN_ANGLE_LINK = 10;


// FUNCTIONS //

/**
* Tests whether character is a quotation mark.
*
* @param {string} c - input character
* @returns {boolean} boolean indicating whether character is a quotation mark
*/
function isQuotationMark( c ) {
	return (
		c === '\'' ||
		c === '"' ||
		c === '`'
	);
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
	constructor( props ) {
		this.replaceEquations = props.escapeBackslash ? replaceAndEscapeEquations : replaceEquations;
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
	}

	_inBase( char ) {
		const pos = this.pos;
		if (
			char === '<' &&
			!isWhitespace( this._buffer.charAt( pos+1 ) ) && // Avoid mistaking smaller than sign in text as tag opening
			this._buffer.charAt( pos-1 ) !== '\\' // Allow escaping of left angle brackets
		) {
			this._state = IN_OPENING_TAG_NAME;
			this._level += 1;
			this._startTagNamePos = 0;
		} else if ( char === '`' && this._buffer.charAt( pos+1 ) !== '`' ) {
			this._state = IN_CODE;
		} else if ( char === '`' && this._buffer.charAt( pos+1 ) === '`' && this._buffer.charAt( pos+2 ) === '`' ) {
			this._state = IN_CODE_BLOCK;
		} else if ( char === '>' && this._buffer.charAt( pos-1 ) === '\n' ) {
			this._state = IN_BLOCKQUOTE;
		}
		if ( this._state !== IN_BASE ) {
			// Exiting base state, push token:
			this.tokens.push( this._current );
			this._current = char;
		} else {
			this._current += char;
		}
	}

	_inCodeBlock( char ) {
		const pos = this.pos;
		this._current += char;
		if ( char === '`' && this._buffer.charAt( pos+1 ) === '`' && this._buffer.charAt( pos+2 ) === '`' ) {
			this._state = IN_BASE;
			this._current += '``';
			this.pos += 2;
			this.tokens.push( marked( trim( this._current ) ) );
			this._current = '';
		}
	}

	_inCode( char ) {
		this._current += char;
		if ( char === '`' ) {
			this._state = IN_BASE;
			this.tokens.push( marked( trim( this._current ) ) );
			this._current = '';
		}
	}

	_inBlockQuote( char ) {
		this._current += char;
		if ( char === '\n' && this._buffer.charAt( this.pos +1 ) === '\n' ) {
			this._state = IN_BASE;
			const replacement = this.replaceEquations( marked( trim( this._current ) ) );
			this.tokens.push( replacement );
			this._current = '';
		}
	}

	_inAngleLink( char ) {
		this._current += char;
		if ( char === '>' ) {
			this._level -= 1;
			if ( this._level === 0 ) {
				this._state = IN_BASE;
				const url = this._current.substring( this._startTagNamePos+1, this._current.length-1 );
				const before = this._current.substring( 0, this._startTagNamePos );
				const replacement = this.replaceEquations( marked( trim( before ) ) ) +
					' <a href="'+url+'">'+url+'</a>';
				this.divHash[ '<div id="placeholder_'+this.pos+'"/>' ] = replacement;
				this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
				this._current = '';
			} else {
				this._state = IN_BETWEEN_TAGS;
				const url = this._current.substring( this._startTagNamePos+1, this._current.length-1 );
				this._current = this._current.substring( 0, this._startTagNamePos ) +
				' ['+url+']('+url+')';
			}
		}
	}

	_inBetweenTags( char ) {
		this._current += char;
		if ( char === '<' && !isWhitespace( this._buffer.charAt( this.pos+1 ) ) ) {
			const text = this._current.substring( this._openTagEnd, this._current.length-1 );
			let replacement = this.replaceEquations( marked( trim( text ) ) );
			this._current = this._current.substring( 0, this._openTagEnd ) +
				replacement + '<';
			if ( this._buffer.charAt( this.pos+1 ) !== '/' ) {
				this._level += 1;
				this._state = IN_OPENING_TAG_NAME;
				this._startTagNamePos = this._current.length-1;
			} else {
				this._endTagStart = this._current.length - 1;
				this._state = IN_CLOSING_TAG;
			}
		}
	}

	_inClosingTag( char ) {
		this._current += char;
		if ( char === '>' ) {
			this._level -= 1;
			this._openTagEnd = this._current.length;
			this._endTagStart = null;
			if ( this._level === 0 ) {
				this.tokens.push( this._current );
				this._current = '';
				this._state = IN_BASE;
			} else {
				this._state = IN_BETWEEN_TAGS;
			}
		}
	}

	_inOpeningTagName( char ) {
		this._current += char;
		if ( isWhitespace( char ) ) {
			this._state = IN_OPENING_TAG;
		}
		else if ( this._buffer.charAt( this.pos+1 ) === '>' ) {
			this._state = IN_OPENING_TAG;
		}
		else if ( char === '.' || char === ':' || char === '/' ) {
			this._state = IN_ANGLE_LINK;
		}
	}

	_inOpeningTag( char ) {
		this._current += char;
		if ( char === '{' ) {
			this._braceLevel = 1;
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
					this._state = IN_BASE;
				} else {
					this._state = IN_BETWEEN_TAGS;
				}
			} else {
				this._state = IN_BETWEEN_TAGS;
			}
		} else if ( isQuotationMark( char ) ) {
			this._stringOpener = char;
			this._state = IN_STRING_ATTRIBUTE;
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
			this.divHash[ '<div id="placeholder_'+this.pos+'"/>' ] = this._current;
			this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
			this._current = '';
			this._state = IN_BASE;
		}
	}

	_inStringAttribute( char ) {
		this._current += char;
		if ( char === this._stringOpener && this._buffer.charAt( this.pos-1 ) !== '/' ) {
			this._state = IN_OPENING_TAG;
		}
	}

	_inJSXAttribute( char ) {
		this._current += char;
		if ( char === '{' ) {
			this._braceLevel += 1;
		}
		else if ( char === '}' ) {
			this._braceLevel -= 1;
		}
		if ( this._braceLevel === 0 ) {
			this._state = IN_OPENING_TAG;
		}
	}

	parse( str ) {
		this.setup( str );
		for ( this.pos = 0; this.pos < str.length; this.pos++ ) {
			let char = str.charAt( this.pos );
			debug( 'Processing character: '+ char );
			debug( 'Current state: '+ this._state );
			switch ( this._state ) {
			case IN_BASE:
				this._inBase( char );
				break;
			case IN_CODE:
				this._inCode( char );
				break;
			case IN_CODE_BLOCK:
				this._inCodeBlock( char );
				break;
			case IN_BLOCKQUOTE:
				this._inBlockQuote( char );
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
			case IN_JSX_EXPRESSION:
				this._inJSXExpression( char );
				break;
			case IN_BETWEEN_TAGS:
				this._inBetweenTags( char );
				break;
			case IN_ANGLE_LINK:
				this._inAngleLink( char );
				break;
			}
			if ( this.pos === str.length - 1 ) {
				this.tokens.push( this._current );
			}
		}
		return this.tokens;
	}
}


// EXPORTS //

export default Tokenizer;
