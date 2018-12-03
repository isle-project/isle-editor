// MODULES //

import React, { Component, Fragment } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import InputRange from 'react-input-range';
import unique from 'uniq';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import markdownIt from 'markdown-it';
import hasOwnProp from '@stdlib/assert/has-own-property';
import contains from '@stdlib/assert/contains';
import lowercase from '@stdlib/string/lowercase';
import floor from '@stdlib/math/base/special/floor';
import ceil from '@stdlib/math/base/special/ceil';
import round from '@stdlib/math/base/special/round';
import min from 'utils/statistic/min';
import max from 'utils/statistic/max';
import isNumberArray from '@stdlib/assert/is-number-array';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isObject from '@stdlib/assert/is-object';
import isArray from '@stdlib/assert/is-array';
import OverlayTrigger from 'components/overlay-trigger';
import 'react-table/react-table.css';
import './input_range.css';
import './react_table_height.css';
import './data_table.css';


// VARIABLES //

const md = markdownIt({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});


// MAIN //

/**
* A component rendering data in a tabular display. Built on top of [react-table](https://react-table.js.org/).
*
* @property {(Object|Array)} data - A data object or array to be viewed. If it is an object, the keys correspond to column values while an array will expect an array of objects with a named field corresponding to each column
* @property {Object} dataInfo - object with `info` string array describing the data set, the `name` of the dataset, an `object` of `variables` with keys corresponding to variable names and values to variable descriptions, an a `showOnStartup` boolean controlling whether to display the info modal on startup
* @property {boolean} showRemove - indicates whether to display checkboxes for rows to be removed
* @property {Object} style - An object allowing for custom css styling. Defaults to an empty object
* @property {Function} onClickRemove - A function specifying an action to take for rows removed from the data (defaults to an empty function)
*/
class DataTable extends Component {
	constructor( props ) {
		super( props );

		props.dataInfo.info = props.dataInfo.info || [];
		props.dataInfo.name = props.dataInfo.name || '';
		props.dataInfo.variables = props.dataInfo.variables || null;
		props.dataInfo.showOnStartup = props.dataInfo.showOnStartup || null;

		this.state = this.generateInitialState( props );
	}

	componentDidMount() {
		const thead = findDOMNode( this.table ).getElementsByClassName( 'rt-thead' )[ 0 ];
		const theadControls = findDOMNode( this.table ).getElementsByClassName( 'rt-thead' )[ 1 ];
		const tbody = findDOMNode( this.table ).getElementsByClassName( 'rt-tbody' )[0];

		tbody.addEventListener( 'scroll', () => {
			thead.scrollLeft = tbody.scrollLeft;
			theadControls.scrollLeft = tbody.scrollLeft;
		});
	}

	componentDidUpdate( prevProps ) {
		let newState = {};
		if ( this.props.data !== prevProps.data ) {
			newState = this.generateInitialState( this.props );
		}
		if ( this.props.filters && this.props.filters !== prevProps.filters ) {
			newState.filtered = this.props.filters;
		}
		if ( !isEmptyObject( newState ) ) {
			this.setState( newState, () => {
				this.setState({
					selectedRows: this.table.getResolvedState().sortedData.length
				});
			});
		}
	}

