// MODULES //

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Table from '@isle-project/components/table';
import contains from '@stdlib/assert/contains';
import objectKeys from '@stdlib/utils/keys';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import isObject from '@stdlib/assert/is-object';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';


// VARIABLES //

const SORT_OPTS = {
	'numeric': true // Use numeric collation such that "1" < "2" < "10"...
};
const MAX_NUM_GROUPS = 25;
const MAX_NUM_CATEGORIES = 250;


// FUNCTIONS //

const createContingencyTable = ( data, rowVar, colVar, relativeFreqs, nDecimalPlaces, display, t ) => {
	const freqs = {};
	const relFreqs = {};
	const rowValues = data[ rowVar ];
	const colValues = data[ colVar ];
	const nobs = rowValues.length;
	const rowFreqs = countBy( rowValues, identity );
	const colFreqs = countBy( colValues, identity );

	if ( isString( display ) ) {
		display = [ display ];
	}
	const displayRowPercent = contains( display, 'Row Percent' );
	const displayColPercent = contains( display, 'Column Percent' );

	let rowKeys;
	if ( rowVar.categories ) {
		rowKeys = extractUsedCategories( rowFreqs, rowVar );
	} else {
		rowKeys = objectKeys( rowFreqs );
		rowKeys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
	}
	let colKeys;
	if ( colVar.categories ) {
		colKeys = extractUsedCategories( colFreqs, colVar );
	} else {
		colKeys = objectKeys( colFreqs );
		colKeys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
	}
	if ( rowKeys.length > MAX_NUM_CATEGORIES ) {
		return <Alert variant="danger">{t('too-many-rows')}</Alert>;
	}
	if ( colKeys.length > MAX_NUM_CATEGORIES ) {
		return <Alert variant="danger">{t('too-many-columns')}</Alert>;
	}
	for ( let i = 0; i < rowKeys.length; i++ ) {
		for ( let l = 0; l < colKeys.length; l++ ) {
			let key1 = rowKeys[ i ];
			let key2 = colKeys[ l ];
			let size = 0;
			for ( let n = 0; n < nobs; n++ ) {
				if (
					String( rowValues[ n ] ) === key1 &&
					String( colValues[ n ] ) === key2
				) {
					size += 1;
				}
			}
			freqs[ key1 + '-' + key2 ] = size;
			relFreqs[ key1 + '-' + key2 ] = size / nobs;
		}
	}
	let columnTotals = [];
	for ( let i = 0; i < colKeys.length; i++ ) {
		const key = colKeys[ i ];
		let colfreq = colFreqs[ key ];
		let rowPercent = null;
		if ( displayRowPercent && !relativeFreqs ) {
			rowPercent = <Fragment>
				<br />
				({(colfreq / nobs).toFixed( nDecimalPlaces )})
			</Fragment>;
		}
		if ( relativeFreqs ) {
			colfreq /= nobs;
			colfreq = colfreq.toFixed( nDecimalPlaces );
		}
		columnTotals.push( <td key={`col-total-${i}`} >
			{colfreq}
			{rowPercent}
			{ displayColPercent ? <Fragment>
				<br />
				(1.0)
			</Fragment> : null }
		</td> );
	}
	let table = <Table bordered size="sm">
		<thead>
			<tr>
				<th>{rowVar} \ {colVar}</th>
				{colKeys.map( (e, i) => <th key={i}>{e}</th> )}
				<th>{t('row-totals')}</th>
			</tr>
		</thead>
		<tbody>
			{rowKeys.map( ( r, i ) => ( <tr key={i} >
				<th>{r}</th>
				{colKeys.map( ( c, j ) => {
					let freq = freqs[ r + '-' + c ];
					let relFreq = relFreqs[ r + '-' + c ];
					return (
						<td key={`${i}:${j}`}>
							{relativeFreqs ? relFreq.toFixed( nDecimalPlaces ) : freq}
							{displayRowPercent ?
								<Fragment>
									<br />
									({(freq / rowFreqs[ r ]).toFixed( nDecimalPlaces )})
								</Fragment> : null
							}
							{displayColPercent ?
								<Fragment>
									<br />
									({(freq / colFreqs[ c ]).toFixed( nDecimalPlaces )})
								</Fragment> : null
							}
						</td>
					);
				})}
				<td>
					{ !relativeFreqs ?
						rowFreqs[ r ] :
						( rowFreqs[ r ]/nobs ).toFixed( nDecimalPlaces )
					}
					{ displayRowPercent ? <Fragment>
							<br />
							(1.0)
						</Fragment> : null
					}
					{ displayColPercent && !relativeFreqs ? <Fragment>
							<br />
							({(rowFreqs[ r ] / nobs ).toFixed( nDecimalPlaces )})
						</Fragment> : null
					}
				</td>
			</tr> ) )}
		</tbody>
		<tbody>
			<tr>
				<th>{t('column-totals')}</th>
				{columnTotals}
				<th>
					{ !relativeFreqs ? nobs : ( 1.0 ).toFixed( nDecimalPlaces ) }
					{ displayRowPercent ? <Fragment>
						<br />
						(1.0)
					</Fragment> : null }
					{ displayColPercent ? <Fragment>
						<br />
						(1.0)
					</Fragment> : null }
				</th>
			</tr>
		</tbody>
	</Table>;
	return table;
};

