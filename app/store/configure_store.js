// MODULES //

import ENV from '@stdlib/process/env';
import production from './configure_store.production.js';
import development from './configure_store.development.js';


// MAIN //

const store = ENV.NODE_ENV === 'production' ? production : development;


// EXPORTS //

export default store;
