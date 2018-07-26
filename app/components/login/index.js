// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import Overlay from 'react-bootstrap/lib/Overlay';
import Modal from 'react-bootstrap/lib/Modal';
import Popover from 'react-bootstrap/lib/Popover';
import PropTypes from 'prop-types';
import './login.css';


// MAIN //

class Login extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			email: '',
			password: '',
			show: props.show
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.show !== prevState.show ) {
			return {
				email: '',
				password: '',
				show: nextProps.show
			};
		}
		return null;
	}

	handleInputChange = ( event ) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[ name ]: value
		});
	}

	handleForgotPassword = ( event ) => {
		event.preventDefault();
		if ( this.state.email === '' ) {
			this.setState({
				showInputOverlay: true,
				overlayTarget: this.emailInput,
				invalidInputMessage: 'Enter your email address.	'
			});
		} else {
			const { session } = this.context;
			session.forgotPassword( this.state.email );
		}
	}

	hideAfterDelay = () => {
		setTimeout( () => {
			this.setState({
				showInputOverlay: false
			});
		}, 2000 );
	}

	handleSubmit = ( event ) => {
		event.preventDefault();
		let form = {
			password: this.state.password,
			email: this.state.email
		};
		if ( form.email === '' ) {
			this.setState({
				showInputOverlay: true,
				overlayTarget: this.emailInput,
				invalidInputMessage: 'Enter your email address.	'
			}, this.hideAfterDelay );
		}
		else if ( form.password === '' ) {
			this.setState({
				showInputOverlay: true,
				overlayTarget: this.passwordInput,
				invalidInputMessage: 'Enter your password.'
			}, this.hideAfterDelay );
		}
		else {
			const { session } = this.context;
			session.login( form, ( err, res, body ) => {
				if ( !err ) {
					const { message, type } = body;
					if ( message === 'ok' ) {
						this.props.onClose();
					} else {
						this.setState({
							showInputOverlay: true,
							overlayTarget: type === 'no_user' ? this.emailInput : this.passwordInput,
							invalidInputMessage: message
						}, this.hideAfterDelay );
					}
				}
			});
		}
	}

	render() {
		return (
			<Modal show={this.props.show} className="login-modal" >
				<Modal.Header>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form horizontal>
						<FormGroup controlId="formHorizontalEmail">
							<Col componentClass={ControlLabel} sm={2}>
								Email
							</Col>
							<Col sm={10}>
								<FormControl
									name="email"
									type="email"
									placeholder="Email"
									onChange={this.handleInputChange}
									ref={( input ) => { this.emailInput = input; }}
								/>
							</Col>
						</FormGroup>
						<FormGroup controlId="formHorizontalPassword">
							<Col componentClass={ControlLabel} sm={2}>
								Password
							</Col>
							<Col sm={10}>
								<FormControl
									name="password"
									type="password"
									placeholder="Password"
									onChange={this.handleInputChange}
									ref={( input ) => { this.passwordInput = input; }}
								/>
							</Col>
						</FormGroup>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<a href="" style={{ float: 'left', marginTop: '8px' }} onClick={this.handleForgotPassword}>Forgot password?</a>
					<Button
						bsStyle="primary"
						type="submit"
						onClick={this.handleSubmit}
					>Sign in</Button>
					<Button onClick={this.props.onClose}>Close</Button>
				</Modal.Footer>
				<Overlay
					show={this.state.showInputOverlay}
					target={this.state.overlayTarget}
					placement="top"
					container={this}
					containerPadding={20}
				>
					<Popover id="popover-contained" title="Not valid">
						{this.state.invalidInputMessage}
					</Popover>
				</Overlay>
			</Modal>
		);
	}
}

// TYPES //

Login.contextTypes = {
	session: PropTypes.object
};

Login.defaultProps = {
	onClose() {},
	show: false
};

Login.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool
};


// EXPORTS //

export default Login;
