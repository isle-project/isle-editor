// MODULES //

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Form from 'react-bootstrap/Form';
import Overlay from 'react-bootstrap/Overlay';
import Modal from 'react-bootstrap/Modal';
import Popover from 'react-bootstrap/Popover';
import PopoverHeader from 'react-bootstrap/PopoverHeader';
import PopoverBody from 'react-bootstrap/PopoverBody';
import SessionContext from '@isle-project/session/context.js';
import './login.css';


// VARIABLES //

const debug = logger( 'isle:login' );


// MAIN //

/**
* Login modal window.
*
* @property {boolean} show - controls whether to display the modal window
* @property {Function} onClose - callback invoked when closing the modal window
*/
class Login extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			email: '',
			password: '',
			show: props.show,
			showTFA: false,
			token: ''
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.show !== prevState.show ) {
			return {
				email: '',
				password: '',
				show: nextProps.show,
				showTFA: false
			};
		}
		return null;
	}

	handleInputChange = ( event ) => {
		event.stopPropagation();
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[ name ]: value
		});
	};

	handleForgotPassword = ( event ) => {
		event.preventDefault();
		if ( this.state.email === '' ) {
			this.setState({
				showInputOverlay: true,
				overlayTarget: ReactDOM.findDOMNode( this.emailInput ),
				invalidInputMessage: this.props.t( 'enter-email-before-password-reset' )
			});
		} else {
			const session = this.context;
			session.forgotPassword( this.state.email );
		}
	};

	hideAfterDelay = () => {
		setTimeout( () => {
			this.setState({
				showInputOverlay: false
			});
		}, 2000 );
	};

	handleKeyPress = ( event ) => {
		event.stopPropagation();
		if ( event.charCode === 13 ) {
			this.handleSubmit( event );
		}
	};

	handleSubmit = ( event ) => {
		event.preventDefault();
		const form = {
			password: this.state.password,
			email: this.state.email
		};
		if ( this.state.showTFA ) {
			form.token = this.state.token;
			const session = this.context;
			return session.login( form, ( err, res, body ) => {
				if ( !err && body.message === 'ok' ) {
					this.props.onClose();
				}
			});
		}
		if ( form.email === '' ) {
			debug( 'Email input field is empty, show message...' );
			this.setState({
				showInputOverlay: true,
				overlayTarget: ReactDOM.findDOMNode( this.emailInput ),
				invalidInputMessage: this.props.t( 'enter-email' )
			}, this.hideAfterDelay );
		}
		else if ( form.password === '' ) {
			debug( 'Password input field is empty, show message...' );
			this.setState({
				showInputOverlay: true,
				overlayTarget: ReactDOM.findDOMNode( this.passwordInput ),
				invalidInputMessage: this.props.t( 'enter-password' )
			}, this.hideAfterDelay );
		}
		else {
			const session = this.context;
			session.login( form, ( err, res, body ) => {
				if ( !err ) {
					const { message, type } = body;
					if ( message === 'ok' ) {
						this.props.onClose();
					} else if ( message === 'finish-login-via-tfa' ) {
						this.setState({
							showTFA: true
						});
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
	};

	render() {
		return (
			<Modal
				show={this.props.show}
				className="login-modal"
				onHide={this.props.onClose}
			>
				<Modal.Header closeButton >
					<Modal.Title as="h3" >{this.props.t( 'login' )}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form horizontal className="d-grid gap-2" >
						<FormGroup controlId="form-email" >
							<FormLabel>{this.props.t( 'email' )}</FormLabel>
							<FormControl
								name="email"
								type="email"
								placeholder="Email"
								autoComplete="username"
								onChange={this.handleInputChange}
								onKeyPress={this.handleKeyPress}
								ref={( input ) => { this.emailInput = input; }}
								disabled={this.state.showTFA}
							/>
						</FormGroup>
						<FormGroup controlId="form-password" >
							<FormLabel>{this.props.t( 'password' )}</FormLabel>
							<FormControl
								name="password"
								type="password"
								placeholder="Password"
								autoComplete="current-password"
								onChange={this.handleInputChange}
								onKeyPress={this.handleKeyPress}
								ref={( input ) => { this.passwordInput = input; }}
								disabled={this.state.showTFA}
							/>
						</FormGroup>
						{this.state.showTFA ?
							<FormGroup controlId="form-tfa" >
								<FormLabel>{this.props.t( 'enter-tfa-token' )}</FormLabel>
								<FormControl
									name="token"
									type="text"
									placeholder={this.props.t( 'enter-token' )}
									onChange={this.handleInputChange}
									onKeyPress={this.handleKeyPress}
									autoFocus={true} // eslint-disable-line jsx-a11y/no-autofocus
								/>
							</FormGroup> :
							null}
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<button className="forgot-password-button" onClick={this.handleForgotPassword}>
						{this.props.t( 'forgot-password' )}
					</button>
					<Button
						variant="primary"
						type="submit"
						onClick={this.handleSubmit}
					>
						{this.props.t( 'signin' )}
					</Button>
					<Button onClick={this.props.onClose}>
						{this.props.t( 'close' )}
					</Button>
				</Modal.Footer>
				<Overlay
					show={this.state.showInputOverlay}
					target={this.state.overlayTarget}
					placement="right"
					containerPadding={20}
				>
					<Popover id="popover-contained">
						<PopoverHeader>{this.props.t( 'invalid' )}</PopoverHeader>
						<PopoverBody>{this.state.invalidInputMessage}</PopoverBody>
					</Popover>
				</Overlay>
			</Modal>
		);
	}
}


// PROPERTIES //

Login.defaultProps = {
	onClose() {},
	show: false
};

Login.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool
};

Login.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'internal/login' )( Login );
