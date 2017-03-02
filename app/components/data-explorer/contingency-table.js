// MODULES //

import React, { Component, PropTypes } from 'react';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import countBy from 'lodash.countby';


// MAIN //

class ContingencyTable extends Component {

	constructor( props ) {

		super( props );

	}

	generateContingencyTable( rowVar, colVar, relativeFreqs ) {
		const freqs = {};
		const rowValues = this.props.data[ rowVar ];
		const colValues = this.props.data[ colVar ];
		const nobs = rowValues.length;
		const rowFreqs = countBy( rowValues );
		const colFreqs = countBy( colValues );

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

		let output = {
			variable: `${rowVar} by ${colVar}`,
			type: 'Contingency Table',
			value: table
		};
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultRowVar, defaultColVar } = this.props;
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
				<CheckboxInput
					legend="Relative Frequency"
					defaultValue={false}
				/>
			</Dashboard>
		);
	}
};


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
