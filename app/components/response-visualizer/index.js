// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const ResponseVisualizer = Loadable( () => import( /* webpackChunkName: "ResponseVisualizer" */ './main.js' ) );


// EXPORTS //

export default ResponseVisualizer;
