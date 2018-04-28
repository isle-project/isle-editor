// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';


// MAIN //

const SaveModal = ( props ) => {
	return ( <Modal
		onHide={props.onHide}
		show={props.show}
	>
		<Modal.Header closeButton>
			<Modal.Title>Save Report</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<div className="well">
				<Button onClick={props.exportHTML} bsStyle="primary" bsSize="large" block>
					Save as HTML
				</Button>
				<Button onClick={props.exportPDF} bsStyle="primary" bsSize="large" block>
					Save as PDF
				</Button>
				<Button onClick={props.saveMarkdown} bsSize="large" block>
					Save Markdown Source (to restore later)
				</Button>
			</div>
		</Modal.Body>
	</Modal> );
};


// PROPERTY TYPES //

SaveModal.propTypes = {
	exportHTML: PropTypes.func.isRequired,
	exportPDF: PropTypes.func.isRequired,
	onHide: PropTypes.func,
	saveMarkdown: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired
};

SaveModal.defaultProps = {
	onHide() {}
};


// EXPORTS //

export default SaveModal;
