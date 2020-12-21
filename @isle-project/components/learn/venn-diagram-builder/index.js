// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnVennDiagram' );


// MAIN //

const LearnVennDiagramBuilder = Loadable( () => import( /* webpackChunkName: "LearnVennDiagramBuilder" */ './main.js' ) );


// EXPORTS //

export default LearnVennDiagramBuilder;
