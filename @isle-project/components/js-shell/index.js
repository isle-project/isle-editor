// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'R' );
addResources( 'SolutionButton' );


// MAIN //

const JSShell = Loadable( () => import( /* webpackChunkName: "JSShell" */ './main.js' ) );


// EXPORTS //

export default JSShell;
