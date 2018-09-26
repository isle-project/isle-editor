// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import PropTypes from 'prop-types';


// MAIN //

class SubmitModal extends Component {
	clickHide = () => {
		this.props.onHide();
	}

	handleSubmission = () => {
		this.props.onSubmit();
		this.props.onHide();
	}

	render() {
		return ( <Modal
			onHide={this.clickHide}
			show={this.props.show}
			size="small"
		>
			<Modal.Header closeButton>
				<Modal.Title>Submit Report</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Click the button to submit your report. This action cannot be undone, although additional versions of the report may be submitted.
			</Modal.Body>
			<Modal.Footer>
				<Button variant="success" onClick={this.handleSubmission} block>Submit</Button>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTY TYPES //

SubmitModal.propTypes = {
	onHide: PropTypes.func,
	onSubmit: PropTypes.func,
	show: PropTypes.bool.isRequired
};

SubmitModal.defaultProps = {
	onHide() {},
	onSubmit() {}
};


// EXPORTS //

export default SubmitModal;
