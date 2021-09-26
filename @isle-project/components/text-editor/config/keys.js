// MODULES //

import {
	baseKeymap,
	chainCommands,
	exitCode,
	joinDown,
	joinUp,
	lift,
	selectParentNode,
	setBlockType,
	toggleMark,
	wrapIn
} from 'prosemirror-commands';
import { redo, undo } from 'prosemirror-history';
import { undoInputRule } from 'prosemirror-inputrules';
import { keymap } from 'prosemirror-keymap';
import {
	liftListItem, sinkListItem, splitListItem, wrapInList
} from 'prosemirror-schema-list';
import { goToNextCell } from 'prosemirror-tables';
import objectKeys from '@stdlib/utils/keys';
import { alignLeft, alignCenter, alignRight, alignJustify } from './text_alignment';
import schema from './schema';


// FUNCTIONS //

const insertBreak = ( state, dispatch ) => {
	const br = schema.nodes.hard_break.create();
	dispatch( state.tr.replaceSelectionWith( br ).scrollIntoView() );
	return true;
};

const insertRule = ( state, dispatch ) => {
	const hr = schema.nodes.horizontal_rule.create();
	dispatch( state.tr.replaceSelectionWith( hr ).scrollIntoView() );
	return true;
};


// VARIABLES //

const keys = {
	'Alt-ArrowDown': joinDown,
	'Alt-ArrowUp': joinUp,
	'Ctrl-Enter': chainCommands( exitCode, insertBreak ),
	'Mod->': wrapIn( schema.nodes.blockquote ),
	'Mod-_': insertRule,
	'Mod-[': liftListItem( schema.nodes.list_item ),
	'Mod-]': sinkListItem( schema.nodes.list_item ),
	'Mod-b': toggleMark( schema.marks.strong ),
	'Mod-BracketLeft': lift,
	'Mod-Enter': chainCommands( exitCode, insertBreak ),
	'Mod-i': toggleMark( schema.marks.em ),
	'Mod-u': toggleMark( schema.marks.underline ),
	'Mod-m': toggleMark( schema.marks.code ),
	'Mod-l': toggleMark( schema.marks.subscript ),
	'Mod-s': toggleMark( schema.marks.strikethrough ),
	'Mod-p': toggleMark( schema.marks.superscript ),
	'Mod-y': redo,
	'Mod-z': undo,
	'Shift-Ctrl-\\': setBlockType( schema.nodes.code_block ),
	'Shift-Ctrl-0': setBlockType( schema.nodes.paragraph ),
	'Shift-Ctrl-1': setBlockType( schema.nodes.heading, { level: 1 }),
	'Shift-Ctrl-2': setBlockType( schema.nodes.heading, { level: 2 }),
	'Shift-Ctrl-3': setBlockType( schema.nodes.heading, { level: 3 }),
	'Shift-Ctrl-4': setBlockType( schema.nodes.heading, { level: 4 }),
	'Shift-Ctrl-5': setBlockType( schema.nodes.heading, { level: 5 }),
	'Shift-Ctrl-6': setBlockType( schema.nodes.heading, { level: 6 }),
	'Shift-Ctrl-8': wrapInList( schema.nodes.bullet_list ),
	'Shift-Ctrl-9': wrapInList( schema.nodes.ordered_list ),
	'Shift-Enter': chainCommands( exitCode, insertBreak ),
	'Alt-Ctrl-l': alignLeft,
	'Alt-Ctrl-r': alignRight,
	'Alt-Ctrl-c': alignCenter,
	'Alt-Ctrl-j': alignJustify,
	'Shift-Mod-z': redo,
	'Shift-Tab': goToNextCell(-1),
	Backspace: undoInputRule,
	Enter: splitListItem( schema.nodes.list_item ),
	Escape: selectParentNode,
	Tab: goToNextCell(1)
};


// MAIN //

objectKeys( baseKeymap ).forEach( key => {
	if ( keys[ key ] ) {
		keys[ key ] = chainCommands( keys[ key ], baseKeymap[ key ] );
	} else {
		keys[ key ] = baseKeymap[ key ];
	}
});


// EXPORTS //

export default keymap( keys );
