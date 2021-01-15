// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Calculator = Loadable( () => import( /* webpackChunkName: "Calculator" */ './main.js' ) );


// EXPORTS //

export default Calculator;
