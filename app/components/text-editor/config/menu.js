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


// FUNCTIONS //

const isEnabled = ( state ) => {
	const { selection } = state;
	return (
		selection instanceof TextSelection || selection instanceof AllSelection
	);
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

const promptForURL = () => {
	let url = window && window.prompt( 'Enter the URL', 'https://' );
	if ( url && !/^https?:\/\//i.test(url) ) {
		url = 'http://' + url;
	}
	return url;
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


// MAIN //

const menu = {
	marks: [
		{
			title: 'Strong',
			content: icons.strong,
			enable: isEnabled,
			active: markActive( schema.marks.strong ),
			run: toggleMark( schema.marks.strong )
		},
		{
			title: 'Emphasis',
			content: icons.em,
			enable: isEnabled,
			active: markActive( schema.marks.em ),
			run: toggleMark( schema.marks.em )
		},
		{
			title: 'Underline',
			content: icons.underline,
			enable: isEnabled,
			active: markActive( schema.marks.underline ),
			run: toggleMark( schema.marks.underline )
		}
	],
	extraMarks: [
		{
			title: 'Strikethrough',
			content: icons.strikethrough,
			enable: isEnabled,
			active: markActive( schema.marks.strikethrough ),
			run: toggleMark( schema.marks.strikethrough )
		},
		{
			title: 'Code',
			content: icons.code,
			enable: isEnabled,
			active: markActive( schema.marks.code ),
			run: toggleMark( schema.marks.code )
		},
		{
			title: 'Subscript',
			content: icons.subscript,
			enable: isEnabled,
			active: markActive( schema.marks.subscript ),
			run: toggleMark( schema.marks.subscript )
		},
		{
			title: 'Superscript',
			content: icons.superscript,
			enable: isEnabled,
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
			active: activeHeadingFactory( 1 ),
			enable: setBlockType( schema.nodes.heading, { level: 1 } ),
			run: setBlockType( schema.nodes.heading, { level: 1 } )
		},
		{
			title: 'Change to heading 2',
			content: 'H2',
			active: activeHeadingFactory( 2 ),
			enable: setBlockType( schema.nodes.heading, { level: 2 } ),
			run: setBlockType( schema.nodes.heading, { level: 2 } )
		}
	],
	headers: [
		{
			title: 'Change to heading 3',
			content: 'Heading 3',
			enable: setBlockType( schema.nodes.heading, { level: 3 } ),
			run: setBlockType( schema.nodes.heading, { level: 3 } )
		},
		{
			title: 'Change to heading 4',
			content: 'Heading 4',
			enable: setBlockType( schema.nodes.heading, { level: 4 } ),
			run: setBlockType( schema.nodes.heading, { level: 4 } )
		},
		{
			title: 'Change to heading 5',
			content: 'Heading 5',
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
	fontSizes: FONT_SIZES.map( pt => {
		return {
			title: String( pt ),
			content: String( pt ),
			run: fontSizeFactory( pt ),
			enable: isFontEnabled
		};
	}),
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
			title: 'Insert code block',
			content: 'Insert code block',
			enable: canInsert( schema.nodes.code_block ),
			run: ( state, dispatch ) => {
				const footnote = schema.nodes.code_block.create();
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
