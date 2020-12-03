// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VoiceControl = Loadable( () => import( './main.js' ) );


// EXPORTS //

export default VoiceControl;
