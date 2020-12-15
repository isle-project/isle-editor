// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'R' );


// MAIN //

const RShell = Loadable( () => import( /* webpackChunkName: "RShell" */ './main.js' ) );


// EXPORTS //

export default RShell;
