// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const ProportionsSurvey = Loadable( () => import( /* webpackChunkName: "ProportionsSurvey" */ './main.js' ) );


// EXPORTS //

export default ProportionsSurvey;
