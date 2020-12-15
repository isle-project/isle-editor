// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'R' );


// MAIN //

const ROutput = Loadable( () => import( /* webpackChunkName: "ROutput" */ './main.js' ) );


// EXPORTS //

export default ROutput;
