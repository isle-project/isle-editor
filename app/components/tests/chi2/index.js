// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
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


// PROPERTIES //

Chi2Test.defaultProps = {};

Chi2Test.propTypes = {
	data: PropTypes.object.isRequired,
	var1: PropTypes.string.isRequired,
	var2: PropTypes.string.isRequired
};


// EXPORTS //

/**
* Chi-square independence test.
*
* @property {Object} data - object of value arrays
* @property {string} var1 - name of first variable
* @property {string} var2 - name of second variable
*/
export default Chi2Test;
