// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const MultiCards = Loadable( () => import( /* webpackChunkName: "MultiCards" */ './main.js' ) );


// EXPORTS //

export default MultiCards;
