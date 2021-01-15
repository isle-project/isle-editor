// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Link = Loadable( () => import( /* webpackChunkName: "Link" */ './main.js' ) );


// EXPORTS //

export default Link;
