// MODULES //

import ReactDOM from 'react-dom';
import isRegExpString from '@stdlib/assert/is-regexp-string';
import reFromString from '@stdlib/utils/regexp-from-string';
import isObject from '@stdlib/assert/is-object';
import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import hasOwnProp from '@stdlib/assert/has-own-property';
import logger from 'debug';
import camelcase from 'utils/camelcase';


// VARIABLES //

const RE_SELECT = /select (?:the|or|a|) ?([\S]*)/i;
const RE_STYLE_SETTER = /CSS (?:set|change|modify|alter) (?:the|a)? ?([\s\S]*) to ([\s\S]*)/i;
const debug = logger( 'isle-editor:speech-interface' );


// FUNCTIONS //

/**
* Checks whether text contains a command keyword.
*
* @returns {boolean} returns true if text matches a command, false otherwise
*/
function checkCommands( text, comp ) {
	for ( let n = 0; n < comp.commands.length; n++ ) {
		const command = comp.commands[ n ];
		const trigger = command.trigger;
		if ( isArray( trigger ) === true ) {
			for ( let x = 0; x < trigger.length; x++ ) {
				if ( text.search( trigger[x] ) !== -1 ) {
					return execute( comp.reference, command, text );
				}
			}
		} else if ( text.search( trigger) !== -1 ) {
			return execute( comp.reference, command, text );
		}
	}
	return false;
}

/**
* Executes a detected voice command if found.
*
* @param {Node} ref - component reference
* @param {Object} command - command options
* @param {string} text - parsed voice command
* @returns {boolean} returns true if text matches a command, false otherwise
*/
function execute( ref, command, text ) {
	debug( `Executing ${command.command} command with input: `+text );
	if ( command.regexp ) {
		if ( isArray( command.regexp ) ) {
			return processMultipleRegExps( ref, command, text );
		}
		return processSingleRegExp( ref, command, text );
	}
	ref[ command.command ]();
	return true;
}

/**
* Finds and executes a detected voice command with multiple regular expressions for extracting parameters.
*
* @param {Node} ref - component reference
* @param {Object} command - command options
* @param {string} text - parsed voice command
* @returns {boolean} returns true if text matches a command, false otherwise
*/
function processMultipleRegExps( ref, command, text ) {
	for ( let i = 0; i < command.regexp.length; i++ ) {
		let regexp = command.regexp[ i ];
		if ( isRegExpString( regexp ) ) {
			regexp = reFromString( regexp );
			command.regexp[ i ] = regexp;
		}
		const match = text.match( regexp );
		if ( match ) {
			const matches = [];
			if ( command.params ) {
				for ( let i = 0; i < command.params.length; i++ ) {
					matches.push( match.groups[ command.params[ i ] ] );
				}
			} else {
				for ( let j = 1; j < match.length; j++ ) {
					matches.push( match[ j ] );
				}
			}
			ref[ command.command ]( ...matches );
			return true;
		}
	}
	return false;
}

/**
* Finds and executes a detected voice command with a single regular expression for extracting parameters.
*
* @param {Node} ref - component reference
* @param {Object} command - command options
* @param {string} text - parsed voice command
* @returns {boolean} returns true if text matches a command, false otherwise
*/
function processSingleRegExp( ref, command, text ) {
	if ( isRegExpString( command.regexp ) ) {
		command.regexp = reFromString( command.regexp );
	}
	const match = text.match( command.regexp );
	if ( match ) {
		const matches = [];
		if ( command.params ) {
			for ( let i = 0; i < command.params.length; i++ ) {
				matches.push( match.groups[ command.params[ i ] ] );
			}
		} else {
			for ( let i = 1; i < match.length; i++ ) {
				matches.push( match[ i ] );
			}
		}
		ref[ command.command ]( ...matches );
		return true;
	}
	return false;
}


// MAIN //

class SpeechInterface {
	constructor() {
		this.components = [];
		this.active = null;
	}

	resetStyle() {
		debug( 'Resetting the styling of the active element: '+JSON.stringify( this.active.originalStyle ) );
		var div = ReactDOM.findDOMNode( this.active.reference );
		if ( div ) {
			for ( let key in this.active.originalStyle ) {
				if ( hasOwnProp( this.active.originalStyle, key ) ) {
					div.style[ key ] = this.active.originalStyle[ key ];
				}
			}
		}
	}

