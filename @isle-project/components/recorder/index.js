// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Recorder = Loadable( () => import( /* webpackChunkName: "Recorder" */ './main.js' ) );


// EXPORTS //

export default Recorder;
