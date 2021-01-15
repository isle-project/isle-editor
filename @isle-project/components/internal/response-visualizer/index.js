// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const ResponseVisualizer = Loadable( () => import( /* webpackChunkName: "ResponseVisualizer" */ './main.js' ) );


// EXPORTS //

export default ResponseVisualizer;
