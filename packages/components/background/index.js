// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Background = Loadable( () => import( /* webpackChunkName: "Background" */ './main.js' ) );


// EXPORTS //

export default Background;
