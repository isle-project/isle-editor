// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Bibliography = Loadable( () => import( /* webpackChunkName: "Bibliography" */ './main.js' ) );


// EXPORTS //

export default Bibliography;
