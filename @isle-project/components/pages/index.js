// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Pages = Loadable( () => import( /* webpackChunkName: "Pages" */ './main.js' ) );


// EXPORTS //

export default Pages;
