// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const ShapedForm = Loadable( () => import( /* webpackChunkName: "ShapedForm" */ './main.js' ) );


// EXPORTS //

export default ShapedForm;
