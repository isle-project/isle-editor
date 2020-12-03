// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const NumberSurvey = Loadable( () => import( /* webpackChunkName: "NumberSurvey" */ './main.js' ) );


// EXPORTS //

export default NumberSurvey;
