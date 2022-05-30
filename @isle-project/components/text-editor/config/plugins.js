// MODULES //

import { dropCursor } from 'prosemirror-dropcursor';
import { gapCursor } from 'prosemirror-gapcursor';
import { history } from 'prosemirror-history';
import { columnResizing, tableEditing } from 'prosemirror-tables';
import 'prosemirror-tables/style/tables.css';
import LinkTooltipPlugin from './link_tooltip_plugin.js';
import SelectionPlaceholderPlugin from './selection_placeholder_plugin.js';
import CursorPlaceholderPlugin from './cursor_placeholder_plugin.js';
import ImageUploadPlaceholderPlugin from './image_upload_placeholder_plugin.js';
import TableCellMenuPlugin from './table_cell_menu_plugin.js';
import cursorParking from './cursor_parking.js';
import keys from './keys.js';
import rules from './rules.js';
import './gapcursor.css';


// EXPORTS //

export default [
	new ImageUploadPlaceholderPlugin(),
	new LinkTooltipPlugin(),
	new SelectionPlaceholderPlugin(),
	new CursorPlaceholderPlugin(),
	rules,
	keys,
	dropCursor(),
	gapCursor(),
	history(),
	columnResizing({}),
	new TableCellMenuPlugin(),
	tableEditing(),
	cursorParking()
];

// Commands for tables:
document.execCommand( 'enableObjectResizing', false, false );
document.execCommand( 'enableInlineTableEditing', false, false );
