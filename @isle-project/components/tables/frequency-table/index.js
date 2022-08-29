// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Table from '@isle-project/components/table';
import objectKeys from '@stdlib/utils/keys';
import entries from '@stdlib/utils/entries';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import by from '@isle-project/utils/by';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';


// VARIABLES //

const SORT_OPTS = {
	'numeric': true // Use numeric collation such that "1" < "2" < "10"...
};
const MAX_NUM_GROUPS = 25;
const MAX_NUM_ROWS = 250;


// FUNCTIONS //

function getFrequencies( variable, x, calculateCounts, calculateRelative ) {
	const counts = countBy( x, identity );
	let keys;
	if ( variable.categories ) {
		keys = extractUsedCategories( counts, variable );
	} else {
		keys = objectKeys( counts );
		keys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
	}
	if ( keys.length > MAX_NUM_ROWS ) {
		return null;
	}
	let freqs = new Array( keys.length );
	for ( let i = 0; i < keys.length; i++ ) {
		freqs[ i ] = counts[ keys[ i ] ];
	}
	let relativeFreqs;
	let absoluteFreqs;
	if ( calculateRelative ) {
		const totalCount = freqs.reduce( ( a, b ) => a + b );
		relativeFreqs = freqs.map( x => {
			return x / totalCount;
		});
	}
	if ( calculateCounts ) {
		absoluteFreqs = freqs;
	}
	return {
		keys,
		absoluteFreqs,
		relativeFreqs
	};
}

const frequencyTable = ( variable, freqs, nDecimalPlaces, t ) => {
	if ( !freqs ) {
		return (
			<Alert variant="danger">
				{t('too-many-rows')}
			</Alert>
		);
	}
	let nTotal = 0;
	if ( freqs.absoluteFreqs && !freqs.relativeFreqs ) {
		return (
			<Table bordered size="sm">
				<thead>
					<tr>
						<th className="not-sortable" >{variable}</th>
						<th>{ t('category') }</th>
						<th>{ t('count') }</th>
					</tr>
				</thead>
				<tbody>
					{freqs.absoluteFreqs.map( ( count, id ) => {
						nTotal += count;
						return ( <tr key={id}>
							<td></td>
							<td>{freqs.keys[ id ]}</td>
							<td>{count}</td>
						</tr> );
					})}
				</tbody>
				<tbody>
					<tr key="total">
						<th>{t('total')}</th>
						<td></td>
						<td>{nTotal}</td>
					</tr>
				</tbody>
			</Table>
		);
	}
	if ( !freqs.absoluteFreqs && freqs.relativeFreqs ) {
		return ( <Table bordered size="sm">
			<thead>
				<tr>
					<th className="not-sortable" >{variable}</th>
					<th>{ t('category') }</th>
					<th>{ t('relative-frequency')}</th>
				</tr>
			</thead>
			<tbody>
				{freqs.relativeFreqs.map( ( count, id ) => {
					nTotal += count;
					return ( <tr key={id}>
						<td></td>
						<td>{freqs.keys[ id ]}</td>
						<td>{count.toFixed( nDecimalPlaces )}</td>
					</tr> );
				})}
			</tbody>
			<tbody>
				<tr key="total">
					<th>{t('total')}</th>
					<td></td>
					<td>1.0</td>
				</tr>
			</tbody>
		</Table> );
	}
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<th className="not-sortable" >{variable}</th>
					<th>{t('category') }</th>
					<th>{t('count-relative-frequency')}</th>
				</tr>
			</thead>
			<tbody>
				{freqs.absoluteFreqs.map( ( count, id ) => {
					const relFreq = freqs.relativeFreqs[ id ];
					nTotal += count;
					return ( <tr key={id}>
						<td></td>
						<td>{freqs.keys[ id ]}</td>
						<td>{count} ({relFreq.toFixed( nDecimalPlaces )})</td>
					</tr> );
				})}
			</tbody>
			<tbody>
				<tr key="total">
					<th>{t('total')}</th>
					<td></td>
					<td>{nTotal} (1.0)</td>
				</tr>
			</tbody>
		</Table>
	);
};

