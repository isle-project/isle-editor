// MODULES //

import omit from '@stdlib/utils/omit';
import startsWith from '@stdlib/string/starts-with';


// VARIABLES //

const STYLES = {
	'h1': {
		fontSize: 32,
		color: '#2e4468',
		bold: true
	},
	'h2': {
		fontSize: 26,
		color: '#3c763d',
		bold: true
	},
	'h3': {
		fontSize: 20,
		color: '#2e4468',
		bold: true
	},
	'h4': {
		fontSize: 16,
		color: '#ca5800',
		bold: true
	}
};
const TABLE_LAYOUT = {
	hLineWidth( i, node ) {
		if ( i === 0 || i === node.table.body.length ) {
			return 0;
		}
		return 1;
	},
	vLineWidth( i ) {
		return 0;
	},
	hLineColor( i ) {
		return '#aaa';
	},
	paddingLeft( i ) {
		return i === 0 ? 0 : 8;
	},
	paddingRight( i, node ) {
		return ( i === node.table.widths.length - 1 ) ? 0 : 8;
	}
};


// FUNCTIONS //

function extractList( ast ) {
	const list = [];
	for ( let i = 0; i < ast.length; i++ ) {
		const node = ast[ i ];
		switch ( node.type ) {
			case 'inline':
				if ( node.children ) {
					const text = [];
					applyStyles( node.children, text );
					list.push( text );
				} else {
					list.push( node.content );
				}
			break;
		}
	}
	return list;
}

function extractTable( ast ) {
	let headerRows = 0;
	const out = {
		table: {
			body: []
		},
		layout: {
			fillColor: function headerColor( i, node ) {
				return ( i === headerRows-1 ) ? '#eceeef' : null;
			},
			...TABLE_LAYOUT
		}
	};
	let row;
	let widths;
	let calculatedWidths = false;
	for ( let i = 0; i < ast.length; i++ ) {
		const node = ast[ i ];
		switch ( node.type ) {
			case 'thead_open':
				headerRows = 1;
			break;
			case 'tr_open':
				if ( !calculatedWidths ) {
					widths = [];
				}
				row = [];
			break;
			case 'inline':
				if ( !calculatedWidths ) {
					widths.push( '*' );
				}
				if ( node.children ) {
					const text = [];
					applyStyles( node.children, text );
					row.push({
						text
					});
				} else {
					row.push({
						text: node.content
					});
				}
			break;
			case 'tr_close':
				if ( !calculatedWidths ) {
					out.table.widths = widths;
					calculatedWidths = true;
				}
				out.table.body.push( row );
			break;
			case 'thead_close':
				headerRows = out.table.body.length;
			break;
		}
	}
	out.table.headerRows = headerRows;
	return out;
}

function applyStyles( ast, text ) {
	let state = {};
	let closing = false;
	for ( let incr = 0; incr < ast.length; incr++ ) {
		const current = ast[ incr ];
		switch ( current.type ) {
			case 'container_center_open':
				if ( closing ) {
					text.push( state );
					state = omit( state, 'text' );
					closing = false;
				}
				state.alignment = 'center';
			break;
			case 'em_open':
				if ( closing ) {
					text.push( state );
					state = omit( state, 'text' );
					closing = false;
				}
				state.italics = true;
			break;
			case 'ins_open':
				if ( closing ) {
					text.push( state );
					state = omit( state, 'text' );
					closing = false;
				}
				state.decoration = 'underline';
			break;
			case 'strong_open':
				if ( closing ) {
					text.push( state );
					state = omit( state, 'text' );
					closing = false;
				}
				state.bold = true;
			break;
			case 'link_open':
				if ( closing ) {
					text.push( state );
					state = omit( state, 'text' );
					closing = false;
				}
				state.link = current.attrs[ 0 ][ 1 ];
				state.decoration = 'underline';
			break;
			case 'container_center_close':
			case 'em_close':
			case 'ins_close':
			case 'strong_close':
			case 'link_close':
				if ( current.level === 0 ) {
					text.push( state );
					state = {};
				}
			break;
			case 'softbreak':
				if ( !state.text ) {
					state.text = '\n';
				} else {
					state.text += '\n';
				}
			break;
			case 'text':
				closing = true;
				if ( !state.text ) {
					state.text = current.content;
				} else {
					state.text += current.content;
				}
				if ( current.level === 0 ) {
					text.push( state );
					state = {};
				}
			break;
		}
	}
}


// MAIN //

function generatePDF( ast ) {
	const doc = {
		'content': [],
		'styles': STYLES
	};
	for ( let i = 0; i < ast.length; i++ ) {
		const elem = ast[ i ];
		if ( elem.type === 'heading_open' ) {
			const level = elem.tag;
			doc.content.push({
				text: ast[ i+1 ].content,
				style: level
			});
			i += 2;
		}
		else if ( elem.type === 'paragraph_open' ) {
			const next = ast[ i+1 ];
			if ( next.children ) {
				const text = [];
				applyStyles( next.children, text );
				doc.content.push({
					text
				});
			} else {
				doc.content.push({
					text: next.content
				});
			}
			i += 2;
		} else if ( elem.type === 'html_block' ) {
			if ( startsWith( elem.content, '<img src=' ) ) {
				let start = elem.content.indexOf( 'src="' );

				// Move to right past `src="`
				start += 5;
				const end = elem.content.indexOf( '"', start );
				doc.content.push({
					image: elem.content.substr( start, end - start ),
					width: 300,
					alignment: 'center'
				});
			}
		} else if (
			elem.type === 'bullet_list_open' ||
			elem.type === 'ordered_list_open'
		) {
			const arr = [];
			let j = i;
			for ( ; j < ast.length; j++ ) {
				const cell = ast[ j ];
				if (
					cell.type !== 'bullet_list_close' &&
					cell.type !== 'ordered_list_close'
				) {
					arr.push( cell );
				}
				else {
					const list = extractList( arr );
					const ordered = elem.type === 'ordered_list_open';
					const o = {};
					o[ ordered ? 'ol' : 'ul' ] = list;
					doc.content.push( o );
					break;
				}
			}
			i += j;
		} else if ( elem.type === 'table_open' ) {
			const arr = [];
			let j = i;
			for ( ; j < ast.length; j++ ) {
				const cell = ast[ j ];
				if ( cell.type !== 'table_close' ) {
					arr.push( cell );
				}
				else {
					const table = extractTable( arr );
					doc.content.push( table );
					break;
				}
			}
			i += j;
		}
	}
	console.log( doc );
	return doc;
}


// EXPORTS //

export default generatePDF;
