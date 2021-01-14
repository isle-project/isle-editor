// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const InterfaceTour = Loadable( () => import( /* webpackChunkName: "InterfaceTour" */ './main.js' ) );


// EXPORTS //

export default InterfaceTour;
