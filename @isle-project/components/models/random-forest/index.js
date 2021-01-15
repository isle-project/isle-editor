// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const RandomForest = Loadable( () => import( /* webpackChunkName: "RandomForest" */ './main.js' ) );


// EXPORTS //

export default RandomForest;
