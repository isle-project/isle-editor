// MODULES //

import isObject from '@stdlib/assert/is-object';
import isArray from '@stdlib/assert/is-array';


// MAIN //

class SpeechInterface {
	constructor() {
		this.components = [];
	}

	/**
	* Checks whether the text contains a valid name.
	*/
	check( text ) {
		for ( let i = 0; i < this.components.length; i++ ) {
			const comp = this.components[i];
			const name = comp.name;
			if ( isArray( name ) ){
				for ( let j = 0; j < name.length; j++ ) {
					if ( text.search( name[j] ) !== -1 ) {
						this.checkCommands( text, comp );
						break;
					}
				}
			}
			else if ( text.search( name ) !== -1 ) {
				this.checkCommands( text, comp );
			}
		}
	}

	/**
	* Checks whether text contains a command keyword.
	*/
	checkCommands( text, comp ) {
		for ( let n = 0; n < comp.commands.length; n++ ) {
			const command = comp.commands[ n ];
			const trigger = command.trigger;
			if ( isArray( trigger) === true ){
				for ( let x = 0; x < trigger.length; x++ ) {
					if ( text.search( trigger[x] ) !== -1 ) {
						this.execute( comp.ref, command, text );
						break;
					}
				}
			} else if ( text.search( trigger) !== -1 ) {
				this.execute( comp.ref, command, text );
			}
		}
	}

	execute( ref, command, text ) {
		if ( command.text ) {
			command.text = text;
		}
		ref[ command.command ]( command.text );
	}

	register( component ) {
		if (
			isObject( component ) &&
			component.name &&
			isObject( component.ref )
		) {
			this.components.push( component );
		}
	}
}


// EXPORTS //

export default SpeechInterface;
