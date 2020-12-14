// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Link' );


// MAIN //

const Link = Loadable( () => import( /* webpackChunkName: "Link" */ './main.js' ) );


// EXPORTS //

export default Link;
