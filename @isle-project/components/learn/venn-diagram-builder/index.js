// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const LearnVennDiagramBuilder = Loadable( () => import( /* webpackChunkName: "LearnVennDiagramBuilder" */ './main.js' ) );


// EXPORTS //

export default LearnVennDiagramBuilder;
