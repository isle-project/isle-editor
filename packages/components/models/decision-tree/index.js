// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const DecisionTree = Loadable( () => import( /* webpackChunkName: "DecisionTree" */ './main.js' ) );


// EXPORTS //

export default DecisionTree;
