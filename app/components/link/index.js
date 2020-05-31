// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Link = Loadable( () => import( /* webpackChunkName: "Link" */ './main.js' ) );


// EXPORTS //

export default Link;