const createGroupedContingencyTable = ( data, rowVar, colVar, group, relativeFreqs, nDecimalPlaces, display, t ) => {
	const groupedData = {};
	for ( let i = 0; i < data[ group ].length; i++ ) {
		const v = data[ group ][ i ];
		if ( !isObject( groupedData[ v ]) ) {
			groupedData[ v ] = {
				[ rowVar ]: [],
				[ colVar ]: []
			};
		}
		groupedData[ v ][ rowVar ].push( data[ rowVar ][ i ]);
		groupedData[ v ][ colVar ].push( data[ colVar ][ i ]);
	}
	let table = [];
	const keys = extractUsedCategories( groupedData, group );
	if ( keys.length > MAX_NUM_GROUPS ) {
		return (
			<Alert variant="danger" >
				{t('too-many-groups')}
			</Alert>
		);
	}
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		table.push( createContingencyTable( groupedData[ key ], rowVar, colVar, relativeFreqs, nDecimalPlaces, display, t ) );
	}
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{ t('grouped-by')} {group}:</label>
			{table.map( ( x, i ) => {
				return ( <div key={i}>
					<label>{`${keys[ i ]}`}: </label>
					{x}
				</div> );
			})}
		</div>
	);
};


// MAIN //

function ContingencyTable({ data, rowVar, colVar, group, relativeFreqs, nDecimalPlaces, display, t }) {
	if ( !data ) {
		return <Alert variant="danger">{t('data-missing')}</Alert>;
	}
	let table;
	if ( !group ) {
		table = createContingencyTable( data, rowVar, colVar, relativeFreqs, nDecimalPlaces, display, t );
	} else {
		table = createGroupedContingencyTable( data, rowVar, colVar, group, relativeFreqs, nDecimalPlaces, display, t );
	}
	return table;
}


// PROPERTIES //

ContingencyTable.defaultProps = {
	relativeFreqs: false,
	nDecimalPlaces: 3,
	group: null,
	display: []
};

ContingencyTable.propTypes = {
	data: PropTypes.object.isRequired,
	rowVar: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	colVar: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	relativeFreqs: PropTypes.bool,
	group: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	display: PropTypes.oneOfType([
		PropTypes.arrayOf( PropTypes.oneOf( [ 'Row Percent', 'Column Percent' ] ) ),
		PropTypes.oneOf( [ 'Row Percent', 'Column Percent' ] )
	]),
	nDecimalPlaces: PropTypes.number
};


// EXPORTS //

/**
* A contingency table.
*
* @property {Object} data - object of value arrays
* @property {string} rowVar - name of categorical variable to be displayed along the rows
* @property {string} colVar -  name of categorical variable to be displayed along the columns
* @property {(string|Factor)} group - name of grouping variable
* @property {boolean} relativeFreqs - controls whether to display relative frequencies
* @property {Array<string>} display - whether to display `Row Percent` and/or `Column Percent`
* @property {number} nDecimalPlaces - number of decimal places for relative frequencies displayed in table
*/
export default withTranslation( 'tables' )( withPropCheck( ContingencyTable ) );
