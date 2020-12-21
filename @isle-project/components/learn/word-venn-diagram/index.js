// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnVennDiagram' );


// MAIN //

const LearnWordVennDiagram = Loadable( () => import( /* webpackChunkName: "LearnWordVennDiagram" */ './main.js' ) );


// EXPORTS //

export default LearnWordVennDiagram;
