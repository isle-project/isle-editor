// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const MultipleChoiceSurvey = Loadable( () => import( /* webpackChunkName: "MultipleChoiceSurvey" */ './main.js' ) );


// EXPORTS //

export default MultipleChoiceSurvey;
