// MODULES //

import { addResources } from '@isle-project/locales';
import Loadable from '@isle-project/components/internal/loadable';


// VARIABLES //

addResources( 'Input' );


// MAIN //

const SliderInput = Loadable( () => import( /* webpackChunkName: "SliderInput" */ './main.js' ) );


// EXPORTS //

export default SliderInput;
