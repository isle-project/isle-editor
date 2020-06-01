// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Feedback = Loadable( () => import( /* webpackChunkName: "Feedback" */ './main.js' ) );


// EXPORTS //

export default Feedback;
