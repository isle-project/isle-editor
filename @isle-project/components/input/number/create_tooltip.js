// MODULES //

import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';


// MAIN //

function createTooltip({ min, max, step, t }) {
	let tooltip = `${t('enter')} ${ step === 1 ? t('integer') : t('number')} `;
	if ( max !== PINF && min !== NINF ) {
		tooltip += `${t('between')} ${min} ${t('and')} ${max}`;
	} else if ( min !== NINF ) {
		tooltip += `${t('larger-or-equal-to')} ${min}`;
	} else if ( max !== PINF ) {
		tooltip += `${t('smaller-or-equal-to')} ${max}`;
	}
	return tooltip;
}


// EXPORTS //

export default createTooltip;
