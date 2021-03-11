// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Plotly' );


// MAIN //

const NetworkPlot = Loadable( () => import( /* webpackChunkName: "NetworkPlot" */ './main.js' ) );


// EXPORTS //

export default NetworkPlot;
