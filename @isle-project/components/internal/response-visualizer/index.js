// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'ResponseVisualizer' );


// MAIN //

const ResponseVisualizer = Loadable( () => import( /* webpackChunkName: "ResponseVisualizer" */ './main.js' ) );


// EXPORTS //

export default ResponseVisualizer;
