// MODULES //

import React, { Fragment } from 'react';
import Table from 'components/table';
import contains from '@stdlib/assert/contains';
import objectKeys from '@stdlib/utils/keys';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import isObject from '@stdlib/assert/is-object';
import extractUsedCategories from 'utils/extract-used-categories';


// VARIABLES //

const SORT_OPTS = {
	'numeric': true // Use numeric collation such that "1" < "2" < "10"...
};


// FUNCTIONS //

const createContingencyTable = ( data, rowVar, colVar, relativeFreqs, nDecimalPlaces, display ) => {
	const freqs = {};
	const relFreqs = {};
	const rowValues = data[ rowVar ];
	const colValues = data[ colVar ];
	const nobs = rowValues.length;
	const rowFreqs = countBy( rowValues, identity );
	const colFreqs = countBy( colValues, identity );

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
		columnTotals.push( <td>
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
				<th>Row Totals</th>
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
				<th>Column Totals</th>
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

const createGroupedContingencyTable = ( data, rowVar, colVar, group, relativeFreqs, nDecimalPlaces, display ) => {
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

	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		table.push( createContingencyTable( groupedData[ key ], rowVar, colVar, relativeFreqs, nDecimalPlaces, display ) );
	}

	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{`Grouped by ${group}:`}</label>
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

function ContingencyTable({ data, rowVar, colVar, group, relativeFreqs, nDecimalPlaces, display }) {
	let table;
	if ( !group ) {
		table = createContingencyTable( data, rowVar, colVar, relativeFreqs, nDecimalPlaces, display );
	} else {
		table = createGroupedContingencyTable( data, rowVar, colVar, group, relativeFreqs, nDecimalPlaces, display );
	}
	return table;
}


// EXPORTS //

export default ContingencyTable;
