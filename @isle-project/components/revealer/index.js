// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Revealer' );


// MAIN //

const Revealer = Loadable( () => import( /* webpackChunkName: "Revealer" */ './main.js' ) );


// EXPORTS //

export default Revealer;
