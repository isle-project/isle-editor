// MODULES //

import isObject from '@stdlib/assert/is-object';
import { i18n } from '@isle-project/locales/editor';


// FUNCTION //

export class PreambleError extends Error {
	constructor( message ) {
		super( message );
		this.name = 'PreambleError';
	}
}


// MAIN //

function validatePreamble( preamble ) {
	if ( !isObject( preamble ) ) {
		return new PreambleError( i18n.t('valid-and-nonempty-preamble') );
	}
	if ( preamble.require && !isObject( preamble.require ) ) {
		return new PreambleError( i18n.t('preamble-object-field', { key: 'require' }) );
	}
	if ( preamble.state && !isObject( preamble.state ) ) {
		return new PreambleError( i18n.t('preamble-object-field', { key: 'state' }) );
	}
	if ( preamble.references && !isObject( preamble.references ) ) {
		return new PreambleError( i18n.t('preamble-object-field', { key: 'references' }) );
	}
	return null;
}


// EXPORTS //

export default validatePreamble;
