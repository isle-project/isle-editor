// MODULES //

import React from 'react';
import { withTranslation } from 'react-i18next';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


// MAIN //

const DeleteModal = ( props ) => {
	return ( <Modal
		show={props.show}
		style={{ zIndex: 2000 }}
		backdropClassName="modal-backdrop-second-order"
	>
		<Modal.Header>
			<Modal.Title>{props.t('delete-title')}</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			{props.t('delete-body')}
		</Modal.Body>
		<Modal.Footer>
			<Button onClick={props.onClose}>{props.t('cancel')}</Button>
			<Button
				variant="warning"
				onClick={props.onDelete}
			>
				{props.t('delete')}
			</Button>
		</Modal.Footer>
	</Modal> );
};


// EXPORTS //

export default withTranslation( 'internal/delete-modal' )( DeleteModal );
