// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Panel = Loadable( () => import( /* webpackChunkName: "Panel" */ './main.js' ) );


// EXPORTS //

export default Panel;