	updateStyle( text ) {
		function rgb( value ) {
			debug( 'Set RGB...' );
			value = value.replace( 'rgba', 'rgba(' );
			value = value.replace( 'RGB', 'rgb(' );
			value += ')';
			return value;
		}

		function shadow( value ) {
			debug( 'Setting shadow...' );
			var number = /number */g;
			value = value.replace( number, '' );
			value = value.split( ' ' );
			var s = '';
			for ( var i = 0; i < value.length; i++ ) {
				var item = value[ i ];
				if ( item === 'four' || item === 'for') item = 4;
				if ( item === 'one' ) item = 1;
				if ( i < 3 ) {
					item += 'px ';
				}
				s += item;
			}
			return s;
		}
		var matches = text.match( RE_STYLE_SETTER );
		if ( matches && matches[ 1 ] && matches[ 2 ]) {
			var property = matches[ 1 ];
			var value = matches[ 2 ];

			if ( property === 'in a text' ) {
				property = 'inner text';
			}
			if ( property === 'inner Html' ) {
				property = 'inner HTML';
			}

			property = camelcase( property );
			if ( property === 'colour' ) {
				property = 'color';
			}

			if ( property === 'color' || property === 'background' ) {
				var dark = /dark /;
				value = value.replace( dark, 'dark' );

				dark = /light /;
				value = value.replace( dark, 'light' );

				if ( value.search( 'RGB' ) !== -1 )	{
					value = rgb( value );
				}
				if ( value.search( 'rgba' ) !== -1 ) {
					value = rgb( value );
				}
			}

			if ( property === 'with' ) {
				property = 'width';
			}

			if ( property === 'textDecoration' ) {
				if ( value === 'line through' ) value = 'line-through';
			}

			if ( property === 'textShadow' || property === 'boxShadow' ) {
				value = shadow( value );
			}

			if ( property === 'textAlign' ) {
				if ( value === 'Centre' ) {
					value = 'center';
				}
			}

			var repix = / pixels*/;
			value = value.replace( repix, 'px' );

			var vw = / viewport*/;
			value = value.replace( vw, 'vw' );

			var div = ReactDOM.findDOMNode( this.active.reference );
			if ( !this.active.originalStyle ) {
				this.active.originalStyle = {};
			}
			if ( div ) {
				debug( 'Setting '+property+' to '+value );
				this.active.originalStyle[ property ] = div.style[ property ];
				div.style[ property ] = value;
			}
			if ( !this.active.originalStyle ) {
				this.active.originalStyle = {};
			}
			if ( value === 'small caps' ) value = 'small-caps';
		}
		else {
			this.sendNotUnderstoodMsg();
		}
	}

	sendNotUnderstoodMsg = () => {
		var resp = 'Sorry, I didn\'t get that.';
		var ssu = new SpeechSynthesisUtterance( resp );
		ssu.lang = 'en-US';
		window.speechSynthesis.speak( ssu );
	}

	setActive = ( name ) => {
		let found = false;
		debug( 'Trying to set component with the following ID as active: '+name );
		if ( name ) {
			for ( let i = 0; i < this.components.length; i++ ) {
				const comp = this.components[ i ];
				debug( 'Current iteration: '+ comp.name );
				comp.control.setInactive();
				if ( comp.name === name ) {
					debug( 'Found match...' );
					found = true;
					this.active = comp;
					comp.control.setActive();
				}
			}
		}
		let resp;
		if ( !found ) {
			resp = 'Sorry, I couldn\'t find a component with the identifier ' + name;
		} else {
			resp = 'Component selected.';
		}
		var ssu = new SpeechSynthesisUtterance( resp );
		ssu.lang = 'en-US';
		window.speechSynthesis.speak( ssu );
	}

	/**
	* Checks whether the text contains a valid name.
	*/
	check( arr ) {
		for ( let i = 0; i < arr.length; i++ ) {
			const text = arr[ i ];
			debug( 'Checking text: `'+ text + '`' );
			if ( this.active ) {
				debug( 'Active component is: '+ this.active.name );
			} else {
				debug( 'No active component...' );
			}
			if ( contains( text, 'select' ) ) {
				debug( 'Received a selection command: '+text );
				const match = text.match( RE_SELECT );
				if ( match ) {
					const name = match[ 1 ];
					return this.setActive( name );
				}
			}
			if ( this.active ) {
				const found = checkCommands( text, this.active );
				if ( found ) {
					return;
				}
				if ( RE_STYLE_SETTER.test( text ) ) {
					debug( 'Found style setting command...' );
					return this.updateStyle( text );
				}
				if ( contains( text, 'reset' ) ) {
					return this.resetStyle();
				}
			}
			for ( let j = 0; j < this.components.length; j++ ) {
				const comp = this.components[ j ];
				const name = comp.name;
				if ( text.search( name ) !== -1 ) {
					debug( 'Checking triggers for '+name+ ' component...' );
					const found = checkCommands( text, comp );
					if ( found ) {
						return;
					}
				}
			}
		}
	}

	register( component ) {
		debug( 'Register component: '+component.name );
		if (
			isObject( component ) &&
			component.name &&
			isObject( component.reference )
		) {
			this.components.push( component );
		}
	}
}


// EXPORTS //

export default SpeechInterface;
