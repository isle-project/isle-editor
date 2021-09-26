// MODULES //

import {
	joinUp, joinDown, lift, setBlockType, toggleMark, wrapIn, selectParentNode
} from 'prosemirror-commands';
import { findParentNodeOfType } from 'prosemirror-utils';
import { AllSelection, TextSelection } from 'prosemirror-state';
import { redo, undo } from 'prosemirror-history';
import { wrapInList } from 'prosemirror-schema-list';
import { addColumnAfter, addColumnBefore, deleteColumn, addRowAfter, addRowBefore, deleteRow,
	mergeCells, splitCell, toggleHeaderRow, toggleHeaderColumn, deleteTable } from 'prosemirror-tables';
import icons from './icons';
import schema from './schema';
import canInsert from './can_insert.js';
import textAlignment from './text_alignment.js';
import applyMark from './apply_mark.js';
import FONT_SIZES from './font_sizes.json';
import isTextStyleMarkCommandEnabled from './is_text_style_mark_command_enabled.js';
import LinkSetURLCommand from './link_set_url_command.js';
import ImageFromURLCommand from './image_from_url_command.js';
import ImageUploadCommand from './image_upload_command.js';
import TableInsertCommand from './table_insert_command.js';


// FUNCTIONS //

const isEnabled = ( state ) => {
	const { selection } = state;
	return (
		selection instanceof TextSelection || selection instanceof AllSelection
	);
};

const isEmptySelectionForInsertion = ( state ) => {
	const tr = state;
	const { selection } = tr;
	if ( selection instanceof TextSelection ) {
		return selection.from === selection.to;
	}
	return false;
};

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

const setFontSize = ( tr, schema, pt ) => {
	const markType = schema.marks.fontSize;
	if ( !markType ) {
		return tr;
	}
	const attrs = pt ? { pt } : null;
	tr = applyMark( tr, schema, markType, attrs );
	return tr;
};

const fontSizeFactory = ( pt ) => {
	return ( state, dispatch ) => {
		const { schema, selection } = state;
		const tr = setFontSize( state.tr.setSelection( selection ), schema, pt );
		if ( tr.docChanged || tr.storedMarksSet ) {
			if ( dispatch ) {
				return dispatch( tr );
			}
			return true;
		}
		return false;
	};
};

const isFontEnabled = ( state ) => {
	return isTextStyleMarkCommandEnabled( state, 'fontSize' );
};

const activeHeadingFactory = ( level ) => {
	return ( state ) => {
		const heading = state.schema.nodes.heading;
		let result;
		if ( heading ) {
			result = findParentNodeOfType( heading )( state.selection );
		} else {
			result = state.selection;
		}
		return (
			result &&
			result.node &&
			result.node.attrs &&
			result.node.attrs.level === level
		);
	};
};


// VARIABLES //

export const marks = [
	{
		title: 'strong',
		content: icons.strong,
		enable: isEnabled,
		active: markActive( schema.marks.strong ),
		run: toggleMark( schema.marks.strong ),
		hotkey: 'Ctrl+B'
	},
	{
		title: 'emphasis',
		content: icons.em,
		enable: isEnabled,
		active: markActive( schema.marks.em ),
		run: toggleMark( schema.marks.em ),
		hotkey: 'Ctrl+I'
	},
	new LinkSetURLCommand()
];

export const extraMarks = [
	{
		title: 'underline',
		content: icons.underline,
		enable: isEnabled,
		active: markActive( schema.marks.underline ),
		run: toggleMark( schema.marks.underline ),
		hotkey: 'Ctrl+U'
	},
	{
		title: 'strikethrough',
		content: icons.strikethrough,
		enable: isEnabled,
		active: markActive( schema.marks.strikethrough ),
		run: toggleMark( schema.marks.strikethrough ),
		hotkey: 'Ctrl+S'
	},
	{
		title: 'code',
		content: icons.code,
		enable: isEnabled,
		active: markActive( schema.marks.code ),
		run: toggleMark( schema.marks.code ),
		hotkey: 'Ctrl+M'
	},
	{
		title: 'subscript',
		content: icons.subscript,
		enable: isEnabled,
		active: markActive( schema.marks.subscript ),
		run: toggleMark( schema.marks.subscript ),
		hotkey: 'Ctrl+L'
	},
	{
		title: 'superscript',
		content: icons.superscript,
		enable: isEnabled,
		active: markActive( schema.marks.superscript ),
		run: toggleMark( schema.marks.superscript),
		hotkey: 'Ctrl+P'
	}
];

export const blocks = [
	{
		title: 'change-paragraph',
		content: icons.paragraph,
		active: blockActive( schema.nodes.paragraph ),
		enable: setBlockType( schema.nodes.paragraph ),
		run: setBlockType( schema.nodes.paragraph )
	},
	{
		title: 'change-heading-1',
		content: 'H1',
		active: activeHeadingFactory( 1 ),
		enable: setBlockType( schema.nodes.heading, { level: 1 } ),
		run: setBlockType( schema.nodes.heading, { level: 1 } ),
		hotkey: 'Shift+Ctrl+1'
	},
	{
		title: 'change-heading-2',
		content: 'H2',
		active: activeHeadingFactory( 2 ),
		enable: setBlockType( schema.nodes.heading, { level: 2 } ),
		run: setBlockType( schema.nodes.heading, { level: 2 } ),
		hotkey: 'Shift+Ctrl+2'
	}
];

