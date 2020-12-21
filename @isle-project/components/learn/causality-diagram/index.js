// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnCausalityDiagram' );


// MAIN //

const LearnCausalityDiagram = Loadable( () => import( /* webpackChunkName: "LearnCausalityDiagram" */ './main.js' ) );


// EXPORTS //

export default LearnCausalityDiagram;
