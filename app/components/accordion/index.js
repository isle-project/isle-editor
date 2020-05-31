// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Accordion = Loadable( () => import( /* webpackChunkName: "Accordion" */ './main.js' ) );


// EXPORTS //

export default Accordion;
