// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'General' );


// MAIN //

const Reaction = Loadable( () => import( /* webpackChunkName: "Reaction" */ './main.js' ) );


// EXPORTS //

export default Reaction;
