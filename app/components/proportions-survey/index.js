// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const ProportionsSurvey = Loadable( () => import( /* webpackChunkName: "ProportionsSurvey" */ './main.js' ) );


// EXPORTS //

export default ProportionsSurvey;
