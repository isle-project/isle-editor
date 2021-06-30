// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const RandomTransformer = Loadable( () => import( /* webpackChunkName: "RandomTransformer" */ './main.js' ) );


// EXPORTS //

export default RandomTransformer;