export const headers = [
	{
		title: 'change-heading-3',
		content: 'Heading 3',
		enable: setBlockType( schema.nodes.heading, { level: 3 } ),
		run: setBlockType( schema.nodes.heading, { level: 3 } ),
		hotkey: 'Shift+Ctrl+3'
	},
	{
		title: 'change-heading-4',
		content: 'Heading 4',
		enable: setBlockType( schema.nodes.heading, { level: 4 } ),
		run: setBlockType( schema.nodes.heading, { level: 4 } ),
		hotkey: 'Shift+Ctrl+4'
	},
	{
		title: 'change-heading-5',
		content: 'Heading 5',
		enable: setBlockType( schema.nodes.heading, { level: 5 } ),
		run: setBlockType( schema.nodes.heading, { level: 5 } ),
		hotkey: 'Shift+Ctrl+5'
	}
];

export const wraps = [
	{
		title: 'wrap-block-quote',
		content: icons.blockquote,
		active: blockActive( schema.nodes.blockquote ),
		enable: wrapIn( schema.nodes.blockquote ),
		run: wrapIn( schema.nodes.blockquote ),
		hotkey: 'Ctrl+>'
	},
	{
		title: 'wrap-bullet-list',
		content: icons.bullet_list,
		active: blockActive( schema.nodes.bullet_list ),
		enable: wrapInList( schema.nodes.bullet_list ),
		run: wrapInList( schema.nodes.bullet_list ),
		hotkey: 'Shift+Ctrl+8'
	},
	{
		title: 'wrap-ordered-list',
		content: icons.ordered_list,
		active: blockActive( schema.nodes.ordered_list ),
		enable: wrapInList( schema.nodes.ordered_list ),
		run: wrapInList( schema.nodes.ordered_list ),
		hotkey: 'Shift+Ctrl+9'
	}
];

export const actions = [
	{
		title: 'lift-out-enclosing',
		content: 'lift-out-enclosing',
		enable: lift,
		run: lift
	},
	{
		title: 'join-with-above',
		content: 'join-with-above',
		enable: joinUp,
		run: joinUp
	},
	{
		title: 'join-with-below',
		content: 'join-with-below',
		enable: joinDown,
		run: joinDown
	}
];

export const insert = [
	new ImageFromURLCommand(),
	new ImageUploadCommand(),
	{
		title: 'insert-footnote',
		content: 'insert-footnote',
		enable: canInsert( schema.nodes.footnote ),
		run: ( state, dispatch ) => {
			const footnote = schema.nodes.footnote.create();
			dispatch( state.tr.replaceSelectionWith( footnote ) );
		}
	},
	{
		title: 'insert-figure-caption',
		content: 'insert-figure-caption',
		enable: isEmptySelectionForInsertion,
		run: ( state, dispatch ) => {
			const figureCaption = schema.nodes.figureCaption.create();
			dispatch( state.tr.replaceSelectionWith( figureCaption ) );
		}
	},
	{
		title: 'insert-table-caption',
		content: 'insert-table-caption',
		enable: isEmptySelectionForInsertion,
		run: ( state, dispatch ) => {
			const tableCaption = schema.nodes.tableCaption.create();
			dispatch( state.tr.replaceSelectionWith( tableCaption ) );
		}
	},
	{
		title: 'insert-code-block',
		content: 'insert-code-block',
		enable: canInsert( schema.nodes.code_block ),
		run: ( state, dispatch ) => {
			const footnote = schema.nodes.code_block.create();
			dispatch( state.tr.replaceSelectionWith( footnote ) );
		}
	}
];

export const history = [
	{
		title: 'undo-last-change',
		content: icons.undo,
		enable: undo,
		run: undo,
		hotkey: 'Ctrl+Z'
	},
	{
		title: 'redo-last-undone-change',
		content: icons.redo,
		enable: redo,
		run: redo,
		hotkey: 'Ctrl+Y'
	},
	{
		title: 'select-parent-node',
		content: icons.selectParent,
		run: selectParentNode,
		select: state => selectParentNode( state ),
		hotkey: 'Escape'
	}
];

export const tableEdits = [
	new TableInsertCommand(),
	{
		title: 'insert-column-before',
		content: 'insert-column-before',
		run: addColumnBefore
	},
	{
		title: 'insert-column-after',
		content: 'insert-column-after',
		run: addColumnAfter
	},
	{
		title: 'insert-row-before',
		content: 'insert-row-before',
		run: addRowBefore
	},
	{
		title: 'insert-row-after',
		content: 'insert-row-after',
		run: addRowAfter
	},
	{
		title: 'delete-column',
		content: 'delete-column',
		run: deleteColumn
	},
	{
		title: 'delete-row',
		content: 'delete-row',
		run: deleteRow
	},
	{
		title: 'merge-cells',
		content: 'merge-cells',
		run: mergeCells
	},
	{
		title: 'split-cells',
		content: 'split-cells',
		run: splitCell
	},
	{
		title: 'toggle-header-column',
		content: 'toggle-header-column',
		run: toggleHeaderColumn
	},
	{
		title: 'toggle-header-row',
		content: 'toggle-header-row',
		run: toggleHeaderRow
	},
	{
		title: 'delete-table',
		content: 'delete-table',
		run: deleteTable
	}
];


// MAIN //

const menu = {
	marks,
	extraMarks,
	blocks,
	headers,
	alignment: textAlignment,
	wraps,
	fontSizes: FONT_SIZES.map( pt => {
		return {
			title: String( pt ),
			content: String( pt ),
			run: fontSizeFactory( pt ),
			enable: isFontEnabled
		};
	}),
	actions,
	insert,
	history,
	tableEdits
};


// EXPORTS //

export default menu;
