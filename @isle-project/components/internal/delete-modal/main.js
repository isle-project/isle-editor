// MODULES //

import React from 'react';
import { withTranslation } from 'react-i18next';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


// MAIN //

/**
 * A React component which displays a modal dialog prompting the user to confirm a deletion.
 *
 * @param {Object} props - component properties
 * @param {boolean} props.show - boolean indicating whether the modal is visible
 * @param {Function} props.onClose - callback invoked upon closing the modal
 * @param {Function} props.onDelete - callback invoked upon deleting the item
 * @returns {ReactElement} modal dialog
 */
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
