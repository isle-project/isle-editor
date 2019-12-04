// MODULES //

import React from 'react';
import { EditorState, Plugin } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

import { atAnchorTopRight } from './ui/PopUpPosition';
import TableCellMenu from './ui/TableCellMenu';
import bindScrollHandler from './ui/bindScrollHandler';
import createPopUp from './ui/createPopUp';
import isElementFullyVisible from './ui/isElementFullyVisible';
import { tableEdits } from './menu.js';

import './ui/czi-pop-up.css';


// FUNCTIONS //

function findActionableCellFromSelection(selection: CellSelection): ?Result {
	const {$anchorCell} = selection;
	const start = $anchorCell.start(-1);
	const table = $anchorCell.node(-1);
	const tableMap = TableMap.get(table);
	let topRightRect;
	let posFound = null;
	let nodeFound = null;
	selection.forEachCell((cell, cellPos) => {
	  const cellRect = tableMap.findCell(cellPos - start);
	  if (
		!topRightRect ||
		(cellRect.top >= topRightRect.top && cellRect.left > topRightRect.left)
	  ) {
		topRightRect = cellRect;
		posFound = cellPos;
		nodeFound = cell;
	  }
	});

	return posFound === null
	  ? null
	  : {
		  node: nodeFound,
		  pos: posFound,
		};
}

function findActionableCell(state: EditorState): ?Result {
	const {doc, selection, schema} = state;
	const tdType = schema.nodes[TABLE_CELL];
	const thType = schema.nodes[TABLE_HEADER];
	if (!tdType && !thType) {
	  return null;
	}

	let userSelection = selection;

	if (userSelection instanceof TextSelection) {
	  const {from, to} = selection;
	  if (from !== to) {
		return null;
	  }
	  const result =
		(tdType && findParentNodeOfType(tdType)(selection)) ||
		(thType && findParentNodeOfType(thType)(selection));

	  if (!result) {
		return null;
	  }

	  userSelection = CellSelection.create(doc, result.pos);
	}

	if (userSelection instanceof CellSelection) {
	  return findActionableCellFromSelection(userSelection);
	}

	return null;
  }


// @flow
import {EditorState} from 'prosemirror-state';
import {EditorView} from 'prosemirror-view';
import React from 'react';

import CommandMenuButton from './CommandMenuButton';
import {TABLE_COMMANDS_GROUP} from './EditorToolbarConfig';
import Icon from './Icon';

import './czi-table-cell-menu.css';

class TableCellMenu extends React.PureComponent<any, any, any> {
  _menu = null;

  const onMenuMouseDown = ( item ) => e => {
	e.preventDefault();
		if ( item.run ) {
			debug( 'Run command', item, e );
			item.run( state, dispatch, view, e.nativeEvent );
		}
};

const createDropdownButtons = ( item, itemKey ) => (
	<DropdownItem
		key={`dropdown-item-${itemKey}`}
		onMouseDown={onMenuMouseDown(item)}
	>{item.content}</DropdownItem>
);

  render() {
    const {editorState, editorView} = this.props;
    return (
		<DropdownButton
			title={icons.table}
			variant="outline-secondary"
			size="sm" style={{ display: 'inline-block' }}
		>
			{tableEdits.map( createDropdownButtons )}
		</DropdownButton>
    );
  }
}

export default TableCellMenu;

// MAIN //

class TableCellTooltipView {
  _cellElement: null;
  _popUp = null;
  _scrollHandle = null;

  constructor(editorView: EditorView) {
    this.update(editorView, null);
  }

  update(view, lastState): void {
    const {state, readOnly} = view;
    const result = findActionableCell(state);

    if (!result || readOnly) {
      this.destroy();
      return;
    }

    // These is screen coordinate.
    const domFound = view.domAtPos(result.pos + 1);
    if (!domFound) {
      this.destroy();
      return;
    }

    let cellEl = domFound.node;
    const popUp = this._popUp;
    const viewPops = {
      editorState: state,
      editorView: view,
    };

    if (cellEl && !isElementFullyVisible(cellEl)) {
      cellEl = null;
    }

    if (!cellEl) {
      // Closes the popup.
      popUp && popUp.close();
      this._cellElement = null;
    } else if (popUp && cellEl === this._cellElement) {
      // Updates the popup.
      popUp.update(viewPops);
    } else {
      // Creates a new popup.
      popUp && popUp.close();
      this._cellElement = cellEl;
      this._popUp = createPopUp(TableCellMenu, viewPops, {
        anchor: cellEl,
        autoDismiss: false,
        onClose: this._onClose,
        position: atAnchorTopRight,
      });
      this._onOpen();
    }
  }

  destroy = () => {
    this._popUp && this._popUp.close();
    this._popUp = null;
  };

  _onOpen = () => {
    const cellEl = this._cellElement;
    if (!cellEl) {
      return;
    }
    this._scrollHandle = bindScrollHandler(cellEl, this._onScroll);
  };

  _onClose = () => {
    this._popUp = null;
    this._scrollHandle && this._scrollHandle.dispose();
    this._scrollHandle = null;
  };

  _onScroll = () => {
    const popUp = this._popUp;
    const cellEl = this._cellElement;
    if (!popUp || !cellEl) {
      return;
    }
    if (!isElementFullyVisible(cellEl)) {
      popUp.close();
    }
  };
}

// https://prosemirror.net/examples/tooltip/
const SPEC = {
	view( editorView ) {
		return new TableCellTooltipView(editorView);
	}
};

class TableCellMenuPlugin extends Plugin {
	constructor() {
		super( SPEC );
	}
}


// EXPORTS //

export default TableCellMenuPlugin;
