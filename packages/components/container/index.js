// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Container = Loadable( () => import( /* webpackChunkName: "Container" */ './main.js' ) );


// EXPORTS //

export default Container;
