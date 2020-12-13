// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Sketchpad' );


// MAIN //

const Sketchpad = Loadable( () => import( /* webpackChunkName: "Sketchpad" */ './main.js' ) );


// EXPORTS //

export default Sketchpad;
