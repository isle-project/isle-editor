// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const FreeTextSurvey = Loadable( () => import( /* webpackChunkName: "FreeTextSurvey" */ './main.js' ) );


// EXPORTS //

export default FreeTextSurvey;
