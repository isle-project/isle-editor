// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Plotly = Loadable( () => import( /* webpackChunkName: "Plotly" */ './main.js' ) );


// EXPORTS //

export default Plotly;
