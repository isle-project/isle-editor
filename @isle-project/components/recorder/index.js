// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Recorder' );


// MAIN //

const Recorder = Loadable( () => import( /* webpackChunkName: "Recorder" */ './main.js' ) );


// EXPORTS //

export default Recorder;
