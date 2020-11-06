// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Quiz = Loadable( () => import( /* webpackChunkName: "Quiz" */ './main.js' ) );


// EXPORTS //

export default Quiz;
