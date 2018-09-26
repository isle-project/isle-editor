// MODULES //

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import TurndownService from 'turndown';
import Table from 'react-bootstrap/lib/Table';
import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-object';
import isNumber from '@stdlib/assert/is-number';
import entries from '@stdlib/utils/entries';
import replace from '@stdlib/string/replace';
import ClearButton from './clear_button.js';


// VARIABLES //

const RE_CLEAR_BUTTON = /<button[\s\S]*<\/button>/;
const turndownService = new TurndownService();
const turndownPluginGfm = require( 'turndown-plugin-gfm' );
turndownService.use( turndownPluginGfm.gfm );


// FUNCTIONS //

/**
* Wraps the supplied div element such that it can be dragged.
*/
const makeDraggable = ( div, asMarkdown = true ) => {
	let markup = ReactDOMServer.renderToStaticMarkup( div );
	markup = replace( markup, RE_CLEAR_BUTTON, '' );
	if ( asMarkdown ) {
		markup = turndownService.turndown( markup );
	}
	return ( <div
		draggable="true"
		style={{
			cursor: 'move'
		}}
		onDragStart={( ev ) => {
			ev.dataTransfer.setData( 'text/plain', markup );
			ev.dataTransfer.setData( 'text/html', '' );
		}}
	>
		{div}
	</div> );
};

const renderIQRTable = ( e, idx, clearOutput ) => {
	const table = <Table striped bordered size="sm">
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
				{e.result.value.map( ( e, i ) => <td key={i}>{e.toFixed( 3 )}</td> )}
				<td>{e.result.size}</td>
			</tr>
		</tbody>
	</Table>;
	return ( <pre key={idx}>
		<ClearButton onClick={() => { clearOutput( idx ); }} />
		{makeDraggable( table )}
	</pre> );
};

const renderRangeTable = ( e, idx, clearOutput ) => {
	const table = <Table striped bordered size="sm">
		<tbody>
			<tr>
				<th>Variable</th>
				<th>Min</th>
				<th>Max</th>
				<th>N</th>
			</tr>
			<tr>
				<td>{e.variable}</td>
				{e.result.value.map( ( e, i ) => <td key={i}>{e.toFixed( 3 )}</td> )}
				<td>{e.result.size}</td>
			</tr>
		</tbody>
	</Table>;
	return ( <pre key={idx}>
		<ClearButton onClick={() => { clearOutput( idx ); }} />
		{makeDraggable( table )}
	</pre> );
};


// MAIN //

/**
* Maps over the output array and returns the filled output panel.
*/
const OutputPanel = ( output, clearOutput ) => {
	return (
		<div id="outputPanel" style={{
			height: (window.innerHeight*0.9) - 80,
			overflowY: 'scroll',
			padding: '5px'
		}}>
			{output.map( ( e, idx ) => {
				if ( e.type === 'Chart' ) {
					return ( <div key={idx}>
						<ClearButton onClick={() => { clearOutput( idx ); }} />
						<div style={{
							height: 300,
							marinTop: 0,
							marginBottom: 40,
							marginRight: 25
						}} >
							{e.value}
						</div>
					</div> );
				}
				else if (
					e.type === 'Contingency Table' ||
					e.type === 'Frequency Table' ||
					e.type === 'Grouped Frequency Table' ||
					e.type === 'Test' ||
					e.type === 'Simple Linear Regression'
				) {
					let elem = <pre key={idx} >
						<ClearButton onClick={() => { clearOutput( idx ); }} /><br />
						{makeDraggable( e.value )}
					</pre>;
					return elem;
				}
				else if ( isNumber( e.result.value ) && e.result.size ) {
					const { value, size } = e.result;
					const table = <table className="table table-condensed">
						<tbody>
							<tr>
								<th>Variable</th>
								<th>{e.type}</th>
								<th>N</th>
							</tr>
							<tr>
								<th>{e.variable}</th>
								<td>{value.toFixed( 3 )}</td>
								<td>{size}</td>
							</tr>
						</tbody>
					</table>;
					const elem = <pre key={idx} >
						<ClearButton onClick={() => { clearOutput( idx ); }} />
						{makeDraggable( table )}
					</pre>;
					return elem;
				}
				else if ( isArray( e.result.value ) && e.type === 'Range' ) {
					return renderRangeTable( e, idx, clearOutput );
				} else if ( isArray( e.result.value ) && e.type === 'Interquartile Range' ) {
					return renderIQRTable( e, idx, clearOutput );
				}
				else if ( isObject( e.result ) ) {
					let elem = <pre key={idx} >
						<ClearButton onClick={() => { clearOutput( idx ); }} />
							<table className="table table-condensed">
								<tbody>
									{ e.type === 'Range' ?
										<tr>
											<th>Variable</th>
											<th>{e.group}</th>
											<th>Range</th>
											<th></th>
											<th>N</th>
										</tr>: null
									}
									{ e.type === 'Interquartile Range' ?
										<tr>
											<th>Variable</th>
											<th>{e.group}</th>
											<th>IQR</th>
											<th>Lower</th>
											<th>Upper</th>
											<th>N</th>
										</tr>: null
									}
									{ e.type !== 'Range' && e.type !== 'Interquartile Range' ?
										<tr>
											<th>Variable</th>
											<th>{e.group}</th>
											<th>{e.type}</th>
											<th>N</th>
										</tr>: null
									}
									{entries( e.result ).map( ( arr, i ) => {
										if ( isArray( arr[ 1 ].value ) ) {
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
												<td>{arr[ 1 ].value.toFixed( 3 )} </td>
												<td>{arr[ 1 ].size} </td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</pre>;
					return makeDraggable( elem );
				}
				return null;
			})}
		</div>
	);
};


// EXPORTS //

export default OutputPanel;
