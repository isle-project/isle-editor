// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const SelectQuestion = Loadable( () => import( /* webpackChunkName: "SelectQuestion" */ './main.js' ) );


// EXPORTS //

export default SelectQuestion;
