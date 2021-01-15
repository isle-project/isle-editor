// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Citation = Loadable( () => import( /* webpackChunkName: "Citation" */ './main.js' ) );


// EXPORTS //

export default Citation;
