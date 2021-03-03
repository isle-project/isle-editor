// MODULES //

import { addResources } from '@isle-project/locales';
import Loadable from '@isle-project/components/internal/loadable';


// VARIABLES //

addResources( 'Input' );


// MAIN //

const SelectInput = Loadable( () => import( /* webpackChunkName: "SelectInput" */ './main.js' ) );


// EXPORTS //

export default SelectInput;
