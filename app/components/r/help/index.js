// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';


// MAIN //

class RHelp extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			visible: this.props.visible,
			body: ''
		};

		this.hideModal = () => {
			this.setState({
				visible: false
			});
		},

		this.showModal = () => {
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

		};
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
					style={{
						left: 'auto',
						padding: '10px',
						position: 'fixed',
						top: '10px',
						right: '30px',
						zIndex: 99999,
						overflow: 'hidden'
					}}
					enforceFocus={false}
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg">R Help</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{
						height: '400',
						overflow: 'auto'
					}}>
						<span dangerouslySetInnerHTML={{ __html: this.state.body }}></span>
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


// PROPERTY TYPES //

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
