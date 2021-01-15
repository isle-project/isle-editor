// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const GradeFeedbackRenderer = Loadable( () => import( /* webpackChunkName: "GradeFeedbackRenderer" */ './main.js' ) );


// EXPORTS //

export default GradeFeedbackRenderer;
