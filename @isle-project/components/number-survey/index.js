// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Survey' );


// MAIN //

const NumberSurvey = Loadable( () => import( /* webpackChunkName: "NumberSurvey" */ './main.js' ) );


// EXPORTS //

export default NumberSurvey;
