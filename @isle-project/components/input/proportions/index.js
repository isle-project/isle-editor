// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Input' );


// MAIN //

const ProportionsInput = Loadable( () => import( /* webpackChunkName: "ProportionsInput" */ './main.js' ) );


// EXPORTS //

export default ProportionsInput;
