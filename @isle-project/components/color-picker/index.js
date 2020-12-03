// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const ColorPicker = Loadable( () => import( /* webpackChunkName: "ColorPicker" */ './main.js' ) );


// EXPORTS //

export default ColorPicker;