const groupedFrequencyTable = ( variable, freqs, nDecimalPlaces, t ) => {
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{variable}: </label>
			{entries( freqs ).map( ( arr, i ) => {
				if ( !arr ) {
					return (
						<Alert key={`alert-${i}`} variant="danger">
							{t('too-many-rows')}
						</Alert>
					);
				}
				const relativeFreqs = arr[ 1 ].relativeFreqs;
				const absoluteFreqs = arr[ 1 ].absoluteFreqs;
				const categories = arr[ 1 ].keys.map(
					( x, j ) => <td key={j}>{x}</td>
				);
				let counts;
				if ( absoluteFreqs && !relativeFreqs ) {
					let nTotal = 0;
					counts = absoluteFreqs.map( ( x, j ) => {
						const count = x || 0;
						nTotal += count;
						return ( <td key={j}>
							{ count }
						</td> );
					});
					counts.push( <td key="total">{nTotal}</td> );
				}
				else if ( !absoluteFreqs && relativeFreqs ) {
					counts = relativeFreqs.map( ( x, j ) => {
						const count = x || 0;
						return ( <td key={j}>
							{ count.toFixed( nDecimalPlaces ) }
						</td> );
					});
					counts.push( <td key="total">1.0</td> );
				}
				else if ( absoluteFreqs && relativeFreqs ) {
					let nTotal = 0;
					counts = absoluteFreqs.map( ( x, j ) => {
						const count = x || 0;
						nTotal += count;
						return ( <td key={j}>
							{count} ({relativeFreqs[ j ].toFixed( nDecimalPlaces )})
						</td> );
					});
					counts.push( <td key="total">{nTotal} (1.0)</td> );
				}
				return ( <div key={i} >
					<label>{arr[ 0 ]}: </label>
					<Table bordered size="sm">
						<thead>
							<tr>
								<th>{t('category')}</th>
								{categories}
								<th>{t('total')}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>{ relativeFreqs && !absoluteFreqs ? 'Relative' : 'Count' }</th>
								{counts}
							</tr>
						</tbody>
					</Table>
				</div> );
			})}
		</div>
	);
};


// MAIN //

function FrequencyTable({ data, variable, group, calculateCounts, calculateRelative, nDecimalPlaces, t }) {
	if ( !data ) {
		return <Alert variant="danger">{t('data-missing')}</Alert>;
	}
	let freqs;
	if ( !group ) {
		freqs = getFrequencies( variable, data[ variable ], calculateCounts, calculateRelative );
	} else {
		freqs = by( data[ variable ], data[ group ], ( arr ) => {
			return getFrequencies( variable, arr, calculateCounts, calculateRelative );
		});
		if ( Object.keys( freqs ).length > MAX_NUM_GROUPS ) {
			return <Alert variant="danger">{t('too-many-groups')}</Alert>;
		}
		if ( group.categories ) {
			// Create new object with different insertion order:
			const tmp = {};
			for ( let i = 0; i < group.categories.length; i++ ) {
				if ( freqs[ group.categories[ i ] ] ) {
					tmp[ group.categories[ i ] ] = freqs[ group.categories[ i ] ];
				}
			}
			freqs = tmp;
		}
	}
	if ( !group ) {
		return frequencyTable( variable, freqs, nDecimalPlaces, t );
	}
	return groupedFrequencyTable( variable, freqs, nDecimalPlaces, t );
}


// PROPERTIES //

FrequencyTable.defaultProps = {
	calculateCounts: true,
	calculateRelative: false,
	nDecimalPlaces: 3,
	group: null
};

FrequencyTable.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	calculateCounts: PropTypes.bool,
	calculateRelative: PropTypes.bool,
	group: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	nDecimalPlaces: PropTypes.number
};


// EXPORTS //

/**
* A frequency table.
*
* @property {Object} data - object of value arrays
* @property {string} variable - name of categorical variable to be displayed
* @property {(string|Factor)} group - name of grouping variable
* @property {boolean} calculateCounts - controls whether to display absolute counts
* @property {boolean} calculateRelative - controls whether to display relative frequencies
* @property {number} nDecimalPlaces - number of decimal places for relative frequencies displayed in table
*/
export default withTranslation( 'tables' )( withPropCheck( FrequencyTable ) );
