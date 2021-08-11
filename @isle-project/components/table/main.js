/*
* Sorting functionality adapted from MIT-licensed code:
*
* Copyright (C) 2013 Adam Schwartz, http://adamschwartz.co
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

// MODULES //

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactBootstrapTable from 'react-bootstrap/Table';
import IS_TOUCH_DEVICE from '@stdlib/assert/is-touch-device';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './sortable.css';


// VARIABLES //

const NUM_RE = /^-?[£$¤]?[\d,.]+%?$/;
const TRIM_RE = /^\s+|\s+$/g;
const CLICK_EVENTS = [ 'click', 'keypress' ];
if ( IS_TOUCH_DEVICE ) {
	CLICK_EVENTS.push( 'touchstart' );
}
let sortableTypesObject;
let sortableTypes;


// FUNCTIONS //

/**
 * Adds an event listener to an element.
 *
 * @private
 * @param {HTMLElement} el - DOM element
 * @param {string} event - event name
 * @param {Function} handler - event handler
 * @returns {void}
 */
function addEventListener( el, event, handler ) {
	if ( el.addEventListener !== null ) {
		return el.addEventListener( event, handler, false );
	}
	return el.attachEvent( 'on' + event, handler);
}

function setupTypes( types ) {
	sortableTypes = types;
	sortableTypesObject = {};
	const _results = [];
	for ( let _i = 0, _len = types.length; _i < _len; _i++ ) {
		let type = types[_i];
		_results.push( sortableTypesObject[ type.name ] = type );
	}
	return _results;
}

setupTypes([
	{
		name: 'numeric',
		defaultSortDirection: 'descending',
		match( a ) {
			return a.match( NUM_RE );
		},
		comparator( a ) {
			return parseFloat( a.replace(/[^0-9.-]/g, '' ), 10 ) || 0;
		}
	},
	{
		name: 'date',
		defaultSortDirection: 'ascending',
		reverse: true,
		match( a ) {
			return !isNaN(Date.parse(a));
		},
		comparator( a ) {
			return Date.parse(a) || 0;
		}
	},
	{
		name: 'alpha',
		defaultSortDirection: 'ascending',
		match() {
			return true;
		},
		compare( a, b ) {
			return a.localeCompare( b );
		}
	}
]);

/* eslint-disable @babel/no-invalid-this */

function setupClickableTH( table, th, i ) {
	const type = getColumnType(table, i);
	function onClick( e ) {
		if ( e.handled !== true ) {
			e.handled = true;
		} else {
			return false;
		}
		const sorted = this.getAttribute('data-sorted') === 'true';
		const sortedDirection = this.getAttribute('data-sorted-direction');
		let newSortedDirection;
		if ( sorted ) {
			newSortedDirection = sortedDirection === 'ascending' ? 'descending' : 'ascending';
		} else {
			newSortedDirection = type.defaultSortDirection;
		}
		if ( this.parentNode ) {
			const ths = this.parentNode.querySelectorAll( 'th' );
			for ( let _i = 0, _len = ths.length; _i < _len; _i++ ) {
				th = ths[_i];
				th.setAttribute( 'data-sorted', 'false' );
				th.setAttribute( 'role', 'button' );
				th.setAttribute( 'tabindex', '0' );
				th.removeAttribute( 'data-sorted-direction' );
			}
		}
		this.setAttribute( 'data-sorted', 'true' );
		this.setAttribute( 'data-sorted-direction', newSortedDirection );
		const tBody = table.tBodies[0];
		const rowArray = [];
		if ( !sorted ) {
			let _compare;
			if ( type.compare ) {
				_compare = type.compare;
			} else {
				_compare = function compare(a, b) {
					return b - a;
				};
			}
			const compare = ( a, b ) => {
				if ( a[0] === b[0] ) {
					return a[2] - b[2];
				}
				if ( type.reverse ) {
					return _compare(b[0], a[0]);
				}
				return _compare(a[0], b[0]);
			};
			const _ref = tBody.rows;
			let _j;
			for ( let position = _j = 0, _len1 = _ref.length; _j < _len1; position = ++_j ) {
				const row = _ref[position];
				const value = getNodeValue(row.cells[i]);
				if ( type.comparator ) {
					value = type.comparator(value);
				}
				rowArray.push([value, row, position]);
			}
			rowArray.sort(compare);
			for ( let _k = 0, _len2 = rowArray.length; _k < _len2; _k++) {
				const row = rowArray[_k];
				tBody.appendChild(row[1]);
			}
		} else {
			const _ref1 = tBody.rows;
			for ( let _l = 0, _len3 = _ref1.length; _l < _len3; _l++) {
				const item = _ref1[_l];
				rowArray.push(item);
			}
			rowArray.reverse();
			for ( let _m = 0, _len4 = rowArray.length; _m < _len4; _m++) {
				const row = rowArray[_m];
				tBody.appendChild(row);
			}
		}
		if ( typeof window['CustomEvent'] === 'function' ) {
			return typeof table.dispatchEvent === 'function' ? table.dispatchEvent(new CustomEvent('Sortable.sorted', {
				bubbles: true
			})) : void 0;
		}
	}
	for ( let _i = 0, _len = CLICK_EVENTS.length; _i < _len; _i++ ) {
		const eventName = CLICK_EVENTS[_i];
		addEventListener( th, eventName, onClick );
	}
}

