// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Pages = Loadable( () => import( /* webpackChunkName: "Pages" */ './main.js' ) );


// EXPORTS //

export default Pages;
