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
			dialogClassName="modal-w30"
		>
			<Modal.Header closeButton>
				<Modal.Title as="h4">{this.props.t('reset-sketchpad')}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{this.props.t('reset-modal-body')}
			</Modal.Body>
			<Modal.Footer>
				<div className="d-grid" >
					<Button variant="danger" onClick={this.handleClick} >
						{this.props.t('reset')}
					</Button>
				</div>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTIES //

ResetModal.propTypes = {
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
