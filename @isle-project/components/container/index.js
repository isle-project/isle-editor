// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Container = Loadable( () => import( /* webpackChunkName: "Container" */ './main.js' ) );


// EXPORTS //

export default Container;
