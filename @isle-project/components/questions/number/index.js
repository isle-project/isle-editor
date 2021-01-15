// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const NumberQuestion = Loadable( () => import( /* webpackChunkName: "NumberQuestion" */ './main.js' ) );


// EXPORTS //

export default NumberQuestion;
