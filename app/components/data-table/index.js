/**
* Dragging behavior adapted from code by:
*
* Copyright (c) 2019 by Matt Lockyer (https://codepen.io/mattlockyer/pen/LydeLj)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


// MODULES //

import React, { Component, Fragment } from 'react';
import { findDOMNode } from 'react-dom';
import logger from 'debug';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import unique from 'uniq';
import Alert from 'react-bootstrap/Alert';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'components/overlay-trigger';
import markdownit from 'markdown-it';
import hasOwnProp from '@stdlib/assert/has-own-property';
import contains from '@stdlib/assert/contains';
import lowercase from '@stdlib/string/lowercase';
import floor from '@stdlib/math/base/special/floor';
import ceil from '@stdlib/math/base/special/ceil';
import isNumberArray from '@stdlib/assert/is-number-array';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isObject from '@stdlib/assert/is-object';
import isArray from '@stdlib/assert/is-array';
import isNull from '@stdlib/assert/is-null';
import objectKeys from '@stdlib/utils/keys';
import min from 'utils/statistic/min';
import max from 'utils/statistic/max';
import generateUID from 'utils/uid';
import SessionContext from 'session/context.js';
import { TABLE_SORT, TABLE_FILTER, TABLE_RESET } from 'constants/actions.js';
import SelectInput from 'components/input/select';
import { components } from 'react-select';
import TutorialButton from './tutorial-button/index.js';
import ColumnTitle from './column_title.js';
import FilterInputRange from './input_range.js';
import 'react-table/react-table.css';
import './input_range.css';
import './react_table_height.css';
import './data_table.css';


// VARIABLES //

const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
const debug = logger( 'isle:data-table' );
const uid = generateUID( 'data-table' );
const RE_NUMBER = /[0-9.,]+/;
const LOCALE_COMPARE_OPTS = {
	numeric: true
};


// FUNCTIONS //

function comparer( a, b ) {
	return a.localeCompare( b, void 0, LOCALE_COMPARE_OPTS );
}

function createDescriptions( descriptions ) {
	const strTable = [];
	for ( let varName in descriptions ) {
		if ( hasOwnProp( descriptions, varName ) ) {
			strTable.push( <tr key={varName} >
				<td>{varName}</td><td>{descriptions[varName]}</td>
			</tr>);
		}
	}
	return ( <table className="table-bordered table-condensed" style={{ width: '100%' }} >
		<thead>
			<tr><th>Name</th><th>Description</th></tr>
		</thead>
		<tbody>
		{strTable}
		</tbody>
	</table> );
}

function filterMethodStrings( filter, row ) {
	const rowValue = row[ filter.id ];
	if ( !rowValue && filter.value ) {
		return false;
	}
	if ( isArray( filter.value ) ) {
		return contains( filter.value, rowValue );
	}
	// Check whether string contains search phrase:
	return contains( lowercase( rowValue ), lowercase( filter.value ) );
}

function filterMethodNumbers( filter, row ) {
	const val = row[ filter.id ];
	return val >= filter.value.min && val <= filter.value.max;
}

function filterMethodCategories( filter, row, column ) {
	if ( !filter.value || isEmptyArray( filter.value ) ) {
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

function createRows( data ) {
	if ( isEmptyObject( data ) ) {
		return [];
	}
	const keys = objectKeys( data );
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

const CustomIndicator = () => {
	return <div />;
};

function adjustWidth( event ) {
	event.target.style.width = (event.target.value.length+1) + 'ch';
}

function createColumns( props, state ) {
	debug( 'Create columns...' );
	const columns = state.keys.filter( key => key !== 'id' ).map( ( key, idx ) => {
		let header = key;
		const isOriginal = props.dataInfo &&
			props.dataInfo.variables &&
			props.dataInfo.variables[ key ];
		const out = {
			id: key,
			accessor: ( d ) => d[ key ],
			minWidth: isOriginal ? 125 : 150
		};
		if ( isOriginal ) {
			header = <ColumnTitle title={key} tooltip={props.dataInfo.variables[ key ]} />;
		} else if ( props.deletable ) {
			header = <div style={{ backgroundColor: 'papayawhip' }}>
					<OverlayTrigger placement="left" overlay={<Tooltip>Rename variable</Tooltip>} >

					<span>
						<input type="text" className="header-text-input"
							style={{
								width: `${key.length}ch`
							}}
							defaultValue={key}
							onBlur={( e ) => {
								const newKey = e.target.value;
								document.getElementById( `header-${key}`).setAttribute( 'draggable', true );
								if ( newKey.length > 0 && key !== newKey ) {
									props.onColumnNameChange( key, newKey );
								}
							}}
							onMouseEnter={( e ) => {
								// Update draggable attribute to handle Firefox bug (https://stackoverflow.com/questions/21680363/prevent-drag-event-to-interfere-with-input-elements-in-firefox-using-html5-drag)
								document.getElementById( `header-${key}`).setAttribute( 'draggable', false );
							}}
							onChange={adjustWidth}
							onClick={( e ) => {
								e.stopPropagation();
							}}
						/>
					</span>
				</OverlayTrigger>
				<OverlayTrigger placement="left" overlay={<Tooltip>Remove variable</Tooltip>} >
					<button className="fa fa-times delete-button" onClick={( evt ) => {
						evt.stopPropagation();
						props.onColumnDelete( key );
					}} />
				</OverlayTrigger>
			</div>;
		}
		out.Header = header;
		if ( contains( props.editable, key ) ) {
			out.Cell = this.renderEditable;
		}
		let vals;
		if ( !isArray( props.data ) ) {
			vals = props.data[ key ].slice();
		} else {
			vals = new Array( state.rows.length );
			for ( let i = 0; i < state.rows.length; i++ ) {
				vals[ i ] = props.data[ i ][ key ];
			}
		}
		if ( props.filterable ) {
			vals = vals.filter( x => !isNull( x ) && x !== '' );
			let uniqueValues = unique( vals );
			if ( isNumberArray( vals ) && uniqueValues.length > 2 ) {
				out[ 'filterMethod' ] = filterMethodNumbers;
				out[ 'Filter' ] = ({ filter, onChange }) => {
					const maxValue = ceil( max( uniqueValues ) );
					const minValue = floor( min( uniqueValues ) );
					const defaultVal = {
						max: maxValue,
						min: minValue
					};
					return ( <FilterInputRange
						defaultValue={filter ? filter.value : defaultVal}
						onChange={onChange} maxValue={maxValue} minValue={minValue}
					/> );
				};
			} else if ( uniqueValues.length <= 50 ) {
				// Cast values to strings for select component to work and sort:
				uniqueValues = uniqueValues.map( x => String( x ) ).sort( comparer );
				out[ 'filterMethod' ] = filterMethodCategories;
				out[ 'Filter' ] = ({ filter, onChange }) => {
					return (
						<SelectInput
							onChange={( vals ) => {
								if ( vals && vals.length > 0 ) {
									out.minWidth = 300;
								} else {
									out.minWidth = 125;
								}
								onChange( vals );
							}}
							style={{ width: '100%' }}
							value={filter ? filter.value : null}
							searchable={false}
							options={uniqueValues}
							menuPlacement="auto"
							multi
							placeholder="Show all"
							components={{
								DropdownIndicator: CustomIndicator,
								MultiValueLabel: props => {
									const invertSelection = () => {
										onChange( uniqueValues.filter( x => x !== props.children ) );
									};
									return (
										<OverlayTrigger
											overlay={<Tooltip id="invert_selection">Select all others</Tooltip>}
											placement="bottom"
										>
											<span
												role="button" tabIndex={0}
												onClick={invertSelection}
												onKeyPress={invertSelection}
												onMouseDown={( event ) => {
													// See: https://github.com/JedWatson/react-select/issues/3117
													event.preventDefault();
													event.stopPropagation();
												}}
												style={{ cursor: 'cursor' }}
											>
												<components.MultiValueLabel {...props} />
											</span>
										</OverlayTrigger>
									);
								}
							}}
							escapeClearsValue
							menuPortalTarget={document.body}
							styles={{
								menuPortal: base => ({ ...base, zIndex: 9999 })
							}}
						/>
					);
				};
			} else {
				out[ 'filterMethod' ] = filterMethodStrings;
			}
		}
		return out;
	});
	if ( props.showIdColumn ) {
		columns.unshift({
			Header: 'id',
			accessor: 'id',
			filterable: false
		});
	}
	if ( props.showRemove ) {
		columns.push({
			Header: 'Remove',
			accessor: 'remove',
			Cell: this.renderCheckboxRemovable,
			filterable: false
		});
	}
	return columns;
}


// MAIN //

/**
* A component rendering data in a tabular display. Built on top of [react-table](https://react-table.js.org/).
*
* @property {(Object|Array)} data - A data object or array to be viewed. If it is an object, the keys correspond to column values while an array will expect an array of objects with a named field corresponding to each column
* @property {Object} dataInfo - object with `info` string array describing the data set, the `name` of the dataset, an `object` of `variables` with keys corresponding to variable names and values to variable descriptions, an a `showOnStartup` boolean controlling whether to display the info modal on startup
* @property {Array} editable - array of names for columns that shall be editable
* @property {boolean} deletable - controls whether columns for which no `info` exist have a button which when clicked calls the `onColumnDelete` callback function
* @property {boolean} filterable - controls whether columns are filterable
* @property {boolean} showRemove - indicates whether to display checkboxes for rows to be removed
* @property {boolean} showIdColumn - controls whether to show an ID column
* @property {Object} style - An object allowing for custom css styling. Defaults to an empty object
* @property {Function} onClickRemove - A function specifying an action to take for rows removed from the data (defaults to an empty function)
* @property {Function} onColumnDelete - function invoked with the name of a column when the respective delete button for a column is clicked
* @property {Function} onEdit - function invoked with the updated data set after the value of a cell was changed by the user (only applies when table is `editable`)
*/
class DataTable extends Component {
	constructor( props ) {
		super( props );

		debug( 'Constructor is invoked...' );
		this.id = props.id || uid( props );
		const dataInfo = props.dataInfo || {};

		this.dragged = null;
		this.reorder = [];
		this.state = {
			showInfo: !!dataInfo.showOnStartup,
			dataInfo: {
				info: dataInfo.info || [],
				name: dataInfo.name || '',
				variables: dataInfo.variables || null,
				showOnStartup: dataInfo.showOnStartup || null
			}
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		debug( 'Generating derived state...' );
		const newState = {};
		if ( nextProps.data !== prevState.data ) {
			debug( 'Data is new...' );
			let rows;
			let keys;
			let isArr = isArray( nextProps.data );
			if ( isArr || isObject( nextProps.data ) ) {
				if ( isArr ) {
					// Case: `data` is already an array of observations
					rows = nextProps.data.slice();
					keys = objectKeys( rows[ 0 ] );
				} else {
					// Case: `data` is an object with keys for the various variables
					rows = createRows( nextProps.data );
					keys = objectKeys( nextProps.data );
				}
				debug( 'Created a `rows` array of length: '+rows.length );
				if ( contains( keys, 'id' ) ) {
					// Do not attach `id` column:
					for ( let i = 0; i < rows.length; i++ ) {
						if ( nextProps.showRemove && !rows[ i ][ 'remove' ]) {
							rows[ i ][ 'remove' ] = false;
						}
					}
				} else {
					// Attach `id` column:
					for ( let i = 0; i < rows.length; i++ ) {
						if ( nextProps.showRemove && !rows[ i ][ 'remove' ]) {
							rows[ i ][ 'remove' ] = false;
						}
						rows[ i ][ 'id' ] = i + 1;
					}
					keys.push( 'id' );
				}
				newState.rows = rows;
				newState.keys = keys;
				newState.filtered = nextProps.filters;
				newState.showTooltip = false;
				newState.selectedRows = rows.length;
				newState.data = nextProps.data;
				newState.columns = createColumns( nextProps, newState );
			}
		}
		if ( nextProps.dataInfo !== prevState.dataInfo ) {
			debug( 'Data information has changed...' );
			if ( nextProps.dataInfo ) {
				newState.dataInfo = {
					info: nextProps.dataInfo.info || [],
					name: nextProps.dataInfo.name || '',
					variables: nextProps.dataInfo.variables || null,
					showOnStartup: nextProps.dataInfo.showOnStartup || null
				};
			}
		}
		if ( isEmptyObject( newState ) ) {
			return null;
		}
		return newState;
	}

	componentDidMount() {
		debug( 'Component has mounted...' );
		if ( this.table ) {
			const thead = findDOMNode( this.table ).getElementsByClassName( 'rt-thead' )[ 0 ];
			const theadControls = findDOMNode( this.table ).getElementsByClassName( 'rt-thead' )[ 1 ];
			const tbody = findDOMNode( this.table ).getElementsByClassName( 'rt-tbody' )[0];

			tbody.addEventListener( 'scroll', () => {
				thead.scrollLeft = tbody.scrollLeft;
				theadControls.scrollLeft = tbody.scrollLeft;
			});
		}
	}

	componentDidUpdate( prevProps, prevState ) {
		debug( 'Component has updated...' );
		let newState = {};
		if ( this.props.filters && this.props.filters !== prevProps.filters ) {
			newState.filtered = this.props.filters;
		}
		if (
			this.props.data !== prevProps.data &&
			this.state.keys.length !== prevState.keys.length
		) {
			const thead = findDOMNode( this.table ).getElementsByClassName( 'rt-thead' )[ 0 ];
			const theadControls = findDOMNode( this.table ).getElementsByClassName( 'rt-thead' )[ 1 ];
			const tbody = findDOMNode( this.table ).getElementsByClassName( 'rt-tbody' )[0];
			thead.scrollLeft = thead.scrollWidth;
			theadControls.scrollLeft = theadControls.scrollWidth;
			tbody.scrollLeft = tbody.scrollWidth;
		}
		if ( !isEmptyObject( newState ) ) {
			debug( 'Trigger a state change after update...' );
			this.setState( newState, () => {
				this.setState({
					selectedRows: this.table.getResolvedState().sortedData.length
				});
			});
		}
	}

	renderEditable = ( cellInfo ) => {
		return (
			<div
				style={{ backgroundColor: '#fafafa' }}
				contentEditable
				suppressContentEditableWarning
				onBlur={e => {
					const rows = [...this.state.rows ];
					const val = e.target.innerHTML;
					rows[ cellInfo.index ][ cellInfo.column.id ] = RE_NUMBER.test( val ) ? Number( val ) : val;
					this.setState({ rows }, () => {
						this.props.onEdit( rows );
					});
				}}
				/* eslint-disable-next-line react/no-danger */
				dangerouslySetInnerHTML={{
					__html: this.state.rows[ cellInfo.index ][ cellInfo.column.id ]
				}}
			/>
		);
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

	handleFilterChange = ( filtered, column ) => {
		const selectedRows = this.table.getResolvedState().sortedData.length;
		const session = this.context;
		session.log({
			id: this.id,
			type: TABLE_FILTER,
			value: column.id
		});
		this.setState({
			selectedRows,
			filtered
		}, () => {
			this.props.onFilteredChange( this.state.filtered );
		});
	}

	handleSortedChange = ( sorted, column ) => {
		const selectedRows = this.table.getResolvedState().sortedData.length;
		const session = this.context;
		session.log({
			id: this.id,
			type: TABLE_SORT,
			value: column.id
		});
		this.setState({
			selectedRows,
			sorted
		});
	}

	showDescriptions = () => {
		this.setState({
			showVarModal: true
		});
	}

	reset = () => {
		const session = this.context;
		session.log({
			id: this.id,
			type: TABLE_RESET,
			value: ''
		});
		this.setState({
			filtered: [],
			sorted: []
		}, () => {
			this.props.onFilteredChange( this.state.filtered );
			this.setState({
				selectedRows: this.table.getResolvedState().sortedData.length
			});
		});
	}

	showInfo = () => {
		debug( 'Show dataset information...' );
		this.setState({
			showInfo: true
		});
	}

	render() {
		debug( 'Rendering component' );
		let { selectedRows, rows, dataInfo } = this.state;
		if ( !rows ) {
			return <Alert variant="danger">No data provided.</Alert>;
		}
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
					{createDescriptions( dataInfo.variables )}
				</Modal.Body>
			</Modal>;
		} else if ( this.state.showInfo ) {
			debug( 'Rendering dataset information modal...' );
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
						{dataInfo.name} Description
					</Modal.Title>
				</Modal.Header>
				<Modal.Body dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
					__html: md.render( dataInfo.info.join( '\n' ) )
				}}>
				</Modal.Body>
			</Modal>;
		}

