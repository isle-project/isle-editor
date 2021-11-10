// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';


// MAIN //

class SubmitModal extends Component {
	clickHide = () => {
		this.props.onHide();
	};

	handleSubmission = () => {
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
				<Modal.Title>{this.props.t('submit-report')}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{this.props.t('submit-report-msg')}
			</Modal.Body>
			<Modal.Footer>
				<div className="d-grid" >
					<Button variant="success" onClick={this.handleSubmission} >{this.props.t('submit')}</Button>
				</div>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTIES //

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
