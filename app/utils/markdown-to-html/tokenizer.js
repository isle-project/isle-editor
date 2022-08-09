// MODULES //

const logger = require( 'debug' );
const { EOL } = require( 'os' );
const replace = require( '@stdlib/string/replace' );
const removeFirst = require( '@stdlib/string/remove-first' );
const trim = require( '@stdlib/string/trim' );
const endsWith = require( '@stdlib/string/ends-with' );
const removeLast = require( '@stdlib/string/remove-last' );
const hasOwnProp = require( '@stdlib/assert/has-own-property' );
const isLowercase = require( '@stdlib/assert/is-lowercase' );
const isCapitalized = require( '@stdlib/assert/is-capitalized' );
const isQuotationMark = require( './is_quotation_mark.js' );
const isPreviousChar = require( './is_previous_char.js' );
const trimLineStarts = require( './trim_line_starts.js' );
const isEmptyLine = require( './is_empty_line.js' );
const isWhitespace = require( './is_whitespace.js' );
const generateUID = require( './uid.js' );
const tagName = require( './tagname.js' );
const md = require( './markdownit.js' );


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
const RE_ALPHACHAR = /[A-Z]/i;
const RE_NO_WRAPPER_TAGS = /^(?:SlideAppear|VictoryChart)$/;
const RE_INNER_TAGS = /^(?:th|td)$/;
const RE_FLEX_TAGS = /^(?:Col|Row|tr|Tab|Slide|Language\.[a-zA-z]+)$/;
const RE_NO_LINE_ROW_COL = /<(?!\/?Row|\/?Col|LineButtons)/;
const RE_INLINE_ATTR = /\s(?:inline)(?:\s|={true})/;
const RE_DISPLAY_MODE = /\sdisplayMode(?:\s|={true})/;
const RE_INLINE_TAGS = /^(?:a|abbr|acronym|b|bdo|big|br|button|cite|code|dfn|em|i|img|input|kbd|label|map|object|output|q|samp|script|select|small|span|strong|sub|sup|textarea|time|tt|u|var|Badge|BeaconTooltip|Button|Citation|Clock|Input|Link|Nav\.Link|NavLink|RHelp|Text|TeX|Typewriter)$/;
const RE_SRC_URL = /\s(src|url|pdf)=['"]$/;
const RE_NO_ID_COMPONENTS = /^(?:Link|IFrame|TeX)$/;


// MAIN //

class Tokenizer {
	constructor( opts = {} ) {
		debug( 'Create tokenizer: '+JSON.stringify( opts ) );
		if ( opts && opts.lineNumber ) {
			this.initialLineNumber = opts.lineNumber;
		} else {
			this.initialLineNumber = 1;
		}
		this.inline = opts.inline ? true : false;
		this.addEmptySpans = opts.addEmptySpans && !this.inline ? true : false;
		this.lineNumber = this.initialLineNumber;
		this.columnNumber = opts.columnNumber ? opts.columnNumber : 0;
		this.outer = opts.outer ? true : false;
		this.addLineWrappers = opts.addLineWrappers;
		this.trimLineStarts = opts.trimLineStarts ? true : false;
		this.fileDirectory = opts.fileDirectory;
		this.uidHash = {};
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
		this._startColumn = null;
		this.pos = 0;
		this.placeholderHash = {};
		this.inBetweenEquation = false;
	}

	_inBase( char ) {
		const pos = this.pos;
		const nextChar = this._buffer.charAt( pos+1 );
		if (
			this.addEmptySpans &&
			isEmptyLine( this._buffer, pos ) &&
			(
				// Skip over slide transitions:
				this._buffer.charAt( pos-1 ) !== '=' ||
				this._buffer.charAt( pos-2 ) !== '=' ||
				this._buffer.charAt( pos-3 ) !== '='
			)
		) {
			if ( char === '\r' && nextChar === '\n' ) {
				this.lineNumber += 1;
				this.columnNumber = 0;
				this.pos += 1;
			}
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
			this._startColumn = this.columnNumber;
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
				this._startLineNumber = this.lineNumber;
				this._startColumn = this.columnNumber;
				this.pos += 1; // skip the next opening `$` character
			}
			else if (
				( prevChar !== '\\' && nextChar !== '$' && nextChar !== '{' ) ||
				( prevChar === '\\' && nextChar === '(' )
			) {
				debug( 'IN_BASE -> IN_EQUATION' );
				this._startLineNumber = this.lineNumber;
				this._startColumn = this.columnNumber;
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
			let str = '<TeX raw={String.raw`' + eqn + '`} />';
			if ( this.addLineWrappers ) {
				str = '<LineWrapper tagName="TeX" startLineNumber={'+this._startLineNumber+'} endLineNumber={'+this.lineNumber+'} startColumn={'+this._startColumn+'} endColumn={'+(this.columnNumber+1)+'} isInline={true} >' + str + '</LineWrapper>';
			}
			const placeholder = '<div id="placeholder_'+this.pos+'" data-lines="'+(this.lineNumber - this._startLineNumber)+'" />';
			this.placeholderHash[ placeholder ] = str;
			this.tokens.push( placeholder );
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
			let str = '<TeX raw={String.raw`' + eqn + '`} displayMode />';
			if ( this.addLineWrappers ) {
				str = '<LineWrapper tagName="TeX" startLineNumber={'+this._startLineNumber+'} endLineNumber={'+this.lineNumber+'} startColumn={'+this._startColumn+'} endColumn={'+(this.columnNumber+1)+'} isInline={false} >' + str + '</LineWrapper>';
			}
			const placeholder = '<div id="placeholder_'+this.pos+'" data-lines="'+(this.lineNumber - this._startLineNumber)+'" />';
			this.placeholderHash[ placeholder ] = str;
			this.tokens.push( placeholder );
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
						lineNumber: this._betweenLineNumber,
						addLineWrappers: this.addLineWrappers && !RE_NO_WRAPPER_TAGS.test( this._openingTagName ),
						addEmptySpans: this.addEmptySpans,
						trimLineStarts: true,
						columnNumber: this._betweenColumnNumber,
						fileDirectory: this.fileDirectory
					});
					if ( this.betweenStr && this.betweenStr.length > 0 ) {
						let str = tokenizer.parse( this.betweenStr );
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
			} else if ( this._openingTagName === 'Card.Link' ) {
				this._current = replace( this._current, '<Card.Link ', '<Link className="card-link" ' );
				this._current = replace( this._current, '</Card.Link>', '</Link>' );
			}
			else if ( this._openingTagName === 'Col' && !RE_NO_LINE_ROW_COL.test( this._current ) ) {
				this._current = replace( this._current, '<Col', '<Col className="editor-col"' );
			}
			else if ( this._openingTagName === 'Row' && !RE_NO_LINE_ROW_COL.test( this._current ) ) {
				this._current = replace( this._current, '<Row', '<Row className="editor-row"' );
			}
			this._endLineNumber = this.lineNumber;
			this._endColumn = this.columnNumber + 1;
			if (
				this.addLineWrappers &&
				!RE_INNER_TAGS.test( this._openingTagName ) &&
				!RE_FLEX_TAGS.test( this._openingTagName )
			) {
				this._current = '<LineWrapper tagName="'+this._openingTagName+'" startLineNumber={'+this._startLineNumber+'} endLineNumber={'+this._endLineNumber+'} startColumn={'+this._startColumn+'} endColumn={'+this._endColumn+'} isInline={'+isInline+'}>' + this._current + '</LineWrapper>';
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
			if ( this._openingTagName && !this.uidHash[ this._openingTagName ] ) {
				debug( 'Generate UID for '+this._openingTagName );
				this.uidHash[ this._openingTagName ] = generateUID( this._openingTagName );
			}
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
			this._endColumn = this.columnNumber + 1;
			if ( !this._current.includes( 'id=' ) && isCapitalized( this._openingTagName ) && !RE_NO_ID_COMPONENTS.test( this._openingTagName ) ) {
				const pos = this._startTagNamePos + this._openingTagName.length + 1;
				this._current = this._current.substring( 0, pos ) + ' id="'+this.uidHash[ this._openingTagName ]()+'"' + this._current.substring( pos );
			}
			if ( this._buffer.charAt( this.pos-1 ) === '/' ) {
				// Case: self-closing tag
				if (
					this.addLineWrappers &&
					!RE_INNER_TAGS.test( this._openingTagName ) &&
					!RE_FLEX_TAGS.test( this._openingTagName )
				) {
					const isInline = ( RE_INLINE_TAGS.test( this._openingTagName ) ||
						RE_INLINE_ATTR.test( this._current ) ) && !RE_DISPLAY_MODE.test( this._current );
					this._current = '<LineWrapper tagName="'+this._openingTagName+'" startLineNumber={'+this._startLineNumber+'} endLineNumber={'+this._endLineNumber+'} startColumn={'+this._startColumn+'} endColumn={'+this._endColumn+'} isInline={'+isInline+'} >' + this._current + '</LineWrapper>';
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
					this._betweenLineNumber = this.lineNumber;
					this._betweenColumnNumber = this.columnNumber;
				}
			} else {
				debug( 'IN_OPENING_TAG -> IN_BETWEEN_TAGS' );
				this._state = IN_BETWEEN_TAGS;
				this._betweenLineNumber = this.lineNumber;
				this._betweenColumnNumber = this.columnNumber;
			}
		} else if ( isQuotationMark( char ) ) {
			this._stringOpener = char;
			debug( 'IN_OPENING_TAG -> IN_STRING_ATTRIBUTE' );
			if ( this._openingTagName === 'Text' || this._openingTagName === 'TeX' ) {
				if ( this._buffer.charAt( this.pos-1 ) === '=' && endsWith( this._current, 'raw='+char ) ) {
					this._current = this._current.slice( 0, -1 ) + '{String.raw`';
					this.rawEscaping = true;
				}
			}
			else if (
				this.fileDirectory &&
				RE_SRC_URL.test( this._current ) &&
				this._buffer.charAt( this.pos + 1 ) === '.'
			) {
				// Change relative to absolute file paths:
				this._filePathStart = this._current.length - 1;
				this._current += this.fileDirectory;
				this.pos += 1; // skip over forward slash
			}
			this._state = IN_STRING_ATTRIBUTE;
		}
	}

	_inStringAttribute( char ) {
		this._current += char;
		if ( char === this._stringOpener && this._buffer.charAt( this.pos-1 ) !== '\\' ) {
			debug( 'IN_STRING_ATTRIBUTE -> IN_OPENING_TAG' );
			if ( this.rawEscaping ) {
				this._current = this._current.slice( 0, -1 ) + '`}';
				this.rawEscaping = false;
			}
			if ( this._filePathStart ) {
				const beforePath = this._current.substring( 0, this._filePathStart );
				const filePath = this._current.substring( this._filePathStart );
				if ( process.platform === 'win32' ) {
					this._current = beforePath + replace( filePath, '\\', '\\\\' );
				} else {
					this._current = beforePath + filePath;
				}
			}
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
			if (
				( isQuotationMark( char ) || char === '`' ) &&
				prevChar !== '\\'
			) {
				if ( !inString ) {
					// Do not treat a quote that is part of a contraction like "don't" as start of a string...
					if ( !RE_ALPHACHAR.test( prevChar ) || !innerJSXStartTag ) {
						this._stringOpener = char;
						inString = true;
					}
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
							addEmptySpans: this.addEmptySpans,
							fileDirectory: this.fileDirectory
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
						addEmptySpans: this.addEmptySpans,
						fileDirectory: this.fileDirectory
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
		if ( char === '`' && endsWith( this._current, 'raw={`' ) ) {
			this._current = this._current.slice( 0, -1 ) + 'String.raw`';
		}
		else if ( isQuotationMark( char ) ) {
			if ( endsWith( this._current, 'raw='+char ) ) {
				this._current = this._current.slice( 0, -1 ) + '{String.raw`';
				this._rawQuote = char;
			}
			else if ( char === this._rawQuote ) {
				this._current = this._current.slice( 0, -1 ) + '`}';
				this._rawQuote = null;
			}
		}
		else if ( char === '{' ) {
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
				addEmptySpans: this.addEmptySpans,
				fileDirectory: this.fileDirectory
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
			if ( this._openingTagName === 'Text' || this._openingTagName === 'TeX' ) {
				if ( char === '`' && endsWith( this._current, 'raw={`' ) ) {
					this._current = this._current.slice( 0, -1 ) + 'String.raw`';
				}
			}
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
					this.columnNumber = 0;
				} else {
					this.columnNumber += 1;
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
		if ( this.inline ) {
			str = this.leftTrim( str );
		}
		this.setup( str );
		for ( this.pos = 0; this.pos < str.length; this.pos++ ) {
			let char = str.charAt( this.pos );
			this.columnNumber += 1;
			if ( char === '\n' ) {
				this.lineNumber += 1;
				this.columnNumber = 0;
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
		if ( this.trimLineStarts ) {
			out = trimLineStarts( out );
		}
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

module.exports = Tokenizer;
