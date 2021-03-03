// MODULES //

import { addResources } from '@isle-project/locales';
import Loadable from '@isle-project/components/internal/loadable';


// VARIABLES //

addResources( 'Input' );


// MAIN //

const CheckboxInput = Loadable( () => import( /* webpackChunkName: "CheckboxInput" */ './main.js' ) );


// EXPORTS //

export default CheckboxInput;
