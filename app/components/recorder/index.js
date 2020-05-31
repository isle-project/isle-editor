// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Recorder = Loadable( () => import( /* webpackChunkName: "Recorder" */ './main.js' ) );


// EXPORTS //

export default Recorder;
