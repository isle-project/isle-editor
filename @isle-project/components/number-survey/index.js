// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const NumberSurvey = Loadable( () => import( /* webpackChunkName: "NumberSurvey" */ './main.js' ) );


// EXPORTS //

export default NumberSurvey;
