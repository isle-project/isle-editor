// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'components/table';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import NumberInput from 'components/input/number';
import objectKeys from '@stdlib/utils/keys';
import entries from '@stdlib/utils/entries';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import { DATA_EXPLORER_FREQUENCY_TABLE } from 'constants/actions.js';
import extractUsedCategories from './extract_used_categories.js';
import by from './by.js';
import QuestionButton from './question_button.js';


// VARIABLES //

const DESCRIPTION = 'A frequency table is a tabular display for either the raw absolute or relative frequencies of a categorical variable\'s values.';
const SORT_OPTS = {
	'numeric': true // Use numeric collation such that "1" < "2" < "10"...
};


// FUNCTIONS //

function getFrequencies( variable, x, relativeFreqs ) {
	const counts = countBy( x, identity );
	let keys;
	if ( variable.categories ) {
		keys = extractUsedCategories( counts, variable );
	} else {
		keys = objectKeys( counts );
		keys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
	}
	let freqs = new Array( keys.length );
	for ( let i = 0; i < keys.length; i++ ) {
		freqs[ i ] = { category: keys[ i ], count: counts[ keys[ i ] ] };
	}
	if ( relativeFreqs ) {
		let totalCount = freqs
			.map( x => x.count ? x.count : 0 )
			.reduce( ( a, b ) => a + b );
		freqs = freqs.map( x => {
			x.count = x.count / totalCount;
			return x;
		});
	}
	return freqs;
}

const frequencyTable = ( variable, freqs, relative, nDecimalPlaces ) => {
	let nTotal = 0;
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<th className="not-sortable" >{variable}</th>
					<th>Category</th>
					<th>{ relative ? 'Relative Frequency' : 'Count' }</th>
				</tr>
			</thead>
			<tbody>
				{freqs.map( ( elem, id ) => {
					const count = elem.count || 0;
					nTotal += count;
					return ( <tr key={id}>
						<td></td>
						<td>{elem.category}</td>
						<td>{relative ? count.toFixed( nDecimalPlaces ) : count}</td>
					</tr> );
				})}
			</tbody>
			<tbody>
				<tr key="total">
					<th>Total</th>
					<td></td>
					<td>{relative ? '1.0' : nTotal}</td>
				</tr>
			</tbody>
		</Table>
	);
};

const groupedFrequencyTable = ( variable, freqs, relative, nDecimalPlaces ) => {
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{variable}: </label>
			{entries( freqs ).map( ( arr, i ) => {
				const categories = arr[ 1 ].map(
					( x, j ) => <td key={j}>{x.category}</td>
				);
				let counts;
				if ( !relative ) {
					let nTotal = 0;
					counts = arr[ 1 ].map( ( x, j ) => {
						const count = x.count || 0;
						nTotal += count;
						return ( <td key={j}>
							{ count }
						</td> );
					});
					counts.push( <td key="total">{nTotal}</td> );
				} else {
					counts = arr[ 1 ].map( ( x, j ) => {
						const count = x.count || 0;
						return ( <td key={j}>
							{ count.toFixed( nDecimalPlaces ) }
						</td> );
					});
				}
				return ( <div key={i} >
					<label>{arr[ 0 ]}: </label>
					<Table bordered size="sm">
						<thead>
							<tr>
								<th>Category</th>
								{categories}
								{ !relative ? <th>Total</th> : null }
							</tr>
						</thead>
						<tbody>
							<th>{ relative ? 'Relative' : 'Count' }</th>
							{counts}
						</tbody>
					</Table>
				</div> );
			})}
		</div>
	);
};


// MAIN //

class FrequencyTable extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			relativeFreqs: false,
			variable: props.defaultValue || props.variables[ 0 ],
			group: null, // eslint-disable-line react/no-unused-state
			nDecimalPlaces: 3
		};
	}

	generateFrequencyTable() {
		const { variable, group, relativeFreqs, nDecimalPlaces } = this.state;
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
					if ( freqs[ group.categories[ i ] ] ) {
						tmp[ group.categories[ i ] ] = freqs[ group.categories[ i ] ];
					}
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
			output.value = frequencyTable( output.variable, freqs, relativeFreqs, nDecimalPlaces );
		} else {
			output.value = groupedFrequencyTable( output.variable, freqs, relativeFreqs, nDecimalPlaces );
		}
		this.props.logAction( DATA_EXPLORER_FREQUENCY_TABLE, {
			variable, group, relativeFreqs
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, groupingVariables } = this.props;
		return (
			<Card>
				<Card.Header as="h4">
				Frequency Table
					<QuestionButton title="Frequency Table" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Variable:"
						defaultValue={this.state.variable}
						options={variables}
						onChange={( value )=>{
							this.setState({
								variable: value
							});
						}}
					/>
					<SelectInput
						legend="Group By:"
						options={groupingVariables}
						clearable={true}
						menuPlacement="top"
						onChange={( value )=>{
							this.setState({
								group: value // eslint-disable-line react/no-unused-state
							});
						}}
						tooltip="Generate a frequency table for each category of a chosen grouping variable"
					/>
					<CheckboxInput
						legend="Relative Frequency"
						defaultValue={false}
						onChange={() => {
							this.setState({
								relativeFreqs: !this.state.relativeFreqs
							});
						}}
					/>
					{ this.state.relativeFreqs ? <p>Report relative frequencies to
						<NumberInput
							inline
							width={50}
							max={16}
							min={0}
							defaultValue={this.state.nDecimalPlaces}
							onChange={( value ) => {
								this.setState({
									nDecimalPlaces: value
								});
							}}
						/>
						decimal place(s).
					</p> : null }
					<Button variant="primary" block onClick={this.generateFrequencyTable.bind( this )}>Generate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// DEFAULT PROPERTIES //

FrequencyTable.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {}
};


// PROPERTIES //

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
