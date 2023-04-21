// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import roundn from '@stdlib/math/base/special/roundn';
import sqrt from '@stdlib/math/base/special/sqrt';
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
	return { table: out, xCategories, yCategories };
}


// MAIN //

function Chi2Test({ data, var1, var2, showDecision }) {
	const { t } = useTranslation( 'tests' );
	if ( !data ) {
		return <Alert variant="danger">{t('data-missing')}</Alert>;
	}
	// TODO: Filter our missing values and keep count of them

	const { table, xCategories, yCategories } = createContingencyTable( data, var1, var2 );
	const result = chi2test( table );

	const contribTable = new Array( table.length );
	for ( let i = 0; i < table.length; i++ ) {
		contribTable[ i ] = new Array( table[ i ].length );
		for ( let j = 0; j < table[ i ].length; j++ ) {
			const observed = table[ i ][ j ];
			const expected = result.expected.get( i, j );
			const residual = ( observed - expected ) / sqrt( expected );
			const residualSquared = residual * residual;
			const contribution = 100 * residualSquared / result.statistic;
			contribTable[ i ][ j ] = `${observed}/${roundn(expected, -2)} (${roundn(contribution, -2 )}%)`;
		}
	}
	const contributionsTable = <table className="table table-bordered table-condensed">
		<thead>
			<tr>
				<th></th>
				{yCategories.map( ( y, i ) => {
					return <th key={i}>{y}</th>;
				})}
			</tr>
		</thead>
		<tbody>
			{xCategories.map( ( x, i ) => {
				return (
					<tr key={i}>
						<th>{x}</th>
						{contribTable[ i ].map( ( y, j ) => {
							return <td key={j}>{y}</td>;
						})}
					</tr>
				);
			})}
		</tbody>
	</table>;
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{t('hypothesis-test-for-independence', { var1, var2 })}:</label>
			{result.print({
					decision: showDecision
			})}
			{contributionsTable}
			<p>observed/expected (contribution to chi-square in %)</p>
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
