// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VoiceControl = Loadable( () => import( /* webpackChunkName: "VoiceControl" */ './main.js' ) );


// EXPORTS //

export default VoiceControl;
