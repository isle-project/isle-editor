// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Reaction = Loadable( () => import( /* webpackChunkName: "Reaction" */ './main.js' ) );


// EXPORTS //

export default Reaction;
