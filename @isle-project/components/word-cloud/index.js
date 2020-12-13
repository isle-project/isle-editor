// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'WordCloud' );


// MAIN //

const WordCloud = Loadable( () => import( /* webpackChunkName: "WordCloud" */ './main.js' ) );


// EXPORTS //

export default WordCloud;