		const cols = this.state.columns.map( ( col, i ) => {
			if ( col.Header === 'id' ) {
				return col;
			}
			return ({
				...col,
				Header: <span
					className="draggable-header" id={`header-${col.id}`}
					draggable="true"
					onDragStart={e => {
						e.stopPropagation();
						e.dataTransfer.setData( 'Text', i );
						this.dragged = this.props.showIdColumn ? i-1 : i;
					}}
					onDrag={e => e.stopPropagation}
					onDragEnd={e => {
						e.stopPropagation();
						setTimeout(() => {
							this.dragged = null;
						}, 1000 );
					}}
					onDragOver={e => {
						e.preventDefault();
						e.dataTransfer.dropEffect = 'move';
					}}
					onDrop={e => {
						e.preventDefault();
						let a = this.props.showIdColumn ? i-1 : i;
						let b = this.dragged;
						const keys = this.state.columns.map( x => x.id );
						keys.shift();
						const tmp = keys[ a ];
						keys[ a ] = keys[ b ];
						keys[ b ] = tmp;
						if ( this.props.showIdColumn ) {
							a += 1;
							b += 1;
						}
						this.props.onColumnDrag( keys );
						this.reorder.push({ a, b });
						this.forceUpdate();
					}}
				>{col.Header}</span>
			});
		});

