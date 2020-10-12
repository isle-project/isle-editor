// MODULES //

import ROutput from 'components/r/output';


// MAIN //

function Chi2Test({ data, var1, var2 }) {
	const x = data[ var1 ].map( x => `"${x}"` );
	const y = data[ var2 ].map( x => `"${x}"` );
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>Hypothesis test for independence between {var1} and {var2}:</label>
			<ROutput code={`
				\`${var1}\` = c(${x})
				\`${var2}\` = c(${y})
				chisq.test( \`${var1}\`, \`${var2}\` )`}
			/>
		</div>
	);
}


// EXPORTS //

export default Chi2Test;
