// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const LearnVennDiagramBuilder = Loadable( () => import( /* webpackChunkName: "LearnVennDiagramBuilder" */ './main.js' ) );


// EXPORTS //

export default LearnVennDiagramBuilder;
