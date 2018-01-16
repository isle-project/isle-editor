import isObject from '@stdlib/assert/is-object';
import isArray from '@stdlib/assert/is-array';

class SpeechInterface {
    constructor( session ) {
        this.components = [];
    }

// checks whether the text contains a valid name
check( text ) {
    for (var i = 0; i < this.components.length; i++) {
        let name = this.components[i].name;
        if (isArray( name) === true){
            var found = false;
            for (var j = 0; j < name.length; j++) {
                if (!found && text.search( name[j]) !== -1) {
                    let comp = this.components[i];
                    this.checkCommands( text, comp);
                    found = true;
                }
            }
        }
        else if (text.search( name) !== -1) {
            let comp = this.components[i];
            this.checkCommands( text, comp);
        }
    }
}
// checks whether the texts contains a command keyword
checkCommands(text, comp) {
    for ( var n = 0; n < comp.commands.length; n++) {
        let trigger = comp.commands[n].trigger;

        if (isArray( trigger) === true){
            let found = false;

            for (let x = 0; x < trigger.length; x++) {
                if (text.search( trigger[x]) !== -1 ) {
                    if ( !found) {
                        let command = comp.commands[n];
                        this.execute( comp.ref, command, text);
                        found = true;
                    }
               }
           }
        } else if (text.search( trigger) !== -1 ) {
                let command = comp.commands[n];
                this.execute( comp.ref, command, text);
        }
    }
}

execute( ref, command, text) {
    let com = command.command;
    if (command.text) {
        command.text = text;
    }
    ref[com](command.text);
}

register( component){
    if ( isObject(component) && component.name && isObject( component.ref)) {
        this.components.push( component );
        }
    }
}

// EXPORTS //

export default SpeechInterface;
