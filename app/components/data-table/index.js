// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import InputRange from 'react-input-range';
import unique from 'uniq';
import contains from '@stdlib/assert/contains';
import lowercase from '@stdlib/string/lowercase';
import floor from '@stdlib/math/base/special/floor';
import ceil from '@stdlib/math/base/special/ceil';
import min from 'compute-min';
import max from 'compute-max';
import isNumberArray from '@stdlib/assert/is-number-array';
import isArray from '@stdlib/assert/is-array';
import 'react-table/react-table.css';
import './input_range.css';
import './react_table_height.css';


// MAIN //

class DataTable extends Component {
	constructor( props ) {
		super( props );
		this.state = this.generateInitialState( props );
	}

	componentWillReceiveProps( nextProps ) {
		if ( nextProps.data !== this.props.data ) {
			const newState = this.generateInitialState( nextProps );
			this.setState( newState );
		}
	}

	generateInitialState( props ) {
		let rows;
		let keys;
		let isArr = isArray( props.data );
		if ( isArr ) {
			// Case: `data` is already an array of observations
			rows = props.data;
			keys = Object.keys( rows[ 0 ]);
		} else {
			// Case: `data` is an object with keys for the various variables
			rows = this.createRows( props.data );
			keys = Object.keys( props.data );
		}
		for ( let i = 0; i < rows.length; i++ ) {
			if ( props.showRemove && !rows[ i ][ 'remove' ]) {
				rows[ i ][ 'remove' ] = false;
			}
			rows[ i ][ 'id' ] = i + 1;
		}
		const newState = {
			values: {},
			selectedRows: rows.length
		};
		const columns = keys.map( key => {
			const out = {
				Header: key,
				accessor: key
			};
			let vals;
			if ( !isArr ) {
				vals = props.data[ key ].slice();
			} else {
				vals = new Array( rows.length );
				for ( let i = 0; i < rows.length; i++ ) {
					vals[ i ] = props.data[ i ][ key ];
				}
			}
			const uniqueValues = unique( vals );
			if ( isNumberArray( vals ) && uniqueValues.length > 2 ) {
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
								value={ filter ? filter.value : defaultVal }
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
							value={filter ? filter.value : 'all'}
						>
							<option value="all">Show All</option>
							{uniqueValues.map( ( v, key ) => ( <option
								key={key}
								value={`${v}`}
							>{v}</option> ) )}
						</select>
					);
				};
			} else {
				out[ 'filterMethod' ] = ( filter, row ) => {
					return contains( lowercase( row[ filter.id ] ), lowercase( filter.value ) );
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
				accessor: 'remove',
				Cell: this.renderCheckboxRemovable,
				filterable: false
			});
		}
		newState.rows = rows;
		newState.columns = columns;
		return newState;
	}

	createRows( data ) {
		const keys = Object.keys( data );
		const nRows = data[ keys[ 0 ] ].length;
		const rows = new Array( nRows );
		for ( let i = 0; i < nRows; i++ ) {
			rows[ i ] = {};
			for ( let j = 0; j < keys.length; j++ ) {
				let key = keys[ j ];
				rows[ i ][ key ] = data[ key ][ i ];
			}
		}
		return rows;
	}

	filterMethodCategories = ( filter, row, column ) => {
		if ( filter.value === 'all' ) {
			return true;
		}
		const id = filter.pivotId || filter.id;
		return row[ id ] ?
			String( row[ id ]) === filter.value :
			true;
	}

	filterMethodStrings = ( filter, row, column ) => {
		const id = filter.pivotId || filter.id;
		return row[ id ] ? String( row[ id ]).startsWith( filter.value ) : true;
	}

	filterMethodNumbers = ( filter, row ) => {
		const val = row[ filter.id ];
		return val >= filter.value.min && val <= filter.value.max;
	}

	renderCheckboxRemovable = ( cellInfo ) => {
		return (
			<input
				id="checkBox" type="checkbox"
				onClick={e => {
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
					onFilteredChange={this.handleFilterChange}
					style={this.props.style}
				/>
				<label><i>Number of rows: {selectedRows} (total: {this.state.rows.length})</i></label>
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

DataTable.defaultProps = {
	onClickRemove() {},
	showRemove: false,
	style: {}
};


// PROPERTY TYPES //

DataTable.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	]).isRequired,
	onClickRemove: PropTypes.func,
	showRemove: PropTypes.bool,
	style: PropTypes.object
};


// EXPORTS //

export default DataTable;

