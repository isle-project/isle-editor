// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Playground = Loadable( () => import( /* webpackChunkName: "Playground" */ './main.js' ) );


// EXPORTS //

export default Playground;
