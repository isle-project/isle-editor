// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const RangeQuestion = Loadable( () => import( /* webpackChunkName: "RangeQuestion" */ './main.js' ) );


// EXPORTS //

export default RangeQuestion;
