// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const NumberQuestion = Loadable( () => import( /* webpackChunkName: "NumberQuestion" */ './main.js' ) );


// EXPORTS //

export default NumberQuestion;
