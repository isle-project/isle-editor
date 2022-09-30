// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import ROutput from '@isle-project/components/r/output';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';


// MAIN //

function Chi2Test({ data, var1, var2 }) {
	const { t } = useTranslation( 'tests' );
	if ( !data ) {
		return <Alert variant="danger">{t('data-missing')}</Alert>;
	}
	const x = data[ var1 ].map( x => `"${x}"` );
	const y = data[ var2 ].map( x => `"${x}"` );
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{t('hypothesis-test-for-independence', { var1, var2 })}:</label>
			<ROutput code={`
				\`${var1}\` = c(${x})
				\`${var2}\` = c(${y})
				fit = chisq.test( \`${var1}\`, \`${var2}\` )
				str = capture.output( print( fit ));
				str = gsub( "squared", "square", str );
				cat( str, sep='\n' )

				observed = fit$observed
				expected = round( fit$expected, 2 )
				contrib = 100*fit$residuals^2/fit$statistic

				for ( i in 1:length( expected ) ) {
				  expected[i] = paste(  observed[i], "/", expected[i], " (", round( contrib[i], 1 ), "%)", sep="" )
				}
				print( expected )`}
			/>
		</div>
	);
}


// PROPERTIES //

Chi2Test.defaultProps = {};

Chi2Test.propTypes = {
	data: PropTypes.object.isRequired,
	var1: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	var2: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired
};


// EXPORTS //

/**
* Chi-square independence test.
*
* @property {Object} data - object of value arrays
* @property {(string|Factor)} var1 - name of first variable
* @property {(string|Factor)} var2 - name of second variable
*/
export default withPropCheck( Chi2Test );
