// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const News = Loadable( () => import( /* webpackChunkName: "News" */ './main.js' ) );


// EXPORTS //

export default News;
