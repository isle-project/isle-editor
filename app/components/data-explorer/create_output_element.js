// MODULES //

import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import TurndownService from 'turndown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';
import logger from 'debug';
import isArray from '@stdlib/assert/is-array';
import entries from '@stdlib/utils/entries';
import replace from '@stdlib/string/replace';
import ClearButton from './clear_button.js';
import FullscreenButton from './fullscreen_button.js';
import DatasetButton from './dataset_button.js';


// VARIABLES //

const debug = logger( 'isle:data-explorer' );
const RE_CLEAR_BUTTON = /<button[\s\S]*<\/button>/;
const turndownService = new TurndownService();
const turndownPluginGfm = require( 'turndown-plugin-gfm' );
turndownService.use( turndownPluginGfm.gfm );


// FUNCTIONS //

const createButtons = ( header, table, clearOutput, idx, subsetFilters, onFilters ) => {
	return ( <ButtonGroup style={{ float: 'right', top: '-4px' }}>
		<DatasetButton filters={subsetFilters} onActivateFilters={onFilters} />
		<FullscreenButton header={header} table={table} />
		<ClearButton onClick={() => {
			debug( `Clear element with ID ${idx}` );
			clearOutput( idx );
		}} />
	</ButtonGroup> );
};

/**
* Wraps the supplied div element such that it can be dragged.
*/
const makeDraggable = ( div, asMarkdown = true ) => {
	let markup = renderToString( div );
	markup = replace( markup, RE_CLEAR_BUTTON, '' );
	if ( asMarkdown ) {
		markup = turndownService.turndown( markup );
	}
	return (
		<Fragment>
			<div
				draggable={true}
				className="data-explorer-draggable-bar"
				onDragStart={( ev ) => {
					ev.dataTransfer.setData( 'text/plain', markup );
					ev.dataTransfer.setData( 'text/html', '' );
				}}
			>
				Drag Table
			</div>
			{div}
		</Fragment>
	);
};

const renderIQRTable = ( e, idx, clearOutput, subsetFilters, onFilters ) => {
	const table = <Table bordered size="sm">
		<tbody>
			<tr>
				<th>Variable</th>
				<th>IQR</th>
				<th>Lower</th>
				<th>Upper</th>
				<th>N</th>
			</tr>
			<tr>
				<td>{e.variable}</td>
				{e.result.value[0].map( ( e, i ) => <td key={i}>{e.toFixed( 3 )}</td> )}
				<td>{e.result.size}</td>
			</tr>
		</tbody>
	</Table>;
	return ( <pre key={idx}>
		{createButtons( 'Interquartile Range', table, clearOutput, idx, subsetFilters, onFilters )}
		{makeDraggable( table )}
	</pre> );
};

const renderRangeTable = ( e, idx, clearOutput, subsetFilters, onFilters ) => {
	const table = <Table bordered size="sm">
		<tbody>
			<tr>
				<th>Variable</th>
				<th>Range</th>
				<th>Min</th>
				<th>Max</th>
				<th>N</th>
			</tr>
			<tr>
				<td>{e.variable}</td>
				{e.result.value[0].map( ( e, i ) => <td key={i}>{e.toFixed( 3 )}</td> )}
				<td>{e.result.size}</td>
			</tr>
		</tbody>
	</Table>;
	return ( <pre key={idx}>
		{createButtons( 'Range', table, clearOutput, idx, subsetFilters, onFilters )}
		{makeDraggable( table )}
	</pre> );
};


// MAIN //

