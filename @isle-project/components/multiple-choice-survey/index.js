// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const MultipleChoiceSurvey = Loadable( () => import( /* webpackChunkName: "MultipleChoiceSurvey" */ './main.js' ) );


// EXPORTS //

export default MultipleChoiceSurvey;
