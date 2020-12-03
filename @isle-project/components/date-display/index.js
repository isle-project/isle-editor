// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const DateDisplay = Loadable( () => import( /* webpackChunkName: "DateDisplay" */ './main.js' ) );


// EXPORTS //

export default DateDisplay;
