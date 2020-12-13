// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'DataSampler' );


// MAIN //

const DataSampler = Loadable( () => import( /* webpackChunkName: "DataSampler" */ './main.js' ) );


// EXPORTS //

export default DataSampler;
