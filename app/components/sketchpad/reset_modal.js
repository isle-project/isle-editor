// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import PropTypes from 'prop-types';


// MAIN //

class ResetModal extends Component {
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
				<Modal.Title as="h4">Reset Sketchpad</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Are you sure you want to reset the sketchpad contents to their default value? This action is irreversible and all your work will be lost unless you saved it.
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={this.handleClick} block>Reset</Button>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTY TYPES //

ResetModal.propTypes = {
	container: PropTypes.object.isRequired,
	onHide: PropTypes.func,
	onSubmit: PropTypes.func,
	show: PropTypes.bool.isRequired
};

ResetModal.defaultProps = {
	onHide() {},
	onSubmit() {}
};


// EXPORTS //

export default ResetModal;
