---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Dragging behavior adapted from code by:

Copyright (c) 2019 by Matt Lockyer (https://codepen.io/mattlockyer/pen/LydeLj)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
/


// MODULES //

import React, { Component, Fragment } from 'react';
import { findDOMNode } from 'react-dom';
import logger from 'debug';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import InputRange from 'react-input-range';
import unique from 'uniq';
import Alert from 'react-bootstrap/Alert';
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
import round from '@stdlib/math/base/special/round';
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
allowSameValues
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
A component rendering data in a tabular display. Built on top of [react-table](https://react-table.js.org/).

## Example

``` js
<DataTable
    showRemove
    onClickRemove={( data ) => { console.log(data); }}
    data={{ 
        firstName: [ 'Hans', 'Lotti', 'Fritz' ], 
        lastName: [ 'Bauer', 'Müller', 'Schultz' ],
        age: [ 37, 55, 62 ]
    }}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/data-table)

## Options

* __data__ | `(array|object) (required)`: A data object or array to be viewed. If it is an object, the keys correspond to column values while an array will expect an array of objects with a named field corresponding to each column. Default: `none`.
* __dataInfo__ | `object`: object with `info` string array describing the data set, the `name` of the dataset, an `object` of `variables` with keys corresponding to variable names and values to variable descriptions, an a `showOnStartup` boolean controlling whether to display the info modal on startup. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: controls whether columns for which no `info` exist have a button which when clicked calls the `onColumnDelete` callback function. Default: `false`.
* __filterable__ | `boolean`: controls whether columns are filterable. Default: `true`.
* __editable__ | `array`: array of names for columns that shall be editable. Default: `[]`.
* __onColumnDrag__ | `function`: undefined. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: function invoked with the name of a column when the respective delete button for a column is clicked. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: undefined. Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: A function specifying an action to take for rows removed from the data (defaults to an empty function). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: function invoked with the updated data set after the value of a cell was changed by the user (only applies when table is `editable`). Default: `onEdit() {}`.
* __filters__ | `array`: undefined. Default: `[]`.
* __onFilteredChange__ | `function`: undefined. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: indicates whether to display checkboxes for rows to be removed. Default: `false`.
* __showIdColumn__ | `boolean`: controls whether to show an ID column. Default: `true`.
* __style__ | `object`: An object allowing for custom css styling. Defaults to an empty object. Default: `{}`.
