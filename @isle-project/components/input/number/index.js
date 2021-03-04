// MODULES //

import NumberInput from './main';
import CreateTooltip from './create_tooltip.js';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Input' );


// EXPORTS //

export const createTooltip = CreateTooltip;
export default NumberInput;
