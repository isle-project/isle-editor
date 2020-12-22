// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Survey' );


// MAIN //

const FreeTextSurvey = Loadable( () => import( /* webpackChunkName: "FreeTextSurvey" */ './main.js' ) );


// EXPORTS //

export default FreeTextSurvey;
