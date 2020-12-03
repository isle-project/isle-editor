// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Playground = Loadable( () => import( /* webpackChunkName: "Playground" */ './main.js' ) );


// EXPORTS //

export default Playground;