		// Run re-order events:
		this.reorder.forEach( o => {
			cols[ o.a ] = cols.splice( o.b, 1, cols[o.a] )[ 0 ];
		});
		return (
			<Fragment>
				<div className="data-table-wrapper" style={this.props.style} >
					{ dataInfo.info.length > 0 ?
					<div className='data_button_wrapper'>
						<OverlayTrigger placement="bottom" overlay={<Tooltip>Open dataset description</Tooltip>} >
							<Button
								variant="light"
								onClick={this.showInfo}
								className='title-button'
							>
								<h4 className='title-button-h4'>
									{dataInfo.name ? dataInfo.name : 'Data'}
								</h4>
							</Button>
						</OverlayTrigger>
						<TutorialButton />
					</div> : null}
					{ dataInfo.info.length === 0 ?
						<h4 className="title-nobutton-h4">
							{dataInfo.name ? dataInfo.name : 'Data'}
						</h4>: null
					}
					<ButtonToolbar className="data-table-header-toolbar">
						{ dataInfo.variables ? <OverlayTrigger placement="right" overlay={<Tooltip>Open variable descriptions</Tooltip>} ><Button
							onClick={this.showDescriptions}
							variant="light"
							size="xsmall"
							className="variable-descriptions-button"
						>
							Variable Descriptions
						</Button></OverlayTrigger> : null }
						{ ( selectedRows !== rows.length ) || ( this.state.sorted && this.state.sorted.length > 0 ) ? <OverlayTrigger placement="left" overlay={<Tooltip>Reset filters and sorting</Tooltip>} >
							<Button
								onClick={this.reset}
								variant="light"
								size="xsmall"
								className="reset-button"
							>
								Reset Table Display
							</Button>
						</OverlayTrigger> : null }
					</ButtonToolbar>
					<ReactTable
						id={this.id}
						ref={( table ) => { this.table = table; }}
						data={rows}
						columns={cols}
						showPagination={true}
						sortable={true}
						resizable={true}
						filterable={this.props.filterable}
						filtered={this.state.filtered}
						sorted={this.state.sorted}
						showPageSizeOptions={false}
						defaultPageSize={50}
						onFilteredChange={this.handleFilterChange}
						onSortedChange={this.handleSortedChange}
						style={this.props.style}
					/>
					<label className="label-number-rows"><i>Number of rows: {selectedRows} (total: {rows.length})</i></label>
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
		'showOnStartup': false
	},
	deletable: false,
	filterable: true,
	editable: [],
	onColumnDrag() {},
	onColumnDelete() {},
	onColumnNameChange() {},
	onClickRemove() {},
	onEdit() {},
	onFilteredChange() {},
	filters: [],
	showRemove: false,
	showIdColumn: true,
	style: {}
};

/* eslint-disable react/no-unused-prop-types */
DataTable.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	]).isRequired,
	dataInfo: PropTypes.object,
	deletable: PropTypes.bool,
	filterable: PropTypes.bool,
	editable: PropTypes.array,
	onColumnDrag: PropTypes.func,
	onColumnDelete: PropTypes.func,
	onColumnNameChange: PropTypes.func,
	onClickRemove: PropTypes.func,
	onEdit: PropTypes.func,
	filters: PropTypes.array,
	onFilteredChange: PropTypes.func,
	showRemove: PropTypes.bool,
	showIdColumn: PropTypes.bool,
	style: PropTypes.object
};

DataTable.contextType = SessionContext;


// EXPORTS //

export default DataTable;

