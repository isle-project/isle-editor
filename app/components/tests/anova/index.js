// MODULES //

import React from 'react';
import anova1 from '@stdlib/stats/anova1';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import isNull from '@stdlib/assert/is-null';


// MAIN //

function Anova({ data, variable, grouping, showDecision }) {
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
			<label>ANOVA for {variable} between {grouping}</label>
			<pre style={{ marginTop: 10 }}>{anova1( valsFiltered, groupsFiltered ).print({
				decision: showDecision
			})}</pre>
		</div>
	);
}


// EXPORTS //

export default Anova;
