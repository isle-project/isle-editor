// MODULES //

import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// MAIN //

const AlertModal = ( props ) => (
	<Modal show={props.show} onHide={props.close}>
		<Modal.Header>
			<Modal.Title>
				<i className="fas fa-phone-square-alt" style={{ marginRight: 6 }} />
				{props.title}
			</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			{props.message}
		</Modal.Body>
		<Modal.Footer>
			<Button onClick={props.close}>{props.t( 'confirm' )}</Button>
		</Modal.Footer>
	</Modal>
);


// PROPERTIES //

AlertModal.propTypes = {
	close: PropTypes.func.isRequired,
	message: PropTypes.string.isRequired,
	show: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired
};


// EXPORTS //

export default withTranslation( 'internal/alert-modal' )( AlertModal );
