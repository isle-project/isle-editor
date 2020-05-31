// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Cover = Loadable( () => import( /* webpackChunkName: "Cover" */ './main.js' ) );


// EXPORTS //

export default Cover;
