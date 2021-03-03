// MODULES //

import CreateTooltip from './create_tooltip.js';
import { addResources } from '@isle-project/locales';
import Loadable from '@isle-project/components/internal/loadable';


// VARIABLES //

addResources( 'Input' );


// MAIN //

const NumberInput = Loadable( () => import( /* webpackChunkName: "NumberInput" */ './main.js' ) );


// EXPORTS //

export const createTooltip = CreateTooltip;
export default NumberInput;
