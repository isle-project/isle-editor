// MODULES //

import React from 'react';
import TeX from 'components/tex';
import ztest from '@stdlib/stats/ztest';
import sqrt from '@stdlib/math/base/special/sqrt';
import roundn from '@stdlib/math/base/special/roundn';
import replace from '@stdlib/string/replace';
import mean from 'utils/statistic/mean';


// VARIABLES //

const RE_ONESIDED_SMALLER = /\d{2}% confidence interval: \[-Infinity,-?[\d.]+\]/;
const RE_ONESIDED_GREATER = /\d{2}% confidence interval: \[-?[\d.]+,Infinity\]/;


// MAIN //

function PropTest({ data, variable, alpha, direction, success, p0, showDecision }) {
	const x = data[ variable ];
	const binary = x.map( x => x === success ? 1 : 0 );
	const result = ztest( binary, sqrt( p0 * ( 1.0 - p0 ) ), {
		'alpha': alpha,
		'alternative': direction,
		'mu': p0
	});
	let arrow = '\\ne';
	if ( direction === 'less' ) {
		arrow = '<';
	} else if ( direction === 'greater' ){
		arrow = '>';
	}
	let printout = result.print({
		decision: showDecision
	});
	printout = replace( printout, RE_ONESIDED_SMALLER, '' );
	printout = replace( printout, RE_ONESIDED_GREATER, '' );
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>Hypothesis test for {variable}:</label>
			<p>
				Let p be the population probability of <code>{variable}</code> being <code>{success}</code>.
			</p>
			<span>
				We test
			</span>
			<TeX displayMode raw={`H_0: p = ${p0} \\; vs. \\; H_1: p ${arrow} ${p0}`} tag="" />
			<label>Sample proportion: {roundn( mean( binary ), -3 )}</label>
			<pre>
				{printout}
			</pre>
		</div>
	);
}


// EXPORTS //

export default PropTest;
