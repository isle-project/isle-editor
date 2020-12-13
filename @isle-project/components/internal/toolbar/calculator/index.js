// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Calculator' );


// MAIN //

const Calculator = Loadable( () => import( /* webpackChunkName: "Calculator" */ './main.js' ) );


// EXPORTS //

export default Calculator;
