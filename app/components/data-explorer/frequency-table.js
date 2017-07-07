// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import entries from '@stdlib/utils/entries';
import countBy from 'lodash.countby';
import isArray from '@stdlib/assert/is-array';


// FUNCTIONS //

function by( arr, factor, fun ) {
	let ret = {};
	for ( let i = 0; i < arr.length; i++ ) {
		if ( !isArray( ret[ factor[ i ] ]) ) {
			ret[ factor[ i ] ] = [];
		}
		ret[ factor[ i ] ].push( arr[ i ]);
	}
	for ( let key in ret ) {
		ret[ key ] = fun( ret[ key ]);
	}
	return ret;
}

function getFrequencies( x, relativeFreqs ) {
	let freqs = entries( countBy( x ) ).map( e => {
		return { category: e[ 0 ], count: e[ 1 ] };
	});
	if ( relativeFreqs ) {
		let totalCount = freqs
			.map( x => x.count )
			.reduce( ( a, b ) => a + b );
		freqs = freqs.map( x => {
			x.count = x.count / totalCount;
			return x;
		});
	}
	return freqs;
}

// FUNCTIONS //

const frequencyTable = ( variable, freqs, relative ) => {
	return (
		<div>
			<label>{variable}: </label>
			<pre>
				<table>
					<thead>
						<tr>
							<th>Category</th>
							<th>{ relative ? 'Relative' : 'Count' }</th>
						</tr>
					</thead>
					<tbody>
						{freqs.map( ( elem, id ) => {
							return ( <tr key={id}>
								<td>{elem.category}</td>
								<td>{relative ? elem.count.toFixed( 3 ) : elem.count}</td>
							</tr> );
						})}
					</tbody>
				</table>
			</pre>
		</div>
	);
};

const groupedFrequencyTable = ( variable, freqs, relative ) => {
	return (
		<div style={{ overflowX: 'auto' }}>
			<label>{variable}: </label>
			{entries( freqs ).map( ( arr, i ) => {
				let categories = arr[ 1 ].map( x => <td>{x.category}</td> );
				let counts = arr[ 1 ].map( x => <td>{ relative ? x.count.toFixed( 3 ) : x.count }</td> );
				return ( <pre key={i} >
					<label>{arr[ 0 ]}: </label>
					<table>
						<thead>
							<tr>
								<th>Category</th>
								{categories}
							</tr>
						</thead>
						<tbody>
							<th>{ relative ? 'Relative' : 'Count' }</th>
							{counts}
						</tbody>
					</table>
				</pre> );
			})}
		</div>
	);
};


// MAIN //

class FrequencyTable extends Component {

	constructor( props ) {

		super( props );

	}

	generateFrequencyTable( variable, group, relativeFreqs ) {
		let freqs;
		if ( !group ) {
			freqs = getFrequencies( this.props.data[ variable ], relativeFreqs );
		} else {
			freqs = by( this.props.data[ variable ], this.props.data[ group ], ( arr ) => {
				return getFrequencies( arr, relativeFreqs );
			});
		}
		let output = {
			variable: !group ? variable : `${variable} by ${group}`,
			type: !group ? 'Frequency Table' : 'Grouped Frequency Table',
			relative: relativeFreqs
		};

		if ( !group ) {
			output.value = frequencyTable( output.variable, freqs, relativeFreqs );
		} else {
			output.value = groupedFrequencyTable( output.variable, freqs, relativeFreqs );
		}
		this.props.logAction( 'DATA_EXPLORER:FREQUENCY_TABLE', {
			variable, group, relativeFreqs
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultValue, groupingVariables } = this.props;
		return (
			<Dashboard
				autoStart={false}
				title="Frequency Table"
				onGenerate={this.generateFrequencyTable.bind( this )}
			>
				<SelectInput
					legend="Variable:"
					defaultValue={defaultValue || variables[ 0 ]}
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

FrequencyTable.defaultProps = {
	defaultValue: null
};


// PROPERTY TYPES //

FrequencyTable.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default FrequencyTable;
