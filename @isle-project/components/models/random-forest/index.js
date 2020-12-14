// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'StatisticalModels' );


// MAIN //

const RandomForest = Loadable( () => import( /* webpackChunkName: "RandomForest" */ './main.js' ) );


// EXPORTS //

export default RandomForest;
