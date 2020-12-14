// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'GradeFeedbackRenderer' );


// MAIN //

const GradeFeedbackRenderer = Loadable( () => import( /* webpackChunkName: "GradeFeedbackRenderer" */ './main.js' ) );


// EXPORTS //

export default GradeFeedbackRenderer;