/* eslint-enable @babel/no-invalid-this */

function getColumnType( table, i ) {
	const _ref = table.querySelectorAll( 'th' )[ i ];
	const specified = _ref ? _ref.getAttribute( 'data-sortable-type' ) : void 0;
	if ( specified ) {
		return sortableTypesObject[specified];
	}
	const _ref1 = table.tBodies[0].rows;
	for ( let _i = 0, _len = _ref1.length; _i < _len; _i++ ) {
		const row = _ref1[_i];
		const text = getNodeValue(row.cells[i]);
		const _ref2 = sortableTypes;
		for ( let _j = 0, _len1 = _ref2.length; _j < _len1; _j++ ) {
			const type = _ref2[_j];
			if ( type.match(text)) {
				return type;
			}
		}
	}
	return sortableTypesObject.alpha;
}

function getNodeValue( node ) {
	let dataValue;
	if ( !node ) {
		return '';
	}
	dataValue = node.getAttribute( 'data-value' );
	if ( dataValue !== null ) {
		return dataValue;
	}
	if ( typeof node.innerText !== 'undefined' ) {
		return node.innerText.replace( TRIM_RE, '' );
	}
	return node.textContent.replace( TRIM_RE, '');
}


// MAIN //

/**
* A basic bootstrap table.
*
* @property {boolean} clickable - controls whether or not the table cells are clickable
* @property {boolean} bordered - adds borders on all sides of the table and cells
* @property {boolean} borderless - removes all borders on the table and cells, including table header
* @property {boolean} hover - enable a hover state on table rows within a <tbody>
* @property {(boolean|string)} responsive - responsive tables allow tables to be scrolled horizontally with ease. Across every breakpoint, use responsive for horizontally scrolling tables. Responsive tables are wrapped automatically in a div. Use responsive="sm", responsive="md", responsive="lg", or responsive="xl" as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally
* @property {string} size - make tables more compact by cutting cell padding in half by setting size as `sm`
* @property {boolean} striped - adds zebra-striping to any table row within the <tbody>
* @property {string} variant - invert the colors of the table — with light text on dark backgrounds by setting variant as dark
*/
const Table = ({ clickable, ...rest }) => {
	const tableRef = useRef( null );
	useEffect( () => {
		if ( clickable ) {
			const table = tableRef.current;
			if ( !table ) {
				return;
			}
			const _ref = table.tHead;
			if ( ( _ref ? _ref.rows.length : void 0 ) !== 1 ) {
				return;
			}
			if ( table.getAttribute( 'data-sortable-initialized') === 'true' ) {
				return;
			}
			table.setAttribute( 'data-sortable-initialized', 'true' );
			const ths = table.querySelectorAll( 'th' );
			let _i;
			for ( let i = _i = 0, _len = ths.length; _i < _len; i = ++_i ) {
				const th = ths[i];
				if (
					th.getAttribute( 'data-sortable' ) !== 'false' &&
					!th.className.includes( 'not-sortable' )
				) {
					setupClickableTH( table, th, i );
				}
			}
			tableRef.current = table;
		}
	}, [ clickable ] );
	return (
		<ReactBootstrapTable
			ref={tableRef}
			data-sortable
			className="sortable-theme-bootstrap"
			{...rest}
		/>
	);
};


// PROPERTIES //

Table.propTypes = {
	bordered: PropTypes.bool,
	borderless: PropTypes.bool,
	clickable: PropTypes.bool,
	hover: PropTypes.bool,
	responsive: PropTypes.oneOfType([ PropTypes.string, PropTypes.bool ]),
	size: PropTypes.string,
	striped: PropTypes.bool,
	variant: PropTypes.string
};

Table.defaultProps = {
	bordered: false,
	borderless: false,
	clickable: true,
	hover: false,
	responsive: null,
	size: null,
	striped: false,
	variant: null
};


// EXPORTS //

export default withPropCheck( Table );
