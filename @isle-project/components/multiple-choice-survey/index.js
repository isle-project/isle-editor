// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Survey' );


// MAIN //

const MultipleChoiceSurvey = Loadable( () => import( /* webpackChunkName: "MultipleChoiceSurvey" */ './main.js' ) );


// EXPORTS //

export default MultipleChoiceSurvey;
