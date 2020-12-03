// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const MatchListQuestion = Loadable( () => import( /* webpackChunkName: "MatchListQuestion" */ './main.js' ) );


// EXPORTS //

export default MatchListQuestion;
