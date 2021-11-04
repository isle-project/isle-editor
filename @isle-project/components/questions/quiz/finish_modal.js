// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';


// MAIN //

class FinishModal extends Component {
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
			dialogClassName="modal-w30"
		>
			<Modal.Header closeButton>
				<Modal.Title as="h4">{this.props.t('finish')}?</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{this.props.t('finish-prompt')}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={this.clickHide} >{this.props.t('cancel')}</Button>
				<Button variant="warning" onClick={this.handleClick} >{this.props.t('confirm')}</Button>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTIES //

FinishModal.propTypes = {
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
