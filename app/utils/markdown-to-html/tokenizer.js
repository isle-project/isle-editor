// MODULES //

import logger from 'debug';
import { EOL } from 'os';
import markdownit from 'markdown-it';
import replace from '@stdlib/string/replace';
import startsWith from '@stdlib/string/starts-with';
import removeFirst from '@stdlib/string/remove-first';
import trim from '@stdlib/string/trim';
import endsWith from '@stdlib/string/ends-with';
import removeLast from '@stdlib/string/remove-last';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isLowercase from '@stdlib/assert/is-lowercase';


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
const RE_ALPHANUMERIC = /[A-Z0-9.]/i;
const RE_ALPHACHAR = /[A-Z]/i;
const RE_INNER_TAGS = /^(?:th|td)$/;
const RE_FLEX_TAGS = /^(?:Col|Row|tr|Tab|Slide)$/;
const RE_INLINE_TAGS = /^(?:a|abbr|acronym|b|bdo|big|br|button|cite|code|dfn|em|i|img|input|kbd|label|map|object|output|q|samp|script|select|small|span|strong|sub|sup|textarea|time|tt|var|Badge|BeaconTooltip|Button|CheckboxInput|Citation|Clock|Input|Link|Nav\.Link|NavLink|NumberInput|RHelp|SelectInput|SelectQuestion|SliderInput|Text|TeX|TextArea|TextInput|Typewriter)$/;
const RE_RAW_ATTRIBUTE = /<(TeX|Text)([^>]*?)raw *= *("[^"]*"|{`[^`]*`})/g;
const RE_LINE_BEGINNING = /(^|\r\n|\n)[ \t]+(?=[^-\d ][\s\S]+(\r?\n|$))/g;

const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
md.disable( 'code' );
md.renderer.rules.link_open = function onLinkOpen( tokens, idx, options, env, renderer ) {
	// If you are sure other plugins can't add `target` - drop check below
	const token = tokens[ idx ];
	const aIndex = token.attrIndex( 'target' );
	token.tag = 'Link';
	if ( aIndex < 0 ) {
		token.attrPush( [ 'target', '_blank' ] ); // add new attribute...
	} else {
		token.attrs[ aIndex ][ 1 ] = '_blank'; // replace value of existing attribute...
	}
	// Pass token to default renderer:
	return renderer.renderToken( tokens, idx, options );
};
md.renderer.rules.link_close = function onLinkClose( tokens, idx, options, env, renderer ) {
	tokens[ idx ].tag = 'Link';
	return renderer.renderToken( tokens, idx, options );
};
md.renderer.rules.image = function onImage( tokens, idx, options, env, renderer ) {
	const token = tokens[ idx ];
	token.attrs[ token.attrIndex('alt') ][ 1 ] = renderer.renderInlineAsText( token.children, options, env );
	token.tag = 'Image';
	return renderer.renderToken( tokens, idx, options );
};
md.renderer.rules.heading_open = ( tokens, idx, options, env, renderer ) => {
	if ( !env.addLineWrappers ) {
		return renderer.renderToken( tokens, idx, options );
	}
	const line = env.initialLineNumber + env.lineAdjustment + tokens[ idx ].map[ 0 ];
	return `<LineWrapper tagName="${tokens[ idx ].tag}" startLineNumber={${line}} endLineNumber={${line}} >${renderer.renderToken( tokens, idx, options )}`;
};
md.renderer.rules.heading_close = ( tokens, idx, options, env, renderer ) => {
	if ( !env.addLineWrappers ) {
		return renderer.renderToken( tokens, idx, options );
	}
	return `${renderer.renderToken( tokens, idx, options )}</LineWrapper>`;
};
md.renderer.rules.paragraph_open = ( tokens, idx, options, env, renderer ) => {
	if ( !env.addLineWrappers || !env.outer || isSlideDelimiter( tokens[ idx+1 ] ) ) {
		return renderer.renderToken( tokens, idx, options );
	}
	const line = env.initialLineNumber + env.lineAdjustment + tokens[ idx ].map[ 0 ];
	const content = renderer.renderToken( tokens, idx, options );
	return `<LineWrapper tagName="${tokens[ idx ].tag}" startLineNumber={${line}} endLineNumber={${line}} >${content}`;
};
md.renderer.rules.paragraph_close = ( tokens, idx, options, env, renderer ) => {
	if ( !env.addLineWrappers || !env.outer || isSlideDelimiter( tokens[ idx-1 ] ) ) {
		return renderer.renderToken( tokens, idx, options );
	}
	return `${renderer.renderToken( tokens, idx, options )}</LineWrapper>`;
};
md.renderer.rules.html_block = ( tokens, idx, options, env, renderer ) => {
	const { content } = tokens[ idx ];
	const match = content.match( /data-lines="(\d+)"/ );
	if ( match && match[ 1 ] ) {
		env.lineAdjustment += Number( match[ 1 ] );
	}
	if ( content.includes( '<LineButtons' ) ) {
		env.lineAdjustment -= 2;
	}
	return content;
};
md.renderer.rules.html_inline = ( tokens, idx, options, env, renderer ) => {
	const { content } = tokens[ idx ];
	if ( content.includes( '<LineButtons' ) ) {
		env.lineAdjustment -= 2;
	}
	return content;
};


