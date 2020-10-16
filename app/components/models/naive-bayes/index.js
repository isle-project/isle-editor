// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const NaiveBayes = Loadable( () => import( /* webpackChunkName: "NaiveBayes" */ './main.js' ) );


// EXPORTS //

export default NaiveBayes;
