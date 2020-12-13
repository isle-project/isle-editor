// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
console.log( 'HAS TYPEWRITER' );

// MAIN //

const Typewriter = Loadable( () => import( /* webpackChunkName: "Typewriter" */ './main.js' ) );


// EXPORTS //

export default Typewriter;
