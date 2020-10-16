// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const RandomForest = Loadable( () => import( /* webpackChunkName: "RandomForest" */ './main.js' ) );


// EXPORTS //

export default RandomForest;
