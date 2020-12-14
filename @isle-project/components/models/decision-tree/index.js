// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'DecisionTree' );


// MAIN //

const DecisionTree = Loadable( () => import( /* webpackChunkName: "DecisionTree" */ './main.js' ) );


// EXPORTS //

export default DecisionTree;
