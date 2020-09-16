// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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

function getFrequencies( variable, x, calculateCounts, calculateRelative ) {
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

const frequencyTable = ( variable, freqs, nDecimalPlaces ) => {
	let nTotal = 0;
	if ( freqs.absoluteFreqs && !freqs.relativeFreqs ) {
		return (
			<Table bordered size="sm">
				<thead>
					<tr>
						<th className="not-sortable" >{variable}</th>
						<th>Category</th>
						<th>Count</th>
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
						<th>Total</th>
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
					<th>Category</th>
					<th>Relative Frequency</th>
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
					<th>Total</th>
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
					<th>Category</th>
					<th>Count (Relative Frequency)</th>
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
					<th>Total</th>
					<td></td>
					<td>{nTotal} (1.0)</td>
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
			calculateRelative: false,
			calculateCounts: true,
			variable: props.defaultValue || props.variables[ 0 ],
			group: null, // eslint-disable-line react/no-unused-state
			nDecimalPlaces: 3
		};
	}

	generateFrequencyTable() {
		const { variable, group, calculateCounts, calculateRelative, nDecimalPlaces } = this.state;
		let freqs;
		if ( !group ) {
			freqs = getFrequencies( variable, this.props.data[ variable ], calculateCounts, calculateRelative );
		} else {
			freqs = by( this.props.data[ variable ], this.props.data[ group ], ( arr ) => {
				return getFrequencies( variable, arr, calculateRelative );
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
		const output = {
			variable: !group ? variable : `${variable} by ${group}`,
			type: !group ? 'Frequency Table' : 'Grouped Frequency Table',
			relative: calculateRelative
		};
		if ( !group ) {
			output.value = frequencyTable( output.variable, freqs, nDecimalPlaces );
		} else {
			output.value = groupedFrequencyTable( output.variable, freqs, nDecimalPlaces );
		}
		this.props.logAction( DATA_EXPLORER_FREQUENCY_TABLE, {
			variable, group, calculateRelative
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
					<Row>
						<Col>
							<CheckboxInput
								legend="Counts"
								defaultValue={this.state.calculateCounts}
								onChange={() => {
									this.setState({
										calculateCounts: !this.state.calculateCounts
									});
								}}
							/>
						</Col>
						<Col>
							<CheckboxInput
								legend="Relative Frequency"
								defaultValue={this.state.calculateRelative}
								onChange={() => {
									this.setState({
										calculateRelative: !this.state.calculateRelative
									});
								}}
							/>
						</Col>
					</Row>
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
					<Button
						variant="primary"
						block
						onClick={this.generateFrequencyTable.bind( this )}
						disabled={!this.state.calculateCounts && !this.state.calculateRelative}
					>Generate</Button>
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
