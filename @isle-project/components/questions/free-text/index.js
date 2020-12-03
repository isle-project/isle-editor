// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const FreeTextQuestion = Loadable( () => import( /* webpackChunkName: "FreeTextQuestion" */ './main.js' ) );


// EXPORTS //

export default FreeTextQuestion;
