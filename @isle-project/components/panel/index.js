// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Panel = Loadable( () => import( /* webpackChunkName: "Panel" */ './main.js' ) );


// EXPORTS //

export default Panel;
