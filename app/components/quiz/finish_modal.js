// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';


// MAIN //

class FinishModal extends Component {
	clickHide = () => {
		this.props.onHide();
	}

	handleClick = () => {
		this.props.onSubmit();
		this.props.onHide();
	}

	render() {
		return ( <Modal
			onHide={this.clickHide}
			show={this.props.show}
			container={this.props.container}
			dialogClassName="modal-w30"
		>
			<Modal.Header closeButton>
				<Modal.Title as="h4">Finish?</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Are you sure you want to finish and jump to the end before answering all the questions?
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={this.clickHide} >Cancel</Button>
				<Button variant="warning" onClick={this.handleClick} >Confirm</Button>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTY TYPES //

FinishModal.propTypes = {
	container: PropTypes.object.isRequired,
	onHide: PropTypes.func,
	onSubmit: PropTypes.func,
	show: PropTypes.bool.isRequired
};

FinishModal.defaultProps = {
	onHide() {},
	onSubmit() {}
};


// EXPORTS //

export default FinishModal;
