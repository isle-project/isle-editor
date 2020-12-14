// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Plotly' );


// MAIN //

const Plotly = Loadable( () => import( /* webpackChunkName: "Plotly" */ './main.js' ) );


// EXPORTS //

export default Plotly;
