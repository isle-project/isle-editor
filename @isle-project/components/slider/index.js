// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Slider' );


// MAIN //

const Slider = Loadable( () => import( /* webpackChunkName: "Slider" */ './main.js' ) );


// EXPORTS //

export default Slider;
