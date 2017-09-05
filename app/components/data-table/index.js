// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import InputRange from 'react-input-range';
import min from 'compute-min';
import max from 'compute-max';
import isNumberArray from '@stdlib/assert/is-number-array';
import copy from '@stdlib/utils/copy';
import 'react-table/react-table.css';
import 'react-input-range/lib/css/index.css';


// MAIN //

class DataTable extends Component {

	constructor( props ) {
		super( props );

		const keys = Object.keys( props.data );
		const nRows = props.data[ keys[ 0 ] ].length;
		const rows = new Array( nRows );
		for ( let i = 0; i < nRows; i++ ) {
			rows[ i ] = {};
			rows[ i ][ 'id' ] = i;
			for ( let j = 0; j < keys.length; j++ ) {
				let key = keys[ j ];
				rows[ i ][ key ] = props.data[ key ][ i ];
			}
		}
		if ( props.showRemove ) {
			for ( let i = 0; i < nRows; i++ ) {
				if ( !rows[ i ][ 'remove' ]) {
					rows[ i ][ 'remove' ] = false;
				}
			}
		}

		const newtState = {
			values: {}
		};
		const columns = keys.map( key => {
			const out = {
				Header: key,
				accessor: key
			};
			newtState.values[ key ] = {
				max: max( props.data[ key ]),
				min: min( props.data[ key ])
			};
			if ( isNumberArray( props.data[ key ]) ) {
				out[ 'filterMethod' ] = this.filterMethod;
				out[ 'Filter' ] = ({ filter, onChange }) => {
					return (
						<div style={{
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '8px',
							paddingBottom: '4px'
						}}>
							<InputRange
								maxValue={max( props.data[ key ])}
								minValue={min( props.data[ key ])}
								value={this.state.values[ key ]}
								onChange={ ( newValue ) => {
									const newState = copy( this.state );
									newState.values[ key ] = newValue;
									this.setState( newState );
									onChange( newValue );
								}}
							/>
						</div>
					);
				};
			}
			return out;
		});
		columns.unshift({
			Header: 'id',
			accessor: 'id'
		});
		if ( props.showRemove ) {
			columns.push({
				Header: 'Remove',
				accessor: "remove",
				Cell: this.renderCheckboxRemovable,
				filterable: false
			});
		}

		newtState.rows = rows;
		newtState.columns = columns;
		this.state = newtState;
	}

	filterMethod = ( filter, row ) => {
		const val = row[ filter.id ];
		return val >= filter.value.min && val <= filter.value.max;
	}

	renderCheckboxRemovable = ( cellInfo ) => {
		return (
			<input
				id="checkBox" type="checkbox"
				onClick={ e => {
					const rows = [ ...this.state.rows ];
					rows[ cellInfo.index ][ cellInfo.column.id ] = e.target.checked;
					this.setState({ rows });
					this.props.onClickRemove( rows );
				}}
			/>
		);
	  }

	render() {
		return (
			<div>
				<ReactTable
					data={this.state.rows}
					columns={this.state.columns}
					showPagination={true}
					sortable={true}
					resizable={true}
					filterable={true}
					showPageSizeOptions={false}
					defaultPageSize={50}
					style={{
						maxHeight: 500,
						fontSize: '12px',
						...this.props.style
					}}
				/>
				<label><i>Total number of rows: {this.state.rows.length}</i></label>
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

DataTable.defaultProps = {
	maxHeight: 400,
	width: 600,
	style: {},
	onClickRemove(){},
	showRemove: false
};


// PROPERTY TYPES //

DataTable.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	]).isRequired,
	maxHeight: PropTypes.number,
	width: PropTypes.number,
	onClickRemove: PropTypes.func,
	showRemove: PropTypes.bool
};


// EXPORTS //

export default DataTable;

