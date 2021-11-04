// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';


// MAIN //

class ResetModal extends Component {
	clickHide = () => {
		this.props.onHide();
	};

	handleClick = () => {
		this.props.onSubmit();
		this.props.onHide();
	};

	render() {
		return ( <Modal
			onHide={this.clickHide}
			show={this.props.show}
			size="small"
		>
			<Modal.Header closeButton>
				<Modal.Title>{this.props.title || this.props.t('reset-modal-title')}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{this.props.body || this.props.t('reset-modal-body')}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={this.handleClick} block>
					{this.props.buttonLabel || this.props.t('reset-modal-button-label')}
				</Button>
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
	title: null,
	body: null,
	buttonLabel: null,
	onHide() {},
	onSubmit() {}
};


// EXPORTS //

export default ResetModal;
