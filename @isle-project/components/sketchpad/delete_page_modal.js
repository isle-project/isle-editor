// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';


// MAIN //

class DeletePageModal extends Component {
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
				<Modal.Title as="h4">{this.props.t('clear-page')}?</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{this.props.t('clear-page-modal-body')}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={this.handleClick} block>
					{this.props.t('clear')}
				</Button>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTIES //

DeletePageModal.propTypes = {
	onHide: PropTypes.func,
	onSubmit: PropTypes.func,
	show: PropTypes.bool.isRequired
};

DeletePageModal.defaultProps = {
	onHide() {},
	onSubmit() {}
};


// EXPORTS //

export default DeletePageModal;
