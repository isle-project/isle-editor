// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'News' );


// MAIN //

const News = Loadable( () => import( /* webpackChunkName: "News" */ './main.js' ) );


// EXPORTS //

export default News;
