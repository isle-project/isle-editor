// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Queue' );


// MAIN //

const Queue = Loadable( () => import( /* webpackChunkName: "Queue" */ './main.js' ) );


// EXPORTS //

export default Queue;
