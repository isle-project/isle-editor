// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'StatisticalModels' );


// MAIN //

const LogisticRegression = Loadable( () => import( /* webpackChunkName: "LogisticRegression" */ './main.js' ) );


// EXPORTS //

export default LogisticRegression;
