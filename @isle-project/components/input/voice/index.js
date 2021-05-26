// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VoiceInput = Loadable( () => import( /* webpackChunkName: "VoiceInput" */ './main.js' ) );


// EXPORTS //

export default VoiceInput;
