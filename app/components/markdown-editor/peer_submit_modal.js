// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';


// MAIN //

class PeerSubmitModal extends Component {
	clickHide = () => {
		this.props.onHide();
	}

	handleSubmissionToReviewer = () => {
		this.props.onSubmitToReviewer();
		this.props.onHide();
	}

	handleSubmissionComments = () => {
		this.props.onSubmitComments();
		this.props.onHide();
	}

	render() {
		return ( <Modal
			onHide={this.clickHide}
			show={this.props.show}
			dialogClassName="modal-60w"
		>
			<Modal.Header closeButton>
				<Modal.Title>Peer Review Submission</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				To send your report to the individual review it, click the left-hand button that reads &ldquo;Submit to Reviewer&rdquo;. If you are sending comments to an individual, click the right-hand button entitled &ldquo;Send Review Comments&rdquo;.
			</Modal.Body>
			<Modal.Footer>
				<Button variant="success" disabled={this.props.disabledSubmitButton} onClick={this.handleSubmissionToReviewer}>{this.props.submitButtonLabel}</Button>
				<Button variant="success" disabled={this.props.disabledReviewButton} onClick={this.handleSubmissionComments}>{this.props.reviewButtonLabel}</Button>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTY TYPES //

PeerSubmitModal.propTypes = {
	onHide: PropTypes.func,
	disabledSubmitButton: PropTypes.bool,
	disabledReviewButton: PropTypes.bool,
	onSubmitToReviewer: PropTypes.func,
	onSubmitComments: PropTypes.func,
	submitButtonLabel: PropTypes.string,
	reviewButtonLabel: PropTypes.string,
	show: PropTypes.bool.isRequired
};

PeerSubmitModal.defaultProps = {
	submitButtonLabel: 'Submit to Reviewer',
	reviewButtonLabel: 'Send Review Comments',
	disabledSubmitButton: false,
	disabledReviewButton: false,
	onHide() {},
	onSubmitToReviewer() {},
	onSubmitComments() {}
};


// EXPORTS //

export default PeerSubmitModal;
