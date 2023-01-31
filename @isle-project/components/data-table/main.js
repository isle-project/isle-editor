/*
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
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import ReactTable from 'react-table';
import unique from 'uniq';
import Alert from 'react-bootstrap/Alert';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tooltip from '@isle-project/components/tooltip';
import markdownit from 'markdown-it';
import isDigitString from '@stdlib/assert/is-digit-string';
import isTypedArray from '@stdlib/assert/is-typed-array';
import contains from '@stdlib/assert/contains';
import lowercase from '@stdlib/string/lowercase';
import floor from '@stdlib/math/base/special/floor';
import ceil from '@stdlib/math/base/special/ceil';
import isNumberArray from '@stdlib/assert/is-number-array';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isObject from '@stdlib/assert/is-object';
import isArray from '@stdlib/assert/is-array';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isNull from '@stdlib/assert/is-null';
import objectKeys from '@stdlib/utils/keys';
import min from '@isle-project/utils/statistic/min';
import max from '@isle-project/utils/statistic/max';
import saveAs from '@isle-project/utils/file-saver';
import SessionContext from '@isle-project/session/context.js';
import { SORT, FILTER, RESET } from '@isle-project/constants/actions.js';
import NINF from '@stdlib/constants/float64/ninf';
import SelectInput from '@isle-project/components/input/select';
import { components } from 'react-select';
import TutorialButton from './tutorial-button/index.js';
import ColumnTitle from './column_title.js';
import FilterInputRange from './input_range.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { withActionLogger } from '@isle-project/session/action_logger.js';
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
md.renderer.rules.link_open = function onLinkOpen( tokens, idx, options, env, renderer ) {
	// If you are sure other plugins can't add `target` - drop check below
	const token = tokens[ idx ];
	const aIndex = token.attrIndex( 'target' );
	if ( aIndex < 0 ) {
		token.attrPush( [ 'target', '_blank' ] ); // add new attribute...
	} else {
		token.attrs[ aIndex ][ 1 ] = '_blank'; // replace value of existing attribute...
	}
	// Pass token to default renderer:
	return renderer.renderToken( tokens, idx, options );
};
const debug = logger( 'isle:data-table' );
const collator = new Intl.Collator( 'en', { numeric: true, sensitivity: 'base' });
const RE_NUMBER = /[0-9.,]+/;


// FUNCTIONS //

function numericComparer( a, b ) {
	a = ( a === null || a === void 0 || a === 'NA' ) ? NINF : a;
	b = ( b === null || b === void 0 || b === 'NA' ) ? NINF : b;
	return a - b;
}

function generalComparer( a, b ) {
	a = ( a === null || a === void 0 || a === 'NA' ) ? NINF : a;
	b = ( b === null || b === void 0 || b === 'NA' ) ? NINF : b;
	return collator.compare( a, b );
}

function createDescriptions( descriptions, t ) {
	const keys = objectKeys( descriptions );
	const arr = new Array( keys.length );
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		arr[ i ] = <tr key={`${key}-${i}`} >
			<td>{`${key}`}</td>
			<td dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
				__html: md.renderInline( descriptions[ key ] )
			}} />
		</tr>;
	}
	return ( <table className="table-bordered table-condensed" style={{ width: '100%' }} >
		<thead>
			<tr><th>{t('name')}</th><th>{t('description')}</th></tr>
		</thead>
		<tbody>
			{arr}
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


/**
 * Returns the maximum length of any of the arrays in the given object.
 *
 * @private
 * @param {Object} obj - object to check
 * @param {Array} keys - array of keys to check
 * @returns {number} maximum length
 */
function maxLength( obj, keys ) {
	let v = 0;
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		const arr = obj[ key ];
		if ( isArray( arr ) && arr.length > v ) {
			v = arr.length;
		}
	}
	return v;
}

