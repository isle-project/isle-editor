// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import extractCategoriesFromValues from '@isle-project/utils/extract-categories-from-values';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';
import chi2test from './chi2test.js';


// FUNCTIONS //

function createContingencyTable( data, rowVar, colVar ) {
	const x = data[ rowVar ];
	const y = data[ colVar ];
	const out = [];

	const xCategories = extractCategoriesFromValues( x, rowVar );
	const yCategories = extractCategoriesFromValues( y, colVar );


	for ( let i = 0; i < xCategories.length; i++ ) {
		const row = [];
		for ( let j = 0; j < yCategories.length; j++ ) {
			row.push( 0 );
		}
		out.push( row );
	}
	for ( let i = 0; i < x.length; i++ ) {
		const xVal = x[ i ];
		const yVal = y[ i ];
		const xIndex = xCategories.indexOf( xVal );
		const yIndex = yCategories.indexOf( yVal );
		out[ xIndex ][ yIndex ] += 1;
	}
	return out;
}


// MAIN //

function Chi2Test({ data, var1, var2, showDecision }) {
	const { t } = useTranslation( 'tests' );
	if ( !data ) {
		return <Alert variant="danger">{t('data-missing')}</Alert>;
	}
	// TODO: Filter our missing values and keep count of them

	const out = createContingencyTable( data, var1, var2 );
	const result = chi2test( out );
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{t('hypothesis-test-for-independence', { var1, var2 })}:</label>
			{result.print({
					decision: showDecision
			})}
		</div>
	);
}


// PROPERTIES //

Chi2Test.defaultProps = {
	showDecision: false
};

Chi2Test.propTypes = {
	data: PropTypes.object.isRequired,
	var1: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	var2: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	showDecision: PropTypes.bool
};


// EXPORTS //

/**
* Chi-square independence test.
*
* @property {Object} data - object of value arrays
* @property {(string|Factor)} var1 - name of first variable
* @property {(string|Factor)} var2 - name of second variable
* @property {boolean} showDecision - controls whether to display if the null hypothesis is rejected at the specified significance level
*/
export default withPropCheck( Chi2Test );
