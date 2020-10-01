// MODULES //

import React, { Component } from 'react';
import ReactDraggable from 'react-draggable';
import Panel from 'components/panel';
import './keyboard_help.css';


// MAIN //

/**
* An ISLE component that shows information about editor keyboard shortcuts
*/
class KeyboardHelp extends Component {
	render() {
		return (
			<ReactDraggable cancel=".cancel" >
				<Panel
					header="Editor Keyboard Shortcuts"
					className="keyboard-helper"
					onHide={this.props.onHide}
				>
				</Panel>
			</ReactDraggable>
		);
	}
}


// EXPORTS //

export default KeyboardHelp;

