// MODULES //

import React from 'react';
import logger from 'debug';
import ttest2 from '@stdlib/stats/ttest2';
import ztest2 from '@stdlib/stats/ztest2';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import replace from '@stdlib/string/replace';
import roundn from '@stdlib/math/base/special/roundn';
import bifurcateBy from '@stdlib/utils/bifurcate-by';
import stdev from 'utils/statistic/stdev';
import TeX from 'components/tex';
import escapeLatex from 'utils/escape-latex';


// VARIABLES //

const debug = logger( 'isle:tests:meantest2' );
const RE_ONESIDED_SMALLER = /\d{2}% confidence interval: \[-Infinity,-?[\d.]+\]/;
const RE_ONESIDED_GREATER = /\d{2}% confidence interval: \[-?[\d.]+,Infinity\]/;


// FUNCTIONS //

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}

function retrieveGroupedValues( data, xvar, grouping ) {
	debug( 'Updating the variable when supplying groups...' );
	const categories = data[ grouping ];
	let firstCategory = categories[ 0 ];
	let secondCategory;
	for ( let i = 1; i < categories.length; i++ ) {
		if ( categories[ i ] !== firstCategory ) {
			secondCategory = categories[ i ];
			break;
		}
	}
	const splitted = bifurcateBy( data[ xvar ], function splitter( x, idx ) {
		return categories[ idx ] === firstCategory;
	});
	const xvalues = splitted[ 0 ];
	const yvalues = splitted[ 1 ];
	return {
		xvalues,
		yvalues,
		firstCategory,
		secondCategory
	};
}


// MAIN //

function MeanTest2({ data, xvar, yvar, grouping, xstdev, ystdev, type, diff, direction, alpha, showDecision }) {
	let out;
	if ( grouping ) {
		out = retrieveGroupedValues( data, xvar, grouping );
	} else {
		out = {
			xvalues: data[ xvar ],
			yvalues: data[ yvar ]
		};
	}
	const x = out.xvalues;
	const y = out.yvalues;
	const xvals = [];
	const yvals = [];
	for ( let i = 0; i < x.length; i++ ) {
		if ( isNonMissingNumber( x[ i ] ) ) {
			xvals.push( x[ i ] );
		}
	}
	for ( let i = 0; i < y.length; i++ ) {
		if ( isNonMissingNumber( y[ i ] ) ) {
			yvals.push( y[ i ] );
		}
	}
	let value;
	if ( grouping ) {
		let result;
		if ( type === 'Z Test' ) {
			xstdev = xstdev ? xstdev : stdev( xvals );
			ystdev = ystdev ? ystdev : stdev( yvals );
			result = ztest2( xvals, yvals, xstdev, ystdev, {
				'alpha': alpha,
				'alternative': direction,
				'difference': diff
			});
		} else {
			result = ttest2( xvals, yvals, {
				'alpha': alpha,
				'alternative': direction,
				'difference': diff
			});
		}
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
		const egrouping = escapeLatex( grouping );
		const ecat1 = escapeLatex( out.firstCategory );
		const ecat2 = escapeLatex( out.secondCategory );
		value = <div style={{ overflowX: 'auto', width: '100%' }}>
			<span className="title" >Hypothesis test for {xvar} between {grouping}:</span>
			<TeX
				displayMode
				raw={`H_0: \\mu_{\\text{${egrouping}:${ecat1}}} - \\mu_{\\text{${egrouping}:${ecat2}}} = ${diff}`}
				tag=""
			/>
			<span> vs. </span>
			<TeX
				displayMode
				raw={`H_1: \\mu_{\\text{${egrouping}:${ecat1}}} - \\mu_{\\text{${egrouping}:${ecat2}}} ${arrow} ${diff}`}
				tag=""
			/>
			<pre>
				{printout}
				<br />
				Sample mean in group &quot;{out.firstCategory}&quot;: {roundn( result.xmean, -3 )}
				<br />
				Sample mean in group &quot;{out.secondCategory}&quot;: {roundn( result.ymean, -3 )}
			</pre>
		</div>;
	} else if ( yvar ) {
		let result;
		if ( type === 'Z Test' ) {
			result = ztest2( xvals, yvals, xstdev, ystdev, {
				'alpha': alpha,
				'alternative': direction,
				'difference': diff
			});
		} else {
			result = ttest2( xvals, yvals, {
				'alpha': alpha,
				'alternative': direction,
				'difference': diff
			});
		}
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
		const exvar = escapeLatex( xvar );
		const eyvar = escapeLatex( yvar );
		value = <div style={{ overflowX: 'auto', width: '100%' }}>
			<label>Hypothesis test for {xvar} against {yvar}:</label>
			<TeX
				displayMode
				raw={`H_0: \\mu_{${exvar}} - \\mu_{${eyvar}} = ${diff}`}
				tag=""
			/>
			<span>vs.</span>
			<TeX
				displayMode
				raw={`\\; H_1: \\mu_{${exvar}} - \\mu_{${eyvar}} ${arrow} ${diff}`}
				tag=""
			/>
			<pre>
				{printout}
				<br />
				Sample mean in group &quot;{xvar}&quot;: {roundn( result.xmean, -3 )}
				<br />
				Sample mean in group &quot;{yvar}&quot;: {roundn( result.ymean, -3 )}
			</pre>
		</div>;
	}
	return value;
}


// EXPORTS //

export default MeanTest2;
