// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Bibliography' );


// MAIN //

const Bibliography = Loadable( () => import( /* webpackChunkName: "Bibliography" */ './main.js' ) );


// EXPORTS //

export default Bibliography;
