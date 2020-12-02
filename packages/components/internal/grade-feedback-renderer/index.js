// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const GradeFeedbackRenderer = Loadable( () => import( /* webpackChunkName: "GradeFeedbackRenderer" */ './main.js' ) );


// EXPORTS //

export default GradeFeedbackRenderer;