function createRows( data ) {
	if ( isEmptyObject( data ) ) {
		return [];
	}
	const keys = objectKeys( data );
	const nRows = maxLength( data, keys );
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
	const t = props.t;
	const columns = state.keys.filter( key => key !== 'id' ).map( ( key, idx ) => {
		let header = key;
		const hasDescription = props.dataInfo &&
			props.dataInfo.variables &&
			props.dataInfo.variables[ key ];
		const out = {
			id: key,
			accessor: ( d ) => isNull( d[ key ] ) ? 'NA' : String( d[ key ] ),
			minWidth: hasDescription ? 125 : 150
		};
		if ( hasDescription ) {
			header = <ColumnTitle title={key} tooltip={props.dataInfo.variables[ key ]} />;
		} else if ( props.deletable && !contains( props.undeletableVars, key ) ) {
			header = <div style={{ backgroundColor: 'papayawhip' }}>
					<Tooltip placement="left" tooltip={t('rename-variable')} >
					<span>
						<input type="text" className="header-text-input"
							style={{
								width: `${key.length+1}ch`
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
				</Tooltip>
				<Tooltip placement="left" tooltip={t('remove-variable')} >
					<button aria-label={t('remove-variable')} className="fa fa-times delete-button" onClick={( evt ) => {
						evt.stopPropagation();
						props.onColumnDelete( key );
					}} />
				</Tooltip>
			</div>;
		}
		out.Header = header;
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
			let isNumColumn = false;
			let uniqueValues;
			if ( isTypedArray( vals ) ) {
				isNumColumn = true;
				uniqueValues = vals;
			} else {
				vals = vals.filter( x => !isNull( x ) && x !== '' && x !== 'NA' );
				uniqueValues = unique( vals );
				const activeFilter = props.filters.filter( x => x.id === key )[ 0 ];
				if ( activeFilter && isNumber( activeFilter.value.min ) && isNumber( activeFilter.value.max ) ) {
					isNumColumn = true;
				} else {
					isNumColumn = isNumberArray( vals ) && uniqueValues.length > 2;
				}
			}
			if ( isNumColumn ) {
				out[ 'filterMethod' ] = filterMethodNumbers;
				out[ 'sortMethod' ] = numericComparer;
				out[ 'style' ] = {
					textAlign: 'right'
				};
				out[ 'Filter' ] = ({ filter, onChange }) => {
					const maxValue = ceil( max( uniqueValues ) );
					const minValue = floor( min( uniqueValues ) );
					const defaultVal = {
						max: maxValue,
						min: minValue
					};
					return ( <FilterInputRange
						ariaLabelledby={`header-${key}`}
						ariaControls={state.id}
						defaultValue={filter ? filter.value : defaultVal}
						onChange={onChange} maxValue={maxValue} minValue={minValue}
						t={t}
					/> );
				};
			} else if ( uniqueValues.length <= 50 ) {
				// Cast values to strings for select component to work and sort:
				uniqueValues = uniqueValues.map( x => String( x ) ).sort( generalComparer );
				if ( isDigitString( uniqueValues[ 0 ] ) ) {
					out[ 'style' ] = {
						textAlign: 'right'
					};
				}
				out[ 'filterMethod' ] = filterMethodCategories;
				out[ 'sortMethod' ] = generalComparer;
				out[ 'Filter' ] = ({ filter, onChange }) => {
					return (
						<SelectInput
							onChange={( vals ) => {
								if ( vals && vals.length > 0 && uniqueValues.length > 3 ) {
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
							placeholder={t('show-all')}
							components={{
								DropdownIndicator: CustomIndicator,
								MultiValueLabel: props => {
									const invertSelection = () => {
										onChange( uniqueValues.filter( x => x !== props.children ) );
									};
									return (
										<Tooltip tooltip={t('select-others')} placement="bottom" >
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
										</Tooltip>
									);
								}
							}}
							escapeClearsValue
							closeMenuOnSelect={uniqueValues.length <= 2}
							menuPortalTarget={document.body}
							styles={{
								menuPortal: base => ({ ...base, zIndex: 9999 })
							}}
						/>
					);
				};
			} else {
				out[ 'filterMethod' ] = filterMethodStrings;
				out[ 'sortMethod' ] = generalComparer;
			}
		}
		return out;
	});
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
* @property {Array<string>} undeletableVars - array of variable names of columns which may not be deleted
* @property {boolean} filterable - controls whether columns are filterable
* @property {boolean} showRemove - indicates whether to display checkboxes for rows to be removed
* @property {boolean} disableDownload - whether to hide the button to download the data as a CSV or JSON file
* @property {boolean} showIdColumn - controls whether to show an ID column
* @property {string} className - class name
* @property {Object} style - An object allowing for custom css styling. Defaults to an empty object
* @property {Function} getTrProps - callback function executed for each row to customize its styling (passed table state, row info,
column, and the table instance)
* @property {Array} filters - array of filters
* @property {Function} onColumnNameChange - function invoked when a column has been renamed (called with the old name as first and new name as second argument)
* @property {Function} onColumnDrag - function invoked when a column has been dragged to a different position
* @property {Function} onClickRemove - function specifying an action to take for rows removed from the data (defaults to an empty function)
* @property {Function} onColumnDelete - function invoked with the name of a column when the respective delete button for a column is clicked
* @property {Function} onFilteredChange - function invoked with the current filters after data has been filtered by user
* @property {Function} onEdit - function invoked with the updated data set after the value of a cell was changed by the user (only applies when table is `editable`)
* @property {Function} onTutorialCompletion - function invoked when user has completed the data table tutorial
*/
class DataTable extends Component {
	constructor( props ) {
		super( props );

		debug( 'Constructor is invoked...' );
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
			},
			showSaveModal: false,
			id: props.id // eslint-disable-line react/no-unused-state
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		debug( 'Generating derived state...' );
		let newState = null;
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
				newState = {};
				newState.rows = rows;
				newState.keys = keys;
				newState.filtered = nextProps.filters;
				newState.showTooltip = false;
				newState.data = nextProps.data;
				newState.columns = createColumns( nextProps, newState );
			}
		}
		if (
			nextProps.dataInfo && prevState.dataInfo &&
			nextProps.dataInfo.name !== prevState.dataInfo.name
		) {
			debug( 'Data information has changed...' );
			if ( !newState ) {
				newState = {};
			}
			newState.dataInfo = {
				info: nextProps.dataInfo.info || [],
				name: nextProps.dataInfo.name || '',
				variables: nextProps.dataInfo.variables || null,
				showOnStartup: nextProps.dataInfo.showOnStartup || null
			};
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
		if (
			this.props.filters &&
			(
				this.props.filters !== prevProps.filters ||
				this.props.filters.length !== prevProps.filters.length
			)
		) {
			debug( `Data table now has ${this.props.filters.length} filters...` );
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
			this.setState( newState );
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
	};

	renderCheckboxRemovable = ( cellInfo ) => {
		return (
			<input
				id="checkBox"
				type="checkbox"
				key={`${cellInfo.index}-${cellInfo.column.id}-${this.state.rows.length}`}
				onClick={e => {
					const rows = [ ...this.state.rows ];
					rows[ cellInfo.index ][ cellInfo.column.id ] = e.target.checked;
					this.setState({ rows });
					this.props.onClickRemove( rows );
				}}
			/>
		);
	};

	handleFilterChange = ( filtered, column ) => {
		const tbody = findDOMNode( this.table ).getElementsByClassName( 'rt-tbody' )[0];
		tbody.scrollTop = 0;
		this.props.logAction( FILTER, column.id );
		this.setState({
			filtered
		}, () => {
			this.props.onFilteredChange( this.state.filtered.filter( x => !isNull( x.value ) ) );
		});
	};

	handleSortedChange = ( sorted, column ) => {
		this.props.logAction( SORT, column.id );
		this.setState({
			sorted
		});
	};

	reset = () => {
		this.props.logAction( RESET );
		this.setState({
			filtered: [],
			sorted: []
		}, () => {
			this.props.onFilteredChange( this.state.filtered );
		});
	};

	toggleInfo = () => {
		this.setState({
			showInfo: !this.state.showInfo
		});
	};

	toggleSaveModal = () => {
		this.setState({
			showSaveModal: !this.state.showSaveModal
		});
	};

	saveJSON = () => {
		const blob = new Blob([ JSON.stringify( this.state.data ) ], {
			type: 'application/json'
		});
		const dataInfo = this.props.dataInfo;
		let name;
		if ( !dataInfo || !dataInfo.name ) {
			name = 'dataset.json';
		} else {
			name = dataInfo.name;
		}
		saveAs( blob, name );
	};

	saveCSV = () => {
		const session = this.context;
		import( 'csv-stringify' ).then( main => {
			const stringify = main.default;
			stringify( this.state.rows, {
				header: true
			}, ( err, output ) => {
				if ( err ) {
					return session.addNotification({
						title: this.props.t('error-encountered'),
						message: this.props.t('error-csv')+err.message,
						level: 'error',
						position: 'tl'
					});
				}
				const blob = new Blob([ output ], {
					type: 'text/csv;charset=utf-8;'
				});
				const dataInfo = this.props.dataInfo;
				let name;
				if ( !dataInfo || !dataInfo.name ) {
					name = 'dataset.csv';
				} else {
					name = `${dataInfo.name}.csv`; // eslint-disable-line i18next/no-literal-string
				}
				saveAs( blob, name );
			});
		});
	};

	handleSaveCSV = () => {
		this.saveCSV();
		this.toggleSaveModal();
	};

	handleSaveJSON = () => {
		this.saveJSON();
		this.toggleSaveModal();
	};

	handleTableProps = () => {
		return {
			onScroll: e => {
				let left = e.target.scrollLeft > 0 ? e.target.scrollLeft : 0;
				for ( let i = 0; i < this.frozenElems.length; i++ ) {
					this.frozenElems[ i ].style.left = `${left}px`; // eslint-disable-line i18next/no-literal-string
				}
			}
		};
	};

	handleTrProps = ( state, rowInfo, column, table ) => {
		let out;
		if ( this.props.getTrProps ) {
			out = this.props.getTrProps( state, rowInfo, column, table );
		} else {
			out = {};
		}
		if ( !out.style ) {
			out.style = {};
		}
		out.style.width = 'max-content !important';
		return out;
	};

	render() {
		debug( 'Rendering component' );
		let { rows, dataInfo } = this.state;
		if ( !rows ) {
			return <Alert variant="danger">{this.props.t('no-data')}</Alert>;
		}
		let modal = null;
		if ( this.state.showInfo ) {
			modal = <Modal
				dialogClassName="modal-90w"
				show={this.state.showInfo}
				onHide={this.toggleInfo}>
				<Modal.Header closeButton>
					<Modal.Title>
						{dataInfo && dataInfo.name} {this.props.t('description')}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col sm={7} dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
							__html: md.render( isArray( dataInfo.info ) ? dataInfo.info.join( '\n' ) : dataInfo.info )
						}} />
						<Col sm={5} >
							{createDescriptions( dataInfo.variables, this.props.t )}
						</Col>
					</Row>
				</Modal.Body>
			</Modal>;
		}
		let cols;
		if ( this.props.editable.length > 0 ) {
			cols = this.state.columns.map( x => {
				if ( contains( this.props.editable, x.id ) ) {
					x.Cell = this.renderEditable;
				}
				return x;
			});
		} else {
			cols = this.state.columns.slice();
		}

		// Run re-order events:
		this.reorder.forEach( o => {
			cols[ o.a ] = cols.splice( o.b, 1, cols[o.a] )[ 0 ];
		});
		cols = cols.map( ( col, i ) => {
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
						this.dragged = i;
					}}
					onDrag={e => e.stopPropagation}
					onDragEnd={e => {
						e.stopPropagation();
						setTimeout(() => {
							this.dragged = null;
						}, 100 );
					}}
					onDragOver={e => {
						e.preventDefault();
						e.dataTransfer.dropEffect = 'move';
					}}
					onDrop={e => {
						e.preventDefault();
						let a = i;
						let b = this.dragged;
						const keys = this.state.columns.map( x => x.id );
						keys.shift();
						const tmp = keys[ a ];
						keys[ a ] = keys[ b ];
						keys[ b ] = tmp;
						this.props.onColumnDrag( keys );
						this.reorder.push({ a, b });
						this.forceUpdate();
					}}
				>{col.Header}</span>
			});
		});
		if ( this.props.showIdColumn ) {
			cols.unshift({
				Header: 'id',
				accessor: 'id',
				className: 'frozen',
				headerClassName: 'frozen',
				filterable: false,
				resizable: false,
				width: 50
			});
		}
		if ( this.props.showRemove ) {
			cols.push({
				Header: this.props.t('remove'),
				accessor: 'remove',
				Cell: this.renderCheckboxRemovable,
				filterable: false
			});
		}
		cols.push({
			Header: '',
			className: 'table_last_col',
			filterable: false,
			sortable: false,
			resizable: false,
			width: 30
		});
		const saveButton = <Tooltip placement="bottom" tooltip={this.props.disableDownload ? this.props.t('download-disabled') : this.props.t('download-data')} >
			<Button aria-label={this.props.t('download-data')} className="save-button" variant="light" onClick={this.toggleSaveModal} disabled={this.props.disableDownload} >
				<i className="fas fa-download"></i>
			</Button>
		</Tooltip>;
		return (
			<Fragment>
				<div className="data-table-wrapper" id={this.props.id} style={this.props.style} >
					<div className='data-table-header-wrapper' >
						<div className="data-table-title" >
							{dataInfo.name ? dataInfo.name : this.props.t('data')}
						</div>
						{saveButton}
						<TutorialButton
							id={this.props.id}
							session={this.context}
							onTutorialCompletion={this.props.onTutorialCompletion}
							t={this.props.t}
						/>
					</div>
					<ReactTable
						id={this.props.id}
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
						getTableProps={this.handleTableProps}
						getTrProps={this.handleTrProps}
						previousText={this.props.t('previous')}
						nextText={this.props.t('next')}
						loadingText={this.props.t('loading')}
						noDataText={this.props.t('no-rows-found')}
						pageText={this.props.t('page')}
						ofText={this.props.t('of')}
						rowsText={this.props.t('rows')}
					>
						{( state, makeTable, instance ) => {
							const selectedRows = state.sortedData.length;
							return (
								<div ref={( table ) => {
									if ( table ) {
										this.table = table;
										this.frozenElems = findDOMNode( this.table ).getElementsByClassName( 'frozen' );
									}
								}} >
									<ButtonToolbar className="data-table-header-toolbar" >
										{ dataInfo.variables ? <Tooltip placement="right" tooltip={this.props.t('description-tooltip')} ><Button
											onClick={this.toggleInfo}
											variant="light"
											size="xsmall"
											className="description-button"
										>
											{this.props.t('description')}
										</Button></Tooltip> : null }
										{( selectedRows !== rows.length ) || ( this.state.sorted && this.state.sorted.length > 0 ) ?
											<Tooltip placement="left" tooltip={this.props.t('reset-display-tooltip')} >
												<Button
													onClick={this.reset}
													variant="light"
													size="xsmall"
													className="reset-button"
												>
													{this.props.t('reset-display')}
												</Button>
											</Tooltip> : null }
										<div className="num-rows-badge" >
											{this.props.t('rows')}: {selectedRows} ({this.props.t('total')}: {rows.length})
										</div>
									</ButtonToolbar>
									{ this.props.headerButtons ? <ButtonToolbar className="data-table-header-toolbar" >
										{this.props.headerButtons}
									</ButtonToolbar> : null }
									{makeTable()}
								</div>
							);
						}}
					</ReactTable>
				</div>
				{modal}
				{this.state.showSaveModal ?
					<Modal
						show={this.state.showSaveModal}
						onHide={this.toggleSaveModal}
					>
						<Modal.Header closeButton>
							<Modal.Title>
								{this.props.t('download-data')}
							</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							{this.props.t('download-data-body')}
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={this.handleSaveCSV} >
								{this.props.t('save-csv')}
							</Button>
							<Button onClick={this.handleSaveJSON} >
								{this.props.t('save-json')}
							</Button>
						</Modal.Footer>
					</Modal> : null }
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
	undeletableVars: [],
	filterable: true,
	editable: [],
	getTrProps: void 0,
	onColumnDrag() {},
	onColumnDelete() {},
	onColumnNameChange() {},
	onClickRemove() {},
	onEdit() {},
	onFilteredChange() {},
	onTutorialCompletion() {},
	filters: [],
	showRemove: false,
	showIdColumn: true,
	disableDownload: false,
	className: '',
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
	undeletableVars: PropTypes.arrayOf( PropTypes.string ),
	filterable: PropTypes.bool,
	editable: PropTypes.array,
	getTrProps: PropTypes.func,
	onColumnDrag: PropTypes.func,
	onColumnDelete: PropTypes.func,
	onColumnNameChange: PropTypes.func,
	onClickRemove: PropTypes.func,
	onEdit: PropTypes.func,
	onTutorialCompletion: PropTypes.func,
	filters: PropTypes.array,
	onFilteredChange: PropTypes.func,
	showRemove: PropTypes.bool,
	showIdColumn: PropTypes.bool,
	disableDownload: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object
};

DataTable.contextType = SessionContext;


// EXPORTS //

export default withActionLogger( 'TABLE' )( withTranslation( 'data-table' )( withPropCheck( DataTable ) ) );

