// MODULES //

import {
	joinUp, joinDown, lift, setBlockType, toggleMark, wrapIn, selectParentNode
} from 'prosemirror-commands';
import { redo, undo } from 'prosemirror-history';
import { wrapInList } from 'prosemirror-schema-list';
import { addColumnAfter, addColumnBefore, deleteColumn, addRowAfter, addRowBefore, deleteRow,
	mergeCells, splitCell, toggleHeaderRow, toggleHeaderColumn, deleteTable } from 'prosemirror-tables';
import icons from './icons';
import schema from './schema';
import canInsert from './can_insert.js';
import textAlignment from './text_alignment.js';


// FUNCTIONS //

const markActive = ( type ) => ( state ) => {
	const { from, $from, to, empty } = state.selection;
	return empty ? !!type.isInSet( state.storedMarks || $from.marks() ) :
	!!state.doc.rangeHasMark( from, to, type );
};

const blockActive = ( type, attrs = {} ) => ( state ) => {
	const { $from, to, node } = state.selection;
	if ( node ) {
		return node.hasMarkup( type, attrs );
	}
	return to <= $from.end() && $from.parent.hasMarkup( type, attrs );
};

const promptForURL = () => {
	let url = window && window.prompt( 'Enter the URL', 'https://' );
	if ( url && !/^https?:\/\//i.test(url) ) {
		url = 'http://' + url;
	}
	return url;
};


// MAIN //

