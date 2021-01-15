// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Quiz = Loadable( () => import( /* webpackChunkName: "Quiz" */ './main.js' ) );


// EXPORTS //

export default Quiz;
