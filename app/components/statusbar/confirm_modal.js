// MODULES //

import React from 'react';
import { Button, Modal } from 'react-bootstrap';


// MAIN //

const ConfirmModal = ( props ) => (
	<Modal show={props.show} onHide={props.close}>
		<Modal.Header>
			<Modal.Title>{props.title}</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			{props.message}
		</Modal.Body>
		<Modal.Footer>
			<Button onClick={props.close}>Cancel</Button>
			<Button bsStyle="danger" onClick={props.onConfirm}>Confirm</Button>
		</Modal.Footer>
	</Modal>
);


// EXPORTS //

export default ConfirmModal;
