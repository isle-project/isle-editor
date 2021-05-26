// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const FlippableCard = Loadable( () => import( /* webpackChunkName: "FlippableCard" */ './main.js' ) );


// EXPORTS //

export default FlippableCard;