function createOutputElement( e, idx, clearOutput, subsetFilters, onFilters ) {
	if ( e.type === 'Chart' ) {
		if ( e.value.props.meta && !e.value.props.meta.filters ) {
			e.value.props.meta.filters = subsetFilters;
		}
		return ( <div key={idx}>
			<ClearButton
				onClick={() => { clearOutput( idx ); }}
				style={{ float: 'right', padding: '0.1rem 0.3rem' }}
			/>
			<div style={{
				position: 'relative',
				height: 300,
				marginTop: 0,
				marginBottom: 40,
				marginRight: 25
			}} >
				{e.value}
			</div>
		</div> );
	}
	else if ( e.type === 'Test' ) {
		const elem = <pre key={idx} >
			{createButtons( e.type, e.value, clearOutput, idx, subsetFilters, onFilters )}
			{e.value}
		</pre>;
		return elem;
	}
	else if (
		e.type === 'Contingency Table' ||
		e.type === 'Frequency Table' ||
		e.type === 'Grouped Frequency Table' ||
		e.type === 'Simple Linear Regression' ||
		e.type === 'PCA' ||
		e.type === 'kmeans'
	) {
		const elem = <pre key={idx} >
			{createButtons( e.type, e.value, clearOutput, idx, subsetFilters, onFilters )}
			{makeDraggable( e.value )}
		</pre>;
		return elem;
	}
	else if ( e.type === 'Statistics' ) {
		if ( e.group ) {
			if ( e.statistics.length === 1 ) {
				const table = <Table bordered size="sm">
					<tbody>
					{ e.statistics[0] === 'Range' ?
						<tr>
							<th>Variable</th>
							<th>{e.group}</th>
							<th>Range</th>
							<th>Min</th>
							<th>Max</th>
							<th>N</th>
						</tr>: null
					}
					{ e.statistics[0] === 'Interquartile Range' ?
						<tr>
							<th>Variable</th>
							<th>{e.group}</th>
							<th>IQR</th>
							<th>Lower</th>
							<th>Upper</th>
							<th>N</th>
						</tr>: null
					}
					{ e.statistics[0] !== 'Range' && e.statistics[0] !== 'Interquartile Range' ?
						<tr>
							<th>Variable</th>
							<th>{e.group}</th>
							<th>{e.statistics[0]}</th>
							<th>N</th>
						</tr>: null
					}
					{entries( e.result ).map( ( arr, i ) => {
						const val = arr[ 1 ].value[ 0 ];
						if ( isArray( val ) ) {
							return (
								<tr key={i} >
									{ i === 0 ? <th>{e.variable}</th> : <th></th>}
									<td>{arr[ 0 ]}</td>
									{arr[ 1 ].value.map( ( x, j ) => {
										return <td key={j}>{x.toFixed( 3 )}</td>;
									})}
									<td>{arr[ 1 ].size}</td>
								</tr>
							);
						}
						return (
							<tr key={i} >
								{ i === 0 ? <th>{e.variable}</th> : <th></th>}
								<td>{arr[ 0 ]}</td>
								<td>{val.toFixed( 3 )} </td>
								<td>{arr[ 1 ].size} </td>
							</tr>
						);
					})}
					</tbody>
				</Table>;
				const elem = <pre key={idx} >
					{createButtons( e.type, table, clearOutput, idx, subsetFilters, onFilters )}
					{makeDraggable( table )}
				</pre>;
				return elem;
			}
			// Case: more than one statistic calculated
			const table = <Table bordered size="sm">
				<tbody>
					<tr>
						<th>Variable</th>
						<th>{e.group}</th>
						{e.statistics.map( ( name, i ) => {
							return <th key={i}>{name}</th>;
						})}
						<th>N</th>
					</tr>
					{entries( e.result ).map( ( arr, i ) => {
						return (
							<tr key={i} >
								{ i === 0 ? <th>{e.variable}</th> : <th></th>}
								<td>{arr[ 0 ]}</td>
								{arr[ 1 ].value.map( ( v, i ) => {
									if ( isArray( v ) ) {
										return <td key={i} >{v[ 0 ].toFixed( 3 )}</td>;
									}
									return <td key={i} >{v.toFixed( 3 )}</td>;
								})}
								<td>{arr[ 1 ].size} </td>
							</tr>
						);
					})}
				</tbody>
			</Table>;
			const elem = <pre key={idx} >
				{createButtons( e.type, table, clearOutput, idx, subsetFilters, onFilters )}
				{makeDraggable( table )}
			</pre>;
			return elem;
		}
		if ( e.statistics.length === 1 ) {
			if ( e.statistics[0] === 'Range' ) {
				return renderRangeTable( e, idx, clearOutput, subsetFilters, onFilters );
			}
			if ( e.statistics[0] === 'Interquartile Range' ) {
				return renderIQRTable( e, idx, clearOutput, subsetFilters, onFilters );
			}
			const { value, size } = e.result;
			const table = <Table bordered size="sm">
				<tbody>
					<tr>
						<th>Variable</th>
						<th>{e.statistics[0]}</th>
						<th>N</th>
					</tr>
					<tr>
						<th>{e.variable}</th>
						<td>{value[0].toFixed( 3 )}</td>
						<td>{size}</td>
					</tr>
				</tbody>
			</Table>;
			const elem = <pre key={idx} >
				{createButtons( e.type, table, clearOutput, idx, subsetFilters, onFilters )}
				{makeDraggable( table )}
			</pre>;
			return elem;
		}
		// Case: more than one statistic calculated
		const { value, size } = e.result;
			const table = <Table bordered size="sm">
				<tbody>
					<tr>
						<th>Variable</th>
						{e.statistics.map( ( name, i ) => {
							return <th key={i}>{name}</th>;
						})}
						<th>N</th>
					</tr>
					<tr>
						<th>{e.variable}</th>
						{value.map( ( v, i ) => {
							if ( isArray( v ) ) {
								// Case: Range or IQR, use first element:
								return <td key={i} >{v[ 0 ].toFixed( 3 )}</td>;
							}
							return <td key={i} >{v.toFixed( 3 )}</td>;
						})}
						<td>{size}</td>
					</tr>
				</tbody>
			</Table>;
			const elem = <pre key={idx} >
				{createButtons( e.type, table, clearOutput, idx, subsetFilters, onFilters )}
				{makeDraggable( table )}
			</pre>;
			return elem;
	}
	return null;
}


// EXPORTS //

export default createOutputElement;
