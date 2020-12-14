// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'VoiceControl' );


// MAIN //

const VoiceControl = Loadable( () => import( /* webpackChunkName: "VoiceControl" */ './main.js' ) );


// EXPORTS //

export default VoiceControl;