	generateInitialState( props ) {
		let rows;
		let keys;
		let isArr = isArray( props.data );
		if ( !isArr && !isObject( props.data ) ) {
			return {};
		}
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
			let header = key;
			if ( this.props.dataInfo.variables && this.props.dataInfo.variables[ key ]) {
				const tooltip = <Tooltip id={key}>
					{this.props.dataInfo.variables[ key ]}
				</Tooltip>;
				header = <OverlayTrigger placement="top" overlay={tooltip}>
					<span>{key}</span>
				</OverlayTrigger>;
			}
			const out = {
				Header: header,
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
								value={filter ? filter.value : defaultVal}
								onChange={( newValue ) => {
									onChange( newValue );
								}}
								formatLabel={( val ) => {
									return round( val );
								}}
							/>
						</div>
					);
				};
			} else if ( uniqueValues.length <= 8 ) {
				out[ 'filterMethod' ] = this.filterMethodCategories;
				out[ 'Filter' ] = ({ filter, onChange }) => {
					let value;
					if ( !filter ) {
						value = 'all';
					} else if ( isArray( filter.value ) ) {
						value = filter.value.join( ', ' );
					} else {
						value = filter.value;
					}
					return (
						<select
							onChange={( event ) => {
								const newValue = event.target.value;
								onChange( newValue );
							}}
							style={{ width: '100%', backgroundColor: 'ghostwhite' }}
							value={value}
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
					if ( isArray( filter.value ) ) {
						return contains( filter.value, row[ filter.id ] );
					}
					// Check whether string contains search phrase:
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
		newState.showInfo = props.dataInfo.showOnStartup;
		newState.rows = rows;
		newState.columns = columns;
		newState.filtered = props.filters;
		return newState;
	}

	createRows( data ) {
		if ( isEmptyObject( data ) ) {
			return [];
		}
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
		if ( row[ id ] === void 0 ) {
			return true;
		}
		if ( isArray( filter.value ) ) {
			return contains( filter.value, String( row[ id ] ) );
		}
		return String( row[ id ] ) === filter.value;
	}

	filterMethodStrings = ( filter, row, column ) => {
		const id = filter.pivotId || filter.id;
		if ( row[ id ] === void 0 ) {
			return true;
		}
		return String( row[ id ] ).startsWith( filter.value );
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

	handleFilterChange = ( filtered ) => {
		const selectedRows = this.table.getResolvedState().sortedData.length;
		this.setState({
			selectedRows,
			filtered
		});
	}

	showDescriptions = () => {
		this.setState({
			showVarModal: true
		});
	}

	resetFilters = () => {
		this.setState({
			filtered: []
		}, () => {
			this.setState({
				selectedRows: this.table.getResolvedState().sortedData.length
			});
		});
	}

	createDescriptions = ( descriptions ) => {
		var strTable;
		var varName;
		var finalStr;

		strTable = [];
		for ( varName in descriptions ) {
			if ( hasOwnProp( descriptions, varName ) ) {
				strTable.push( <tr key={varName} >
					<td>{varName}</td><td>{descriptions[varName]}</td>
				</tr>);
			}
		}
		finalStr = <table className="table-bordered table-condensed" >
			<thead>
				<tr><th>Name</th><th>Description</th></tr>
			</thead>
			<tbody>
			{strTable}
			</tbody>
		</table>;
		return finalStr;
	}

	showInfo = () => {
		this.setState({ showInfo: true });
	}

	render() {
		const { selectedRows, rows } = this.state;
		let modal = null;
		if ( this.state.showVarModal ) {
			modal = <Modal
				dialogClassName="modal-50w"
				show={this.state.showVarModal}
				onHide={()=>{
					this.setState({ showVarModal: false });
				}}>
				<Modal.Header closeButton>
					<Modal.Title>
						Variables
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.createDescriptions(this.props.dataInfo.variables)}
				</Modal.Body>
			</Modal>;
		} else if ( this.state.showInfo ) {
			modal = <Modal
				show={this.state.showInfo}
				dialogClassName="modal-50w"
				onHide={()=>{
					this.setState({
						showInfo: false
					});
				}}>
				<Modal.Header closeButton>
					<Modal.Title>
						{this.props.dataInfo.name} Description
					</Modal.Title>
				</Modal.Header>
				<Modal.Body dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
					__html: md.render( this.props.dataInfo.info.join( '\n' ) )
				}}>
				</Modal.Body>
			</Modal>;
		}
		return (
			<Fragment>
				<div style={{
					fontSize: '12px',
					...this.props.style,
					marginBottom: '17px'
				}}>
					{ this.props.dataInfo.info.length > 0 ?
					<div className='data_button_wrapper'>
						<Button
							variant="light"
							onClick={this.showInfo}
							block
							className='title-button'>
								<h4 className='title-button-h4'
									onClick={this.showInfo}>
									{this.props.dataInfo.name} Data
								</h4>
							</Button>
						</div> : null}
					{ this.props.dataInfo.info.length === 0 ?
						<h4 className="title-nobutton-h4">
							{this.props.dataInfo.name} Data
						</h4>: null
					}
					<ReactTable
						ref={( table ) => { this.table = table; }}
						data={rows}
						columns={this.state.columns}
						showPagination={true}
						sortable={true}
						resizable={true}
						filterable={true}
						filtered={this.state.filtered}
						showPageSizeOptions={false}
						defaultPageSize={50}
						onFilteredChange={this.handleFilterChange}
						style={this.props.style}
					/>
					<label><i>Number of rows: {selectedRows} (total: {this.state.rows.length})</i></label>
					<Button
						onClick={this.resetFilters}
						variant="primary"
						size="xsmall"
						className="data-table-footer-button"
					>
						Reset Filters
					</Button>
					{ this.props.dataInfo.variables ? <Button
						onClick={this.showDescriptions}
						variant="primary"
						size="xsmall"
						className="data-table-footer-button"
					>
						Variable Descriptions
					</Button> : null }
				</div>
				{modal}
			</Fragment>
		);
	}
}


// PROPERTIES //

DataTable.defaultProps = {
	dataInfo: {
		'info': [],
		'name': '',
		'variables': null,
		'showInfo': false
	},
	onClickRemove() {},
	filters: [],
	showRemove: false,
	style: {}
};

DataTable.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	]).isRequired,
	dataInfo: PropTypes.object,
	onClickRemove: PropTypes.func,
	filters: PropTypes.array,
	showRemove: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
	style: PropTypes.object
};


// EXPORTS //

export default DataTable;

