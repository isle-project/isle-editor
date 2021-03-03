// MODULES //

import { addResources } from '@isle-project/locales';
import Loadable from '@isle-project/components/internal/loadable';


// VARIABLES //

addResources( 'Input' );


// MAIN //

const VoiceInput = Loadable( () => import( /* webpackChunkName: "VoiceInput" */ './main.js' ) );


// EXPORTS //

export default VoiceInput;
