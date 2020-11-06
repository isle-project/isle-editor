// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const MatchListQuestion = Loadable( () => import( /* webpackChunkName: "MatchListQuestion" */ './main.js' ) );


// EXPORTS //

export default MatchListQuestion;
