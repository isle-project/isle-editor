// MODULES //

import React from 'react';
import kruskalTest from '@stdlib/stats/kruskal-test';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import isNull from '@stdlib/assert/is-null';


// MAIN //

function Kruskal({ data, variable, grouping, showDecision }) {
	const vals = data[ variable ];
	const groups = data[ grouping ];
	const groupsFiltered = [];
	const valsFiltered = [];
	for ( let i = 0; i < vals.length; i++ ) {
		if (
			( isNumber( vals[i] ) && !isnan( vals[i] ) ) &&
			( !isNull( groups[i] ) && groups[i] !== '' )
		) {
			valsFiltered.push( vals[ i ] );
			groupsFiltered.push( `"${groups[i]}"` );
		}
	}
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>Kruskal Wallis Test of {variable} between {grouping}</label>
			<pre style={{ marginTop: 10 }}>{kruskalTest( valsFiltered, { groups: groupsFiltered }).print({
				decision: showDecision
			})}</pre>
		</div>
	);
}


// EXPORTS //

export default Kruskal;
