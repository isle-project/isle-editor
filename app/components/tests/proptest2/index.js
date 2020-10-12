// MODULES //

import React from 'react';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import ztest2 from '@stdlib/stats/ztest2';
import roundn from '@stdlib/math/base/special/roundn';
import replace from '@stdlib/string/replace';
import bifurcateBy from '@stdlib/utils/bifurcate-by';
import TeX from 'components/tex';
import mean from 'utils/statistic/mean';
import stdev from 'utils/statistic/stdev';
import escapeLatex from 'utils/escape-latex';


// VARIABLES //

const RE_ONESIDED_SMALLER = /\d{2}% confidence interval: \[-Infinity,[-?\d.]+\]/;
const RE_ONESIDED_GREATER = /\d{2}% confidence interval: \[[-?\d.]+,Infinity\]/;


// MAIN //

function PropTest2({ data, var1, var2, grouping, alpha, direction, diff, showDecision, success }) {
	let firstCategory;
	let secondCategory;
	let value;
	let x;
	let y;
	if ( grouping ) {
		x = data[ var1 ];
		const binary = [];
		const categories = [];
		for ( let i = 0; i < x.length; i++ ) {
			const v = x[ i ];
			const group = data[ grouping ][ i ];
			if (
				!isUndefinedOrNull( v ) && v !== '' &&
				!isUndefinedOrNull( group ) && group !== ''
			) {
				binary.push( v === success ? 1 : 0 );
				categories.push( group );
			}
		}
		firstCategory = categories[ 0 ];
		for ( let i = 1; i < categories.length; i++ ) {
			if ( categories[ i ] !== firstCategory ) {
				secondCategory = categories[ i ];
			}
		}
		const splitted = bifurcateBy( binary, function splitter( x, idx ) {
			return categories[ idx ] === firstCategory;
		});
		x = splitted[ 0 ];
		y = splitted[ 1 ];
		const result = ztest2( x, y, stdev( x ), stdev( y ), {
			'alpha': alpha,
			'alternative': direction,
			'difference': diff
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
		const title = `Hypothesis test for equality of ${var1} proportion by ${grouping}`;
		const c1Label = escapeLatex( firstCategory );
		const c2Label = escapeLatex( secondCategory );
		const gLabel = escapeLatex( grouping );
		value = <div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{title}</label><br />
			<span>
				Let <TeX raw={`p_{${c1Label}}`} /> be the population probability of <code>{var1}</code> being <code>{success}</code> in the first group, <br />
				and <TeX raw={`p_{${c2Label}}`} /> the probability in the second group, respectively. We test
			</span>
			<TeX
				displayMode
				raw={`H_0: p_{\\text{${gLabel}:${c1Label}}} - p_{\\text{${gLabel}:${c2Label}}} = ${diff}`}
				tag="" />
			<span> vs. </span>
			<TeX
				displayMode
				raw={`H_1: p_{\\text{${gLabel}:${c1Label}}} - p_{\\text{${gLabel}:${c2Label}}} ${arrow} ${diff}`}
				tag=""
			/>
			<pre>
				{printout}
				<br />
				Sample proportion in group &quot;{firstCategory}&quot;: {roundn( mean( x ), -3 )}
				<br />
				Sample proportion in group &quot;{secondCategory}&quot;: {roundn( mean( y ), -3 )}
			</pre>
		</div>;
	} else if ( var2 ) {
		const xvals = data[ var1 ];
		const yvals = data[ var2 ];
		const x = [];
		const y = [];
		for ( let i = 0; i < x.length; i++ ) {
			const xv = xvals[ i ];
			if ( !isUndefinedOrNull( xv ) && xv !== '' ) {
				x.push( xv === success ? 1 : 0 );
			}
		}
		for ( let i = 0; i < y.length; i++ ) {
			const yv = yvals[ i ];
			if ( !isUndefinedOrNull( yv ) && yv !== '' ) {
				y.push( yv === success ? 1 : 0 );
			}
		}
		const result = ztest2( x, y, stdev( x ), stdev( y ), {
			'alpha': alpha,
			'alternative': direction,
			'difference': diff
		});
		let arrow = '\\ne';
		if ( direction === 'less' ) {
			arrow = '<';
		} else if ( direction === 'greater' ){
			arrow = '>';
		}
		const title = `Hypothesis test for equality of proportion ${var1} against proportion ${var2}`;
		const evar1 = escapeLatex( var1 );
		const evar2 = escapeLatex( var2 );
		value = <div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{title}</label><br />
			<p>
				Let <TeX raw={`p_{${evar1}}`} /> be the population probability of <code>{var1}</code> being <code>{success}</code>, <br />
				and <TeX raw={`p_{${evar2}}`} /> the probability <code>{var2}</code> being <code>{success}</code>, respectively. We test
			</p>
			<TeX displayMode raw={`H_0: p_{${evar1}} - p_{${evar2}} = ${diff}`} tag="" />
			<span> vs. </span>
			<TeX displayMode raw={`H_1: p_{${evar1}} - p_{${evar2}} ${arrow} ${diff}`} tag="" />
			<pre style={{ fontSize: '11px' }}>
				{result.print({
					decision: showDecision
				})}
				<br />
				Sample proportion in group &quot;{var1}&quot;: {roundn( mean( x ), -3 )}
				<br />
				Sample proportion in group &quot;{var2}&quot;: {roundn( mean( y ), -3 )}
			</pre>
		</div>;
	}
	return value;
}


// EXPORTS //

export default PropTest2;
