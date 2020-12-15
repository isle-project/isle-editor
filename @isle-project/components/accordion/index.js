// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Accordion' );


// MAIN //

const Accordion = Loadable( () => import( /* webpackChunkName: "Accordion" */ './main.js' ) );


// EXPORTS //

export default Accordion;
