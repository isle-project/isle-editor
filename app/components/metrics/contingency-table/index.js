
// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hasOwnProp from '@stdlib/assert/has-own-property';
import objectKeys from '@stdlib/utils/keys';
import Table from 'components/table';
import Panel from 'components/panel';
import Gate from 'components/gate';
import RealTimeMetrics from 'components/metrics/realtime';


// MAIN //

class MetricsContingencyTable extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			users: {}
		};
	}

	calcCellCount( row, col ) {
		const users = this.state.users;
		const keys = objectKeys( users );
		let count = 0;
		for ( let i = 0; i < keys.length; i++ ) {
			const user = users[ keys[ i ] ];
			if ( user.row.has( row ) && user.col.has( col ) ) {
				count += 1;
			}
		}
		return count;
	}

	renderTable() {
		return (
			<Panel style={this.props.style} >
				<Table bordered>
					<thead>
						<tr>
							<th>{`${this.props.row} / ${this.props.col}`}</th>
							{this.props.colValues.map( ( v, i ) => <th key={i}>{v}</th> )}
						</tr>
					</thead>
					<tbody>
						{this.props.rowValues.map( ( r, i ) => {
							return (
								<tr key={i}>
									<th>{r}</th>
									{this.props.colValues.map( ( c, j ) => {
										return <td key={j}>{this.calcCellCount( r, c )}</td>;
									})}
								</tr>
							);
						})}
					</tbody>
				</Table>
			</Panel>
		);
	}

	render() {
		return (
			<Gate {...this.props}>
				<div>
					<RealTimeMetrics
						for={[ this.props.row, this.props.col ]}
						returnFullObject
						onDatum={( datum, idx ) => {
							if ( datum.owner ) {
								return;
							}
							const users = this.state.users;
							if ( !hasOwnProp( users, datum.email ) ) {
								users[ datum.email ] = {
									row: new Set(),
									col: new Set()
								};
							}
							if ( idx === 0 ) {
								const val = this.props.rowAccessor( datum );
								users[ datum.email ].row.add( val );
							} else if ( idx === 1 ) {
								const val = this.props.colAccessor( datum );
								users[ datum.email ].col.add( val );
							}
							this.setState({
								users
							});
						}}
					/>
					{this.renderTable()}
				</div>
			</Gate>
		);
	}
}


// PROPERTIES //

MetricsContingencyTable.propTypes = {
	row: PropTypes.string.isRequired,
	rowValues: PropTypes.array.isRequired,
	rowAccessor: PropTypes.func,
	col: PropTypes.string.isRequired,
	colAccessor: PropTypes.func,
	colValues: PropTypes.array.isRequired,
	style: PropTypes.object
};

MetricsContingencyTable.defaultProps = {
	rowAccessor: d => d.value,
	colAccessor: d => d.value,
	style: {}
};


// EXPORTS //

export default MetricsContingencyTable;

