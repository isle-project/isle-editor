// MODULES //

import React from 'react';
import TeX from 'components/tex';
import pcorrtest from '@stdlib/stats/pcorrtest';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';


// MAIN //

function CorrTest({ data, var1, var2, direction, alpha, rho0, showDecision }) {
	const x = data[ var1 ];
	const y = data[ var2 ];
	const xFiltered = [];
	const yFiltered = [];
	for ( let i = 0; i < x.length; i++ ) {
		if (
			( isNumber( x[i] ) && !isnan( x[i] ) ) &&
			( isNumber( y[i] ) && !isnan( y[i] ) )
		) {
			xFiltered.push( x[i] );
			yFiltered.push( y[i] );
		}
	}
	const result = pcorrtest( xFiltered, yFiltered, {
		'alpha': alpha,
		'alternative': direction,
		'rho': rho0
	});
	let arrow = '\\ne';
	if ( direction === 'less' ) {
		arrow = '<';
	} else if ( direction === 'greater' ){
		arrow = '>';
	}
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>Correlation test between {var1} and {var2}:</label>
			<TeX displayMode raw={`H_0: \\rho = ${rho0} \\; vs. \\; H_1: \\rho ${arrow} ${rho0}`} tag="" />
			<pre>
				{result.print({
					decision: showDecision
				})}
			</pre>
		</div>
	);
}


// EXPORTS //

export default CorrTest;
