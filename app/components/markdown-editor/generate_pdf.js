// MODULES //

import logger from 'debug';
import omit from '@stdlib/utils/omit';
import startsWith from '@stdlib/string/starts-with';
import contains from '@stdlib/assert/contains';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';


// VARIABLES //

const debug = logger( 'markdown-editor:pdf' );
const MARGINS = [ 5, 2, 2, 5 ];

// custon_font_size is passed in terms of html, so a size 16 in html will be a size 12 here

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

function makeSTYLES( customFontSize = 16 ) {
	// the 16 is x + 4 --> 12 font
	const pdfSize = customFontSize - 4;
	return (
		{
			'h1': {
				fontSize: pdfSize + 16,
				color: '#2e4468',
				bold: true
			},
			'h2': {
				fontSize: pdfSize + 14,
				color: '#3c763d',
				bold: true
			},
			'h3': {
				fontSize: pdfSize + 8,
				color: '#2e4468',
				bold: true
			},
			'h4': {
				fontSize: pdfSize + 4,
				color: '#ca5800',
				bold: true
			},
			'standardText': {
				fontSize: pdfSize
			}
		}
	);
}

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
			case 'heading_open':
				if ( closing ) {
					text.push( state );
					state = omit( state, 'text' );
					closing = false;
				}
				state.style = current.tag;
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
			case 'heading_close':
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

function isCol( astElem ) {
	// This is an object
	if ( astElem.type !== 'html_block' ) {
		return false;
	}
	else if ( !startsWith( astElem.content, '<!--Column' ) && !startsWith(astElem.content, '<!--ColGroup' ) ) {
		return false;
	}
	return true;
}

function isStartTag( astElem ) {
	// This is an object
	if ( astElem.type !== 'html_block' ) {
		return false;
	}
	else if ( !startsWith( astElem.content, '<!--ColGroupStart' ) ) {
		return false;
	}
	return true;
}

function isEndTag( astElem ) {
	// This is an object
	if ( astElem.type !== 'html_block' ) {
		return false;
	}
	else if ( !startsWith( astElem.content, '<!--ColGroupEnd' ) ) {
		return false;
	}
	return true;
}

function parsePDF( ast, config, state, start, end ) {
	// Note that the DPI is 72
	if ( isUndefinedOrNull( state ) ) {
		state = {};
	}

	if ( isUndefinedOrNull( start ) ) {
		start = 0;
	}
	if ( isUndefinedOrNull( end ) ) {
		end = ast.length;
	}
	var content = [];

	// In this case AST that is passed wont be the whole thing
	for ( let i = start; i < end; i++ ) {
		const elem = ast[ i ];
		if ( elem.type === 'container_center_open' ) {
			state.alignment = 'center';
		}
		else if ( elem.type === 'container_center_close' ) {
			delete state.alignment;
		} else if ( elem.type === 'heading_open' ) {
			const level = elem.tag;
			const next = ast[ i+1 ];
			if ( next.children ) {
				const text = [];
				applyStyles( next.children, text );
				content.push({
					text,
					style: level,
					...state,
					margin: MARGINS
				});
			} else {
				content.push({
					text: next.content,
					style: level,
					...state,
					margin: MARGINS
				});
			}
			i += 2;
		}
		else if ( elem.type === 'paragraph_open' ) {
			const next = ast[ i+1 ];
			if ( next.children ) {
				const text = [];
				applyStyles( next.children, text );
				content.push({
					text,
					...state,
					margin: MARGINS,
					style: 'standardText'
				});
			} else {
				content.push({
					text: next.content,
					...state,
					margin: MARGINS
				});
			}
			i += 2;
		} else if ( elem.type === 'html_block' ) {
			if ( contains( elem.content, '<img src=' ) ) {
				let start = elem.content.indexOf( 'src="' );

				// Move to right past `src="`
				start += 5;
				const end = elem.content.indexOf( '"', start );
				content.push({
					image: elem.content.substr( start, end - start ),
					width: 300,
					alignment: 'center',
					margin: MARGINS
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
					const o = {
						...state
					};
					o[ ordered ? 'ol' : 'ul' ] = list;
					content.push( o );
					break;
				}
			}
			i = j;
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
					table.margin = MARGINS;
					content.push( table );
					break;
				}
			}
			i = j;
		}
	}
	debug( 'content: %s', JSON.stringify( content, null, 2 ) );
	return content;
}

// MAIN //

function generatePDF( ast, config, standardFontSize ) {
	const doc = {
		'content': [],
		'styles': makeSTYLES(standardFontSize),
		'pageSize': config.pageSize,
		'pageOrientation': config.pageOrientation
	};

	const state = {};

	// Get the indices that have column tags
	var colNumbers = [];
	var startTag = [];
	var endTag = [];
	var colGroups = [];
	for ( let z = 0; z < ast.length; z++ ) {
		if ( isStartTag( ast[ z ] ) ) {
			colNumbers = [z];
			startTag.push(z);
		} else if ( isEndTag( ast[ z ] ) ) {
			colNumbers.push(z);
			endTag.push(z);
			colGroups.push(colNumbers);
		} else if ( isCol( ast[ z ] ) ) {
			colNumbers.push(z);
		}
	}

	if ( colNumbers.length === 0 ) {
		doc.content = parsePDF(ast, config, {});
		return doc;
	}

	var zeroStart = false;
	if ( colGroups[0][0] === 0 ) {
		zeroStart = true;
	}

	var subDoc;
	var columns;
	if ( !zeroStart ) {
		subDoc = parsePDF(ast, config, state, 0, startTag[0]);
		doc.content = subDoc;
		// we know we are in colgroup 1
	}

	var colTmp;
	var colObj;
	for ( let z = 0; z < colGroups.length; z++ ) {
		// Handle columns group
		columns = new Array(colGroups[z].length - 1);
		colTmp = colGroups[z];
		// Invariant: colTmp.length === columns.length + 1
		// Through all the col in the column group
		for (let j = 0; j < colTmp.length - 1; j++ ) {
			subDoc = parsePDF(ast, config, state, colTmp[j] + 1, colTmp[j + 1] - 1);

			columns[j] = [];
			for ( let x = 0; x < subDoc.length; x++ ) {
				columns[j].push(subDoc[x]);
			}
		}

		colObj = {};
		colObj.columns = columns;
		doc.content.push(colObj);

		// EndTag[z] to startTag[z + 1]

		if ( z === colGroups.length - 1 ) {
			// Handle the case in which there is more
			if ( endTag[z] === ast.length - 1 ) {
				break;
			}

			// there is more
			subDoc = parsePDF(ast, config, state, endTag[z] + 1, ast.length);
			doc.content.push(subDoc);
		} else {
			subDoc = parsePDF(ast, config, state, endTag[z] + 1, startTag[z + 1] - 1);
			doc.content.push(subDoc);
		}
	}

	debug( 'Document: %s', JSON.stringify( doc, null, 2 ) );
	return doc;
}


// EXPORTS //

export default generatePDF;
