// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import isObject from '@stdlib/assert/is-object';


// FUNCTIONS //

const createContingencyTable = ( data, rowVar, colVar, relativeFreqs ) => {
	const freqs = {};
	const rowValues = data[ rowVar ];
	const colValues = data[ colVar ];
	const nobs = rowValues.length;
	const rowFreqs = countBy( rowValues, identity );
	const colFreqs = countBy( colValues, identity );

	const rowKeys = Object.keys( rowFreqs );
	const colKeys = Object.keys( colFreqs );
	for ( let i = 0; i < rowKeys.length; i++ ) {
		for ( let l = 0; l < colKeys.length; l++ ) {
			let key1 = rowKeys[ i ];
			let key2 = colKeys[ l ];
			let size = 0;
			for ( let n = 0; n < nobs; n++ ) {
				if ( rowValues[ n ] == key1 &&
					colValues[ n ] == key2
				) {
					size += 1;
				}
			}
			freqs[ key1 + '-' + key2 ] = !relativeFreqs ? size : size / nobs;
		}
	}

	let columnTotals = [];
	for ( let key in colFreqs ) {
		let colfreq = colFreqs[ key ];
		if ( relativeFreqs ) {
			colfreq /= nobs;
			colfreq = colfreq.toFixed( 3 );
		}
		columnTotals.push( <td>{colfreq}</td> );
	}
	let table = <table>
		<tbody>
			<tr>
				<th></th>
				<th colSpan={`${colKeys.length}`}>{colVar}</th>
				<th></th>
				<th></th>
			</tr>
			<tr>
				<th>{rowVar}</th>
				{colKeys.map( e => <th>{e}</th> )}
				<th>Row Totals</th>
			</tr>
			{rowKeys.map( r => <tr>
				<th>{r}</th>
				{colKeys.map( c => {
					let freq = freqs[ r + '-' + c ];
					if ( relativeFreqs ) {
						freq = freq.toFixed( 3 );
					}
					return <td>{freq}</td>;
				})}
				<td>{ !relativeFreqs ?
					rowFreqs[ r ] :
					( rowFreqs[ r ]/nobs ).toFixed( 3 )
				}</td>
			</tr> )}
			<tr>
				<th>Column Totals</th>
				{columnTotals}
				<th>{ !relativeFreqs ? nobs : ( 1.0 ).toFixed( 3 ) }</th>
			</tr>
		</tbody>
	</table>;

	return table;
};

const createGroupedContingencyTable = ( data, rowVar, colVar, group, relativeFreqs ) => {
	const groupedData = {};
	for ( let i = 0; i < data[ group ].length; i++ ) {
		let v = data[ group ][ i ];
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
	let keys = Object.keys( groupedData );
	for ( let i = 0; i < keys.length; i++ ) {
		let key = keys[ i ];
		table.push( createContingencyTable( groupedData[ key ], rowVar, colVar, relativeFreqs ) );
	}

	let output = {
		variable: `${rowVar} by ${colVar}`,
		type: 'Contingency Table',
		value: <div>
			<label>{`Grouped by ${group}:`}</label>
			{table.map( ( x, i ) => {
				return ( <div>
					<label>{`${keys[ i ]}`}: </label>
					<pre>{x}</pre>
				</div> );
			})}
		</div>
	};
	return output;
};


// MAIN //

class ContingencyTable extends Component {

	constructor( props ) {

		super( props );

	}

	generateContingencyTable( rowVar, colVar, group, relativeFreqs ) {
		let output;
		if ( !group ) {
			let table = createContingencyTable( this.props.data, rowVar, colVar, relativeFreqs );
			output = {
				variable: `${rowVar} by ${colVar}`,
				type: 'Contingency Table',
				value: <div>
					<label>{`${rowVar} by ${colVar}`}: </label>
					<pre>{table}</pre>
				</div>
			};
		} else {
			output = createGroupedContingencyTable( this.props.data, rowVar, colVar, group, relativeFreqs );
		}
		this.props.logAction( 'DATA_EXPLORER:CONTINGENCY_TABLE', {
			rowVar, colVar, group, relativeFreqs
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultRowVar, defaultColVar, groupingVariables } = this.props;
		return (
			<Dashboard
				autoStart={false}
				title="Contingency Table"
				onGenerate={this.generateContingencyTable.bind( this )}
			>
				<SelectInput
					legend="Row Variable:"
					defaultValue={defaultRowVar || variables[ 0 ]}
					options={variables}
				/>
				<SelectInput
					legend="Column Variable:"
					defaultValue={defaultColVar || variables[ 1 ]}
					options={variables}
				/>
				<SelectInput
					legend="Group By:"
					options={groupingVariables}
					clearable={true}
				/>
				<CheckboxInput
					legend="Relative Frequency"
					defaultValue={false}
				/>
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

ContingencyTable.defaultProps = {
	defaultRowVar: null,
	defaultColVar: null
};


// PROPERTY TYPES //

ContingencyTable.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default ContingencyTable;
