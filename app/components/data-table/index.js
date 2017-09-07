// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import InputRange from 'react-input-range';
import unique from 'uniq';
import floor from '@stdlib/math/base/special/floor';
import ceil from '@stdlib/math/base/special/ceil';
import min from 'compute-min';
import max from 'compute-max';
import isNumberArray from '@stdlib/assert/is-number-array';
import 'react-table/react-table.css';
import './input_range.css';


// MAIN //

class DataTable extends Component {

	constructor( props ) {
		super( props );

		const keys = Object.keys( props.data );
		const nRows = props.data[ keys[ 0 ] ].length;
		const rows = new Array( nRows );
		for ( let i = 0; i < nRows; i++ ) {
			rows[ i ] = {};
			rows[ i ][ 'id' ] = i + 1;
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

		const newState = {
			values: {},
			selectedRows: nRows
		};
		const columns = keys.map( key => {
			const out = {
				Header: key,
				accessor: key
			};
			const vals = props.data[ key ].slice();
			const uniqueValues = unique( vals );
			if ( isNumberArray( props.data[ key ]) ) {
				out[ 'filterMethod' ] = this.filterMethodNumbers;
				out[ 'Filter' ] = ({ filter, onChange }) => {
					const defaultVal = {
						max: ceil( max( uniqueValues ) ),
						min: floor( min( uniqueValues ) )
					};
					return (
						<div style={{
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '8px',
							paddingBottom: '4px'
						}}>
							<InputRange
								maxValue={ceil( max( uniqueValues ) )}
								minValue={floor( min( uniqueValues ) )}
								value={  filter ? filter.value : defaultVal }
								onChange={ ( newValue ) => {
									onChange( newValue );
								}}
							/>
						</div>
					);
				};
			} else if ( uniqueValues.length <= 8 ) {
				out[ 'filterMethod' ] = this.filterMethodCategories;
				out[ 'Filter' ] = ({ filter, onChange }) => {
					return (
						<select
							onChange={ ( event ) => {
								const newValue = event.target.value;
								onChange( newValue );
							}}
							style={{ width: '100%' }}
							value={ filter ? filter.value : 'all' }
						>
							<option value="all">Show All</option>
							{uniqueValues.map( v => <option value={`${v}`}>{v}</option> )}
						</select>
					);
				};
			}
			return out;
		});
		columns.unshift({
			Header: 'id',
			accessor: 'id',
			filterable: false
		});
		if ( props.showRemove ) {
			columns.push({
				Header: 'Remove',
				accessor: "remove",
				Cell: this.renderCheckboxRemovable,
				filterable: false
			});
		}

		newState.rows = rows;
		newState.columns = columns;
		this.state = newState;
	}

	filterMethodCategories = ( filter, row, column ) => {
		if ( filter.value === 'all' ) {
			return true;
		}
		const id = filter.pivotId || filter.id;
		return row[ id ] !== undefined ?
			String( row[ id ]) === filter.value :
			true;
	}

	filterMethodStrings = ( filter, row, column ) => {
		const id = filter.pivotId || filter.id;
		return row[ id ] !== undefined ? String( row[ id ]).startsWith( filter.value ) : true;
	}

	filterMethodNumbers = ( filter, row ) => {
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

	handleFilterChange = () => {
		const selectedRows = this.table.getResolvedState().sortedData.length;
		this.setState({
			selectedRows
		});
	}

	render() {
		const { selectedRows } = this.state;
		return (
			<div style={{
				fontSize: '12px',
				...this.props.style
			}}>
				<ReactTable
					ref={ ( table ) => { this.table = table; } }
					data={this.state.rows}
					columns={this.state.columns}
					showPagination={true}
					sortable={true}
					resizable={true}
					filterable={true}
					showPageSizeOptions={false}
					defaultPageSize={50}
					style={{
						maxHeight: 500
					}}
					onFilteredChange={this.handleFilterChange}
				/>
				<label><i>Number of rows: {selectedRows} (total: {this.state.rows.length})</i></label>
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

