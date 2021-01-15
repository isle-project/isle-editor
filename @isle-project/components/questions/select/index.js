// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const SelectQuestion = Loadable( () => import( /* webpackChunkName: "SelectQuestion" */ './main.js' ) );


// EXPORTS //

export default SelectQuestion;