const menu = {
	marks: [
		{
			title: 'Strong',
			content: icons.strong,
			active: markActive( schema.marks.strong ),
			run: toggleMark( schema.marks.strong )
		},
		{
			title: 'Emphasis',
			content: icons.em,
			active: markActive( schema.marks.em ),
			run: toggleMark( schema.marks.em )
		},
		{
			title: 'Underline',
			content: icons.underline,
			active: markActive( schema.marks.underline ),
			run: toggleMark( schema.marks.underline )
		}
	],
	extraMarks: [
		{
			title: 'Strikethrough',
			content: icons.strikethrough,
			active: markActive( schema.marks.strikethrough ),
			run: toggleMark( schema.marks.strikethrough )
		},
		{
			title: 'Code',
			content: icons.code,
			active: markActive( schema.marks.code ),
			run: toggleMark( schema.marks.code )
		},
		{
			title: 'Subscript',
			content: icons.subscript,
			active: markActive( schema.marks.subscript ),
			run: toggleMark( schema.marks.subscript )
		},
		{
			title: 'Superscript',
			content: icons.superscript,
			active: markActive( schema.marks.superscript ),
			run: toggleMark( schema.marks.superscript)
		}
	],
	blocks: [
		{
			title: 'Change to paragraph',
			content: icons.paragraph,
			active: blockActive( schema.nodes.paragraph ),
			enable: setBlockType( schema.nodes.paragraph ),
			run: setBlockType( schema.nodes.paragraph )
		},
		{
			title: 'Change to heading 1',
			content: 'H1',
			active: blockActive( schema.nodes.heading, { level: 1 } ),
			enable: setBlockType( schema.nodes.heading, { level: 1 } ),
			run: setBlockType( schema.nodes.heading, { level: 1 } )
		}
	],
	headers: [
		{
			title: 'Change to heading 2',
			content: 'Heading 2',
			active: blockActive( schema.nodes.heading, { level: 2 } ),
			enable: setBlockType( schema.nodes.heading, { level: 2 } ),
			run: setBlockType( schema.nodes.heading, { level: 2 } )
		},
		{
			title: 'Change to heading 3',
			content: 'Heading 3',
			active: blockActive( schema.nodes.heading, { level: 3 } ),
			enable: setBlockType( schema.nodes.heading, { level: 3 } ),
			run: setBlockType( schema.nodes.heading, { level: 3 } )
		},
		{
			title: 'Change to heading 4',
			content: 'Heading 4',
			active: blockActive( schema.nodes.heading, { level: 4 } ),
			enable: setBlockType( schema.nodes.heading, { level: 4 } ),
			run: setBlockType( schema.nodes.heading, { level: 4 } )
		},
		{
			title: 'Change to heading 5',
			content: 'Heading 5',
			active: blockActive( schema.nodes.heading, { level: 5 } ),
			enable: setBlockType( schema.nodes.heading, { level: 5 } ),
			run: setBlockType( schema.nodes.heading, { level: 5 } )
		}
	],
	alignment: textAlignment,
	wraps: [
		{
			title: 'Wrap in block quote',
			content: icons.blockquote,
			active: blockActive( schema.nodes.blockquote ),
			enable: wrapIn( schema.nodes.blockquote ),
			run: wrapIn( schema.nodes.blockquote )
		},
		{
			title: 'Wrap in bullet list',
			content: icons.bullet_list,
			active: blockActive( schema.nodes.bullet_list ),
			enable: wrapInList( schema.nodes.bullet_list ),
			run: wrapInList( schema.nodes.bullet_list )
		},
		{
			title: 'Wrap in ordered list',
			content: icons.ordered_list,
			active: blockActive( schema.nodes.ordered_list ),
			enable: wrapInList( schema.nodes.ordered_list ),
			run: wrapInList( schema.nodes.ordered_list )
		}
	],
	actions: [
		{
			title: 'Lift out of enclosing block',
			content: 'Lift out of enclosing block',
			enable: lift,
			run: lift
		},
		{
			title: 'Join with above block',
			content: 'Join with above block',
			enable: joinUp,
			run: joinUp
		},
		{
			title: 'Join with below block',
			content: 'Join with below block',
			enable: joinDown,
			run: joinDown
		}
	],
	insert: [
		{
			title: 'Insert image',
			content: 'Insert image',
			enable: canInsert( schema.nodes.image ),
			run: ( state, dispatch ) => {
				const src = promptForURL();
				if (!src) {
					return false;
				}
				const img = schema.nodes.image.createAndFill({ src });
				if ( img ) {
					dispatch( state.tr.replaceSelectionWith( img ) );
					return true;
				}
				return false;
			}
		},
		{
			title: 'Insert footnote',
			content: 'Insert footnote',
			enable: canInsert( schema.nodes.footnote ),
			run: ( state, dispatch ) => {
				const footnote = schema.nodes.footnote.create();
				dispatch( state.tr.replaceSelectionWith( footnote ) );
			}
		},
		{
			title: 'Insert link',
			content: 'Insert link',
			active: markActive( schema.marks.link ),
			enable: ( state ) => !state.selection.empty,
			run( state, dispatch ) {
				if ( markActive( schema.marks.link )( state ) ) {
					toggleMark( schema.marks.link )( state, dispatch );
					return true;
				}
				const href = promptForURL();
				if ( !href ) {
					return false;
				}
				toggleMark( schema.marks.link, { href })( state, dispatch );
				return false;
			}
		}
	],
	history: [
		{
			title: 'Undo last change',
			content: icons.undo,
			enable: undo,
			run: undo
		},
		{
			title: 'Redo last undone change',
			content: icons.redo,
			enable: redo,
			run: redo
		},
		{
			title: 'Select parent node',
			content: icons.selectParent,
			run: selectParentNode,
			select: state => selectParentNode( state )
		}
	],
	tableEdits: [
		{
			title: 'Insert column before',
			content: 'Insert column before',
			run: addColumnBefore
		},
		{
			title: 'Insert column after',
			content: 'Insert column after',
			run: addColumnAfter
		},
		{
			title: 'Insert row before',
			content: 'Insert row before',
			run: addRowBefore
		},
		{
			title: 'Insert row after',
			content: 'Insert row after',
			run: addRowAfter
		},
		{
			title: 'Delete column',
			content: 'Delete column',
			run: deleteColumn
		},
		{
			title: 'Delete row',
			content: 'Delete row',
			run: deleteRow
		},
		{
			title: 'Merge cells',
			content: 'Merge cells',
			run: mergeCells
		},
		{
			title: 'Split cells',
			content: 'Split cells',
			run: splitCell
		},
		{
			title: 'Toggle header column',
			content: 'Toggle header column',
			run: toggleHeaderColumn
		},
		{
			title: 'Toggle header row',
			content: 'Toggle header row',
			run: toggleHeaderRow
		},
		{
			title: 'Delete table',
			content: 'Delete table',
			run: deleteTable
		}
	]
};


// EXPORTS //

export default menu;
