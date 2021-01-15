// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const RangeQuestion = Loadable( () => import( /* webpackChunkName: "RangeQuestion" */ './main.js' ) );


// EXPORTS //

export default RangeQuestion;
