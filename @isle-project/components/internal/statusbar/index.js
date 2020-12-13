// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'StatusBar' );


// MAIN //

const StatusBar = Loadable( () => import( /* webpackChunkName: "StatusBar" */ './main.js' ) );


// EXPORTS //

export default StatusBar;
