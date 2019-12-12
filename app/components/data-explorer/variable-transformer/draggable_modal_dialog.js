// MODULES //

import React, { Component } from 'react';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Draggable from 'components/draggable';


// MAIN //

class DraggableModalDialog extends Component {
	render() {
		return (
			<Draggable handle=".modal-header">
				<ModalDialog {...this.props} />
			</Draggable>
		);
	}
}


// EXPORTS //

export default DraggableModalDialog;
