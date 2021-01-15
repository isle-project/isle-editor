// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Accordion = Loadable( () => import( /* webpackChunkName: "Accordion" */ './main.js' ) );


// EXPORTS //

export default Accordion;
