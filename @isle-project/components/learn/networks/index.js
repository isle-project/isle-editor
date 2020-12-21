// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnNetworks' );


// MAIN //

const LearnNetworks = Loadable( () => import( /* webpackChunkName: "LearnNetworks" */ './main.js' ) );


// EXPORTS //

export default LearnNetworks;
