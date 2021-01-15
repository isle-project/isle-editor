// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const DecisionTree = Loadable( () => import( /* webpackChunkName: "DecisionTree" */ './main.js' ) );


// EXPORTS //

export default DecisionTree;
