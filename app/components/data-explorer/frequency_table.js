// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/lib/Table';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import objectKeys from '@stdlib/utils/keys';
import entries from '@stdlib/utils/entries';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import by from './by.js';
import QuestionButton from './question_button.js';


// FUNCTIONS //

function getFrequencies( variable, x, relativeFreqs ) {
	const counts = countBy( x, identity );
	const keys = variable.categories || objectKeys( counts );
	let freqs = new Array( keys.length );
	for ( let i = 0; i < keys.length; i++ ) {
		freqs[ i ] = { category: keys[ i ], count: counts[ keys[ i ] ] };
	}
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

const frequencyTable = ( variable, freqs, relative ) => {
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<th>Variable</th>
					<th>Category</th>
					<th>{ relative ? 'Relative' : 'Count' }</th>
				</tr>
			</thead>
			<tbody>
				{freqs.map( ( elem, id ) => {
					return ( <tr key={id}>
						<th>{ id === 0 ? variable : null }</th>
						<td>{elem.category}</td>
						<td>{relative ? elem.count.toFixed( 3 ) : elem.count}</td>
					</tr> );
				})}
			</tbody>
		</Table>
	);
};

const groupedFrequencyTable = ( variable, freqs, relative ) => {
	return (
		<div style={{ overflowX: 'auto' }}>
			<label>{variable}: </label>
			{entries( freqs ).map( ( arr, i ) => {
				const categories = arr[ 1 ].map(
					( x, j ) => <td key={j}>{x.category}</td>
				);
				const counts = arr[ 1 ].map(
					( x, j ) => ( <td key={j}>
						{ relative ? x.count.toFixed( 3 ) : x.count }
					</td> )
				);
				return ( <pre key={i} >
					<label>{arr[ 0 ]}: </label>
					<Table bordered size="sm">
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
					</Table>
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
			freqs = getFrequencies( variable, this.props.data[ variable ], relativeFreqs );
		} else {
			freqs = by( this.props.data[ variable ], this.props.data[ group ], ( arr ) => {
				return getFrequencies( variable, arr, relativeFreqs );
			});
			if ( group.categories ) {
				// Create new object with different insertion order:
				const tmp = {};
				for ( let i = 0; i < group.categories.length; i++ ) {
					tmp[ group.categories[ i ] ] = freqs[ group.categories[ i ] ];
				}
				freqs = tmp;
			}
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
		const description = 'A frequency table is a tabular display for either the raw absolute or relative frequencies of a categorical variable\'s values.';
		return (
			<Dashboard
				autoStart={false}
				title={<span>Frequency Table<QuestionButton title="Frequency Table" content={description} /></span>}
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
	defaultValue: null,
	groupingVariables: null,
	logAction() {}
};


// PROPERTY TYPES //

FrequencyTable.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default FrequencyTable;