// FUNCTIONS //

function isSlideDelimiter( token ) {
	return (
		token.type === 'inline' &&
		token.children.length &&
		token.children[ 0 ].content === '==='
	);
}

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
	return replace( str, RE_LINE_BEGINNING, '$1' );
}

function isPreviousChar( buffer, pos, char ) {
	pos -= 1;
	while ( isWhitespace( buffer[ pos ] ) ) {
		pos -= 1;
	}
	return buffer.charAt( pos ) === char;
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
		debug( 'Create tokenizer: '+JSON.stringify( opts ) );
		if ( opts && opts.lineNumber ) {
			this.initialLineNumber = opts.lineNumber;
		} else {
			this.initialLineNumber = 1;
		}
		if ( opts ) {
			this.inline = opts.inline ? true : false;
			this.addEmptySpans = opts.addEmptySpans && !this.inline ? true : false;
			this.lineNumber = this.initialLineNumber;
			this.outer = opts.outer ? true : false;
			this.addLineWrappers = opts.addLineWrappers;
		}
	}

	setup( str ) {
		debug( 'Setup tokenizer...' );
		this.tokens = [];
		this._buffer = str;
		this._current = '';
		this._openingTagName = null;
		this._openTagEnd = null;
		this._endTagStart = null;
		this._state = IN_BASE;
		this._braceLevel = 0;
		this._level = 0;

		this._startLineNumber = null;
		this._endLineNumber = null;
		this.pos = 0;
		this.placeholderHash = {};
		this.inBetweenEquation = false;
	}

	_inBase( char ) {
		const pos = this.pos;
		const nextChar = this._buffer.charAt( pos+1 );
		if (
			this.addEmptySpans &&
			char === '\n' &&
			( nextChar === '\n' || nextChar === '\r' )
		) {
			this._current += `${EOL}<LineButtons show={${!endsWith( this._current, `${this.lineNumber-1}} />${EOL}${EOL}` )}} lineNumber={${this.lineNumber}} />${EOL}`;
		}
		else if (
			char === '<' &&
			!isWhitespace( nextChar ) && // Avoid mistaking smaller than sign in text as tag opening
			this._buffer.charAt( pos-1 ) !== '\\' // Allow escaping of left angle brackets
		) {
			debug( 'IN_BASE -> IN_OPENING_TAG_NAME' );
			this._state = IN_OPENING_TAG_NAME;
			this._level += 1;
			this._startTagNamePos = 0;
			this._startLineNumber = this.lineNumber;
		}
		else if ( char === '$' ) {
			this._eqnChar = char;
			const prevChar = this._buffer.charAt( pos-1 );
			if (
				nextChar === '$' &&
				prevChar !== '\\' &&
				nextChar !== '{'
			) {
				debug( 'IN_BASE -> IN_DISPLAY_EQUATION' );
				this._state = IN_DISPLAY_EQUATION;
				this.pos += 1; // skip the next opening `$` character
			}
			else if (
				( prevChar !== '\\' && nextChar !== '$' && nextChar !== '{' ) ||
				( prevChar === '\\' && nextChar === '(' )
			) {
				debug( 'IN_BASE -> IN_EQUATION' );
				this._state = IN_EQUATION;
			}
		}
		else if ( char === '\\' ) {
			this._eqnChar = char;
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
		const prevChar = this._buffer.charAt( this.pos-1 );
		const nextChar = this._buffer.charAt( this.pos+1 );
		if (
			( this._eqnChar === '$' && char === '$' ) ||
			( this._eqnChar === '\\' && char === ')' && prevChar === '\\' )
		) {
			let eqn = removeFirst( this._current );
			if ( this._eqnChar === '\\' ) {
				eqn = removeLast( eqn );
			}
			const str = '<TeX raw={String.raw`' + eqn + '`} />';
			this.placeholderHash[ '<div id="placeholder_'+this.pos+'"/>' ] = str;
			this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
			debug( 'IN_EQUATION -> IN_BASE' );
			this._current = '';
			this._state = IN_BASE;
		}
		else {
			this._current += char;
		}
		if ( nextChar === '<' && RE_ALPHACHAR.test( this._buffer.charAt( this.pos+2 ) ) ) {
			debug( 'IN_EQUATION -> IN_BASE' );
			this._state = IN_BASE;
		}
	}

	_inDisplayEquation( char ) {
		const prevChar = this._buffer.charAt( this.pos-1 );
		const nextChar = this._buffer.charAt( this.pos+1 );
		if (
			( char === '$' && prevChar === '$' ) ||
			( this._eqnChar === '\\' && char === ']' && prevChar === '\\' )
		) {
			const eqn = this._current.substring( 1, this._current.length-1 );
			const str = '<TeX raw={String.raw`' + eqn + '`} displayMode />';
			this.placeholderHash[ '<div id="placeholder_'+this.pos+'"/>' ] = str;
			this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
			debug( 'IN_DISPLAY_EQUATION -> IN_BASE' );
			this._current = '';
			this._state = IN_BASE;
		} else {
			this._current += char;
		}
		if ( nextChar === '<' && RE_ALPHACHAR.test( this._buffer.charAt( this.pos+2 ) ) ) {
			debug( 'IN_DISPLAY_EQUATION -> IN_BASE' );
			this._current = this._eqnChar + this._current;
			this._state = IN_BASE;
		}
	}

	_inAngleLink( char ) {
		this._current += char;
		if ( char === '>' ) {
			const url = this._current.substring( this._startTagNamePos+1, this._current.length-1 );
			debug( 'IN_ANGLE_LINK -> IN_BASE' );
			this._state = IN_BASE;
			this._level -= 1;
			const replacement = '<Link href="'+url+'" >'+url+'</Link>';
			this.placeholderHash[ 'ANGLE_LINK'+this.pos ] = replacement;
			this.tokens.push( 'ANGLE_LINK'+this.pos );
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
					const isInner = RE_INNER_TAGS.test( this._openingTagName ) ||
						RE_INLINE_TAGS.test( this._openingTagName );
					const tokenizer = new Tokenizer({
						inline: isInner,
						lineNumber: this._startLineNumber,
						addLineWrappers: this.addLineWrappers,
						addEmptySpans: this.addEmptySpans
					});
					if ( this.betweenStr && this.betweenStr.length > 0 ) {
						let str = tokenizer.parse( trimLineStarts( this.betweenStr ) );
						str = replace( str, '<span />', '' );
						this._current += EOL + str + '<';
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
			const isInline = RE_INLINE_TAGS.test( this._openingTagName );
			if ( this._openingTagName === 'a' ) {
				this._current = replace( this._current, '<a ', '<Link ' );
				this._current = replace( this._current, '</a>', '</Link>' );
			}
			this._endLineNumber = this.lineNumber;
			if (
				this.addLineWrappers && !isInline &&
				!RE_INNER_TAGS.test( this._openingTagName ) &&
				!RE_FLEX_TAGS.test( this._openingTagName )
			) {
				this._current = '<LineWrapper tagName="'+this._openingTagName+'" startLineNumber={'+this._startLineNumber+'} endLineNumber={'+this._endLineNumber+'} >' + this._current + '</LineWrapper>';
			}
			const placeholder = isInline ? 'PLACEHOLDER_'+this.pos : '<div id="placeholder_'+this.pos+'" data-lines="'+(this._endLineNumber - this._startLineNumber)+'"/>';
			this.placeholderHash[ placeholder ] = this._current;
			this.tokens.push( placeholder );
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
		else if (
			( char === '.' || char === ':' ) &&
			isLowercase( this._current[ this._startTagNamePos+1 ] ) // do not confuse tags such as `Nav.Item` with links...
		) {
			debug( 'IN_OPENING_TAG_NAME -> IN_ANGLE_LINK' );
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
			this._endLineNumber = this.lineNumber;
			if ( this._buffer.charAt( this.pos-1 ) === '/' ) {
				const isInner = RE_INNER_TAGS.test( this._openingTagName ) ||
					RE_INLINE_TAGS.test( this._openingTagName );
				if ( this.addLineWrappers && !isInner ) {
					this._current = '<LineWrapper tagName="'+this._openingTagName+'" startLineNumber={'+this._startLineNumber+'} endLineNumber={'+this._endLineNumber+'} >' + this._current + '</LineWrapper>';
				}
				this._level -= 1;
				if ( this._level === 0 ) {
					const placeholder = '<div id="placeholder_'+this.pos+'" data-lines="'+(this.lineNumber - this._startLineNumber)+'" />';
					this.placeholderHash[ placeholder ] = this._current;
					this.tokens.push( placeholder );
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
		if ( this._braceLevel === 0 && char === '}' && isPreviousChar( this._buffer, this.pos, '`' ) ) {
			if ( this._openingTagName ) {
				debug( 'IN_JSX_STRING -> IN_OPENING_TAG' );
				this._state = IN_OPENING_TAG;
			} else {
				debug( 'IN_JSX_STRING -> IN_BASE' );
				this.placeholderHash[ '<div id="placeholder_'+this.pos+'"/>' ] = this._current;
				this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
				this._current = '';
				this._state = IN_BASE;
			}
		}
	}

	_replaceInnerJSXExpressions() {
		debug( 'Replacing inner JSX expressions...' );
		let inner = this._current.substring( this._JSX_ATTRIBUTE_START );
		this._current = this._current.substring( 0, this._JSX_ATTRIBUTE_START );

		let innerJSXStartTag = null;
		let current = '';
		let braceLevel = 0;
		let tagLevel = 0;
		let inString = false;
		let notSelfClosing = false;
		let startLineNumber;
		for ( let i = 0; i < inner.length; i++ ) {
			const char = inner[ i ];
			if ( char === '\n' ) {
				this._jsxStartLine += 1;
			}
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
			if ( !innerJSXStartTag && isQuotationMark( char ) && prevChar !== '\\' ) {
				if ( !inString ) {
					this._stringOpener = char;
					inString = true;
				} else if ( char === this._stringOpener ) {
					inString = false;
				}
			}
			if ( braceLevel === 0 ) {
				const tag = tagName( inner, i+1 );
				if ( !innerJSXStartTag && char === '<' && inner[ i+1 ] !== '/' && !inString ) {
					innerJSXStartTag = tag;
					startLineNumber = this._jsxStartLine;
					notSelfClosing = false;
					tagLevel += 1;
					current = char;
				}
				else if ( innerJSXStartTag && char === '<' && inner[ i+1 ] !== '/' && !inString ) {
					if ( innerJSXStartTag === tag ) {
						tagLevel += 1;
					} else {
						notSelfClosing = true;
					}
				}
				else if ( prevChar === '<' && char === '/' && !inString && innerJSXStartTag === tag ) {
					tagLevel -= 1;
					if ( tagLevel === 0 ) {
						debug( 'Outer tag match found...' );
						current += innerJSXStartTag + '>';
						i += innerJSXStartTag.length + 1;
						const isInner = RE_INNER_TAGS.test( innerJSXStartTag ) ||
							RE_INLINE_TAGS.test( innerJSXStartTag );
						const tokenizer = new Tokenizer({
							inline: isInner,
							lineNumber: startLineNumber,
							addLineWrappers: this.addLineWrappers,
							addEmptySpans: this.addEmptySpans
						});
						this._current += tokenizer.parse( current );
						current = '';
						innerJSXStartTag = null;
					}
				}
				else if ( innerJSXStartTag && !notSelfClosing && char === '>' && prevChar === '/' && tagLevel === 1 && !inString ) {
					debug( 'Self-closing tag match found...' );
					const isInner = RE_INNER_TAGS.test( innerJSXStartTag ) ||
						RE_INLINE_TAGS.test( innerJSXStartTag );
					const tokenizer = new Tokenizer({
						inline: isInner,
						lineNumber: startLineNumber,
						addLineWrappers: this.addLineWrappers,
						addEmptySpans: this.addEmptySpans
					});
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
				this.placeholderHash[ '<div id="placeholder_'+this.pos+'"/>' ] = this._current;
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
				this.placeholderHash[ '<div id="placeholder_'+this.pos+'"/>' ] = this._current;
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
				this.placeholderHash[ '<div id="placeholder_'+this.pos+'"/>' ] = trim( this._current );
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
			const tag = tagName( inner, 1 );
			const isInner = RE_INNER_TAGS.test( tag ) ||
				RE_INLINE_TAGS.test( tag );
			const tokenizer = new Tokenizer({
				inline: isInner,
				lineNumber: this._jsxStartLine,
				addLineWrappers: this.addLineWrappers,
				addEmptySpans: this.addEmptySpans
			});
			let replacement = tokenizer.parse( inner );
			this._current = this._current.substring( 0, this._JSX_ATTRIBUTE_START ) +
				replacement + char;
				if ( this._openingTagName ) {
					debug( 'IN_JSX_EXPRESSION -> IN_OPENING_TAG' );
					this._state = IN_OPENING_TAG;
				} else {
					debug( 'IN_JSX_EXPRESSION -> IN_BASE' );
					this.placeholderHash[ '<div id="placeholder_'+this.pos+'"/>' ] = this._current;
					this.tokens.push( '<div id="placeholder_'+this.pos+'"/>' );
					this._current = '';
					this._state = IN_BASE;
				}
		}
	}

	_inJSXAttribute( char ) {
		this._current += char;
		if ( char === '`' ) {
			debug( 'IN_JSX_ATTRIBUTE -> IN_JSX_STRING' );
			this._state = IN_JSX_STRING;
		}
		else if ( char === '{' ) {
			debug( 'IN_JSX_ATTRIBUTE -> IN_JSX_OBJECT' );
			this._state = IN_JSX_OBJECT;
			this._jsxStartLine = this.lineNumber;
		}
		else if ( char === '[' ) {
			debug( 'IN_JSX_ATTRIBUTE -> IN_JSX_ARRAY' );
			this._state = IN_JSX_ARRAY;
			this._jsxStartLine = this.lineNumber;
		}
		else if ( char === '<' ) {
			debug( 'IN_JSX_ATTRIBUTE -> IN_JSX_EXPRESSION' );
			this._state = IN_JSX_EXPRESSION;
			this._jsxStartLine = this.lineNumber;
		}
		else if ( char === '}' ) {
			debug( 'IN_JSX_ATTRIBUTE -> IN_OPENING_TAG' );
			this._state = IN_OPENING_TAG;
		}
		else if ( !isWhitespace( char ) ) {
			debug( 'IN_JSX_ATTRIBUTE -> IN_JSX_OTHER' );
			this._state = IN_JSX_OTHER;
		}
	}

	leftTrim( str ) {
		let idx = 0;
		for ( let i = 0; i < str.length; i++ ) {
			const char = str[ i ];
			if ( isWhitespace( char ) ) {
				if ( char === '\n' ) {
					this.lineNumber += 1;
				}
			} else {
				idx = i;
				break;
			}
		}
		return str.substring( idx );
	}

	rightTrim( str ) {
		let i;
		for ( i = str.length - 1; i >= 0; i-- ) {
			const char = str[ i ];
			if ( isWhitespace( char ) ) {
				if ( char === '\n' ) {
					this.lineNumber += 1;
				}
			} else {
				break;
			}
		}
		return str.substring( 0, i + 1 );
	}

	parse( str ) {
		debug( `Transform the following ${this.inline ? 'inline ' : ''}string: ` );
		debug( '---' );
		debug( str );
		debug( '---' );
		str = replace( str, RE_RAW_ATTRIBUTE, rawEscaper );
		if ( this.inline ) {
			str = this.leftTrim( str );
		}
		this.setup( str );
		for ( this.pos = 0; this.pos < str.length; this.pos++ ) {
			let char = str.charAt( this.pos );
			if ( char === '\n' ) {
				this.lineNumber += 1;
			}
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
				if ( this._state === IN_BETWEEN_TAGS ) {
					throw new Error( `Make sure <${this._openingTagName}> tag is properly closed:\n\n${this._current}${this.betweenStr || ''}` );
				}
				debug( 'Remainder of input string: '+this._current );
				if ( this.inline ) {
					this._current = this.rightTrim( this._current );
				}
				this.tokens.push( this._current );
			}
		}
		let out = this.tokens.join( '' );
		const env = {
			initialLineNumber: this.initialLineNumber,
			lineAdjustment: 0,
			outer: this.outer,
			addLineWrappers: this.addLineWrappers
		};
		out = this.inline ? md.renderInline( out, env ) : md.render( out, env );
		for ( let key in this.placeholderHash ) {
			if ( hasOwnProp( this.placeholderHash, key ) ) {
				// Treat dollar signs literally and do not confuse them for replacement patterns:
				const replacement = replace( this.placeholderHash[ key ], '$', '$$$$' );
				out = out.replace( key, replacement );
			}
		}
		debug( 'Processed string: ' );
		debug( '---' );
		debug( out );
		debug( '---' );
		if ( this.addEmptySpans && this.outer ) {
			out += `${EOL}<LineButtons show={${!endsWith( this._current, `${this.lineNumber-1}} />${EOL}${EOL}` )}} lineNumber={${this.lineNumber+1}} />${EOL}`;
		}
		return out;
	}
}


// EXPORTS //

export default Tokenizer;
