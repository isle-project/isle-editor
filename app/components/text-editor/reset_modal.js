// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
			size="small"
		>
			<Modal.Header closeButton>
				<Modal.Title>{this.props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{this.props.body}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={this.handleClick} block>{this.props.buttonLabel}</Button>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTIES //

ResetModal.propTypes = {
	show: PropTypes.bool.isRequired,
	title: PropTypes.string,
	body: PropTypes.string,
	buttonLabel: PropTypes.string,
	onHide: PropTypes.func,
	onSubmit: PropTypes.func
};

ResetModal.defaultProps = {
	title: 'Reset Report',
	body: 'Are you sure you want to reset the editor contents to their default value? This action is irreversible and all your work will be lost unless you saved the Markdown source file.',
	buttonLabel: 'Reset',
	onHide() {},
	onSubmit() {}
};


// EXPORTS //

export default ResetModal;
