// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const FlippableCard = Loadable( () => import( /* webpackChunkName: "FlippableCard" */ './main.js' ) );


// EXPORTS //

export default FlippableCard;
