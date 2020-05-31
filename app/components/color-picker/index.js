// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const ColorPicker = Loadable( () => import( /* webpackChunkName: "ColorPicker" */ './main.js' ) );


// EXPORTS //

export default ColorPicker;
