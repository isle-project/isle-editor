// CONSTANTS //

const IN_BASE = 0;
const IN_OPENING_TAG = 1;
const IN_CLOSING_TAG = 2;
const IN_STRING_ATTRIBUTE = 3;
const IN_JSX_ATTRIBUTE = 4;
const IN_BETWEEN_TAGS = 5;
const IN_JSX_EXPRESSION = 6;


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
} // end FUNCTION isQuotationMark()

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
} // end FUNCTION isWhitespace()


// MAIN //

class Tokenizer{
	setup( str ) {
		this.divHash = {};
		this.tokens = [];
		this._buffer = str;
		this._current = '';
		this._state = IN_BASE;
		this._braceLevel = 0;
		this._level = 0;
	}

	_inBase( char, i ) {
		if ( char === '<' && !isWhitespace( this._buffer.charAt( i+1 ) ) ) {
			this._state = IN_OPENING_TAG;
			this.tokens.push( this._current );
			this._level += 1;
			this._current = char;
		} else if ( char === '{' ) {
			this._state = IN_JSX_EXPRESSION;
			this.tokens.push( this._current );
			this._braceLevel += 1;
			this._current = char;
		} else {
			this._current += char;
		}
	}

	_inBetweenTags( char, i ) {
		this._current += char;
		if ( char === '<' && !isWhitespace( this._buffer.charAt( i+1 ) ) ) {
			if ( this._buffer.charAt( i+1 ) !== '/' ) {
				this._level += 1;
				this._state = IN_OPENING_TAG;
			} else {
				this._state = IN_CLOSING_TAG;
			}
		}
	}

	_inClosingTag( char, i ) {
		this._current += char;
		if ( char === '>' ) {
			this._level -= 1;
			if ( this._level === 0 ) {
				this.divHash[ '<div id="placeholder_'+i+'"/>' ] = this._current;
				this.tokens.push( '<div id="placeholder_'+i+'"/>' );
				this._current = '';
				this._state = IN_BASE;
			} else {
				this._state = IN_BETWEEN_TAGS;
			}
		}
	}

	_inOpeningTag( char, i ) {
		this._current += char;
		if ( char === '{' ) {
			this._braceLevel = 1;
			this._state = IN_JSX_ATTRIBUTE;
		}
		else if ( char === '>' ) {
			if ( this._buffer.charAt( i-1 ) === '/' ) {
				this._level -= 1;
				if ( this._level === 0 ) {
					this.divHash[ '<div id="placeholder_'+i+'"/>' ] = this._current;
					this.tokens.push( '<div id="placeholder_'+i+'"/>' );
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

	_inJSXExpression( char, i ) {
		this._current += char;
		if ( char === '{' ) {
			this._braceLevel += 1;
		}
		else if ( char === '}' ) {
			this._braceLevel -= 1;
		}
		if ( this._braceLevel === 0 ) {
			this.divHash[ '<div id="placeholder_'+i+'"/>' ] = this._current;
			this.tokens.push( '<div id="placeholder_'+i+'"/>' );
			this._current = '';
			this._state = IN_BASE;
		}
	}

	_inStringAttribute( char, i ) {
		this._current += char;
		if ( char === this._stringOpener && this._buffer.charAt( i-1 ) !== '/' ) {
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

		for ( let i = 0; i < str.length; i++ ) {
			let char = str.charAt( i );
			switch ( this._state ) {
			case IN_BASE:
				this._inBase( char, i );
				break;
			case IN_OPENING_TAG:
				this._inOpeningTag( char, i );
				break;
			case IN_CLOSING_TAG:
				this._inClosingTag( char, i );
				break;
			case IN_STRING_ATTRIBUTE:
				this._inStringAttribute( char, i );
				break;
			case IN_JSX_ATTRIBUTE:
				this._inJSXAttribute( char, i );
				break;
			case IN_JSX_EXPRESSION:
				this._inJSXExpression( char, i );
				break;
			case IN_BETWEEN_TAGS:
				this._inBetweenTags( char, i );
				break;
			}
			if ( i === str.length - 1 ) {
				this.tokens.push( this._current );
			}
		}
		return this.tokens;
	}
}


// EXPORTS //

module.exports = Tokenizer;
