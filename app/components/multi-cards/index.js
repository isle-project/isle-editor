// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const MultiCards = Loadable( () => import( /* webpackChunkName: "MultiCards" */ './main.js' ) );


// EXPORTS //

export default MultiCards;
