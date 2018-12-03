// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
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
			size="small"
		>
			<Modal.Header closeButton>
				<Modal.Title>Peer Review Submission</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				To send your report to the individual review it, click the left-hand button that reads &ldquo;Submit to Reviewer&rdquo;. If you are sending comments to an individual, click the right-hand button entitled &ldquo;Send Review Comments&rdquo;.
			</Modal.Body>
			<Modal.Footer>
				<Button variant="success" onClick={this.handleSubmissionToReviewer}>Submit to Reviewer</Button>
				<Button variant="success" onClick={this.handleSubmissionComments}>Send Review Comments</Button>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTY TYPES //

PeerSubmitModal.propTypes = {
	onHide: PropTypes.func,
	onSubmitToReviewer: PropTypes.func,
	onSubmitComments: PropTypes.func,
	show: PropTypes.bool.isRequired
};

PeerSubmitModal.defaultProps = {
	onHide() {},
	onSubmitToReviewer() {},
	onSubmitComments() {}
};


// EXPORTS //

export default PeerSubmitModal;
