// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Table from 'components/table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import NumberInput from 'components/input/number';
import contains from '@stdlib/assert/contains';
import objectKeys from '@stdlib/utils/keys';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import isObject from '@stdlib/assert/is-object';
import { DATA_EXPLORER_CONTINGENCY_TABLE } from 'constants/actions.js';
import QuestionButton from './question_button.js';


// VARIABLES //

const debug = logger( 'isle:data-explorer:contingency-table' );
const DESCRIPTION = 'A contingency table displays either the raw absolute or relative frequencies of two categorical variable\'s values alongside their row and column totals.';
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
		rowKeys = rowVar.categories;
	} else {
		rowKeys = objectKeys( rowFreqs );
		rowKeys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
	}
	let colKeys;
	if ( colVar.categories ) {
		colKeys = colVar.categories;
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
	const keys = group.categories || objectKeys( groupedData );
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		table.push( createContingencyTable( groupedData[ key ], rowVar, colVar, relativeFreqs, nDecimalPlaces, display ) );
	}

	const output = {
		variable: `${rowVar} by ${colVar}`,
		type: 'Contingency Table',
		value: <div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{`Grouped by ${group}:`}</label>
			{table.map( ( x, i ) => {
				return ( <div key={i}>
					<label>{`${keys[ i ]}`}: </label>
					{x}
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

		this.state = {
			relativeFreqs: false,
			rowVar: props.defaultRowVar || props.variables[ 0 ],
			colVar: props.defaultColVar || props.variables[ 1 ],
			group: null, // eslint-disable-line react/no-unused-state
			nDecimalPlaces: 3,
			variables: props.variables,
			display: []
		};
	}

	static getDerivedStateFromProps( props, state ) {
		if ( props.variables.length !== state.variables.length ) {
			debug( 'Available variables have changed...' );
			return {
				rowVar: props.defaultRowVar || props.variables[ 0 ],
				colVar: props.defaultColVar || props.variables[ 1 ],
				variables: props.variables
			};
		}
		return null;
	}

	generateContingencyTable() {
		let output;
		const { rowVar, colVar, group, relativeFreqs, nDecimalPlaces, display } = this.state;
		if ( !rowVar || !colVar ) {
			return this.props.session.addNotification({
				title: 'Select Variables',
				message: 'You need to select a row and column variable for the contingency table',
				level: 'warning',
				position: 'tr'
			});
		}
		if ( !group ) {
			let table = createContingencyTable( this.props.data, rowVar, colVar, relativeFreqs, nDecimalPlaces, display );
			output = {
				variable: `${rowVar} by ${colVar}`,
				type: 'Contingency Table',
				value: table
			};
		} else {
			output = createGroupedContingencyTable( this.props.data, rowVar, colVar, group, relativeFreqs, nDecimalPlaces, display );
		}
		this.props.logAction( DATA_EXPLORER_CONTINGENCY_TABLE, {
			rowVar, colVar, group, relativeFreqs
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, groupingVariables } = this.props;
		return (
			<Card>
				<Card.Header as="h4">
					Contingency Table
					<QuestionButton title="Contingency Table" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Row Variable:"
						defaultValue={this.state.rowVar}
						options={variables}
						onChange={( value )=>{
							this.setState({
								rowVar: value
							});
						}}
					/>
					<SelectInput
						legend="Column Variable:"
						defaultValue={this.state.colVar}
						options={variables}
						onChange={( value )=>{
							this.setState({
								colVar: value
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
						tooltip="Generate a contingency table for each category of a chosen grouping variable"
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
					<SelectInput
						legend="Display:"
						options={['Row Percent', 'Column Percent']}
						multi
						onChange={( display ) => {
							this.setState({
								display: display ? display : []
							});
						}}
					/>
					{ this.state.relativeFreqs || this.state.display.length > 0 ? <p>Report relative frequencies to
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
					<Button variant="primary" block onClick={this.generateContingencyTable.bind( this )}>Generate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// DEFAULT PROPERTIES //

ContingencyTable.defaultProps = {
	defaultRowVar: null,
	defaultColVar: null,
	groupingVariables: null,
	logAction() {},
	session: {}
};


// PROPERTIES //

ContingencyTable.propTypes = {
	data: PropTypes.object.isRequired,
	defaultColVar: PropTypes.string,
	defaultRowVar: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default ContingencyTable;
