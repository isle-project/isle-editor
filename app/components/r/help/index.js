// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import './rhelp.css';


// MAIN //

/**
* Make words pull up R documentation in a modal window when clicked.
*
* @property {Function} func - name of the `R function` for which to open the documentation. If not supplied, the content of the `RHelp` tag is assumed to be equal to the name of the function
* @property {string} library - name of the R package in which the function resides
* @property {boolean} visible - controls whether the help modal window should be opened at startup
*/
class RHelp extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			visible: this.props.visible,
			body: ''
		};
	}

	hideModal = () => {
		this.setState({
			visible: false
		});
	}

	showModal = () => {
		const functionName = this.props.func || this.props.children;
		if ( this.state.body === '' ) {
			const { session } = this.context;
			session.getRHelp( this.props.library, functionName, ( error, response, body ) => {
				if ( !error ) {
					this.setState({
						body,
						visible: true
					});
				}
			});
		}
		else {
			this.setState({
				visible: !this.state.visible
			});
		}
	}

	render() {
		return (
			<span
				className="RHelp"
				onClick={this.showModal}
			>
				<Modal
					backdrop={false}
					show={this.state.visible}
					title="R Help"
					onHide={this.hideModal}
					className="r-help-modal"
					enforceFocus={false}
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg">R Help</Modal.Title>
					</Modal.Header>
					<Modal.Body className="r-help-modal-body" >
						<span dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
							__html: this.state.body
						}}></span>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.hideModal}>Close</Button>
					</Modal.Footer>
				</Modal>
				<code style={{ cursor: 'pointer' }}>{this.props.children || this.props.func}</code>
			</span>
		);
	}
}


// PROPERTIES //

RHelp.propTypes = {
	func: PropTypes.string,
	library: PropTypes.string,
	visible: PropTypes.bool
};

RHelp.contextTypes = {
	session: PropTypes.object
};


// DEFAULT PROPERTIES //

RHelp.defaultProps = {
	func: '',
	library: 'base',
	visible: false
};


// EXPORTS //

export default RHelp;
