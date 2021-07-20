// MODULES //

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import removeLast from '@stdlib/string/remove-last';


// FUNCTIONS //

/**
 * Returns a time string.
 *
 * @private
 * @param {number} absoluteTime - the absolute time of the action in milliseconds
 * @returns {string} a string date representation of the time
 */
function toTimeString( absoluteTime ) {
	const date = new Date( absoluteTime );
	return `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
}


// MAIN //

/**
 * Creates a modal dialog for displaying a single action.
 */
const SingleActionModal = ( props ) => {
	return (
		<Modal
			show={props.show}
			onHide={props.onHide}
			dialogClassName="modal-75w"
			backdropClassName="modal-backdrop-second-order"
			style={{
				minHeight: '300px',
				boxShadow: '0 0 10px black',
				fontSize: '2em',
				zIndex: 2000
			}}
		>
			<Modal.Header closeButton>
				<Modal.Title as="h3">
					{removeLast( props.actionLabel) }
					{ props.showExtended ? ` ${props.t('from')} ${props.modalContent.name}`: ''}
					{props.t('on')}
					{toTimeString( props.modalContent.absoluteTime )}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ overflowY: 'scroll', maxHeight: 0.8 * window.innerHeight }} >
				<span className="response-visualizer-action-model-text">
					{props.modalContent.value}
				</span>
			</Modal.Body>
		</Modal>
	);
};


// EXPORTS //

export default SingleActionModal;
