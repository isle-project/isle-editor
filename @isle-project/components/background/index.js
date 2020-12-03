// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Background = Loadable( () => import( /* webpackChunkName: "Background" */ './main.js' ) );


// EXPORTS //

export default Background;
