// MODULES //

import React from 'react';
import i18next from 'i18next';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import icons from './../icons.js';
import menu from './../menu.js';


// MAIN //

class TableCellMenu extends React.PureComponent {
	onMenuMouseDown = ( item ) => e => {
		e.preventDefault();
		if ( item.run ) {
			item.run(
				this.props.editorState,
				this.props.editorView.dispatch,
				this.props.editorView,
				e.nativeEvent
			);
		}
	}

	createDropdownButtons = ( item, itemKey ) => (
		<DropdownItem
			key={`dropdown-item-${itemKey}`}
			onMouseDown={this.onMenuMouseDown(item)}
		>{i18next.t( `text-editor:${item.content}` )}</DropdownItem>
	)

	render() {
		return (
			<DropdownButton
				title={icons.table}
				variant="outline-secondary"
				size="sm" style={{ display: 'inline-block' }}
			>
				{menu.tableEdits.map( this.createDropdownButtons )}
			</DropdownButton>
		);
	}
}


// EXPORTS //

export default TableCellMenu;
