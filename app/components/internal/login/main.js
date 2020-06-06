// MODULES //

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import logger from 'debug';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Form from 'react-bootstrap/Form';
import Overlay from 'react-bootstrap/Overlay';
import Modal from 'react-bootstrap/Modal';
import Popover from 'react-bootstrap/Popover';
import PopoverTitle from 'react-bootstrap/PopoverTitle';
import PopoverContent from 'react-bootstrap/PopoverContent';
import SessionContext from 'session/context.js';
import TRANSLATION from './translation.json';
import './login.css';


// VARIABLES //

const debug = logger( 'isle:login' );
i18next.addResources( 'de', 'components', TRANSLATION.DE );
i18next.addResources( 'en', 'components', TRANSLATION.EN );
i18next.addResources( 'es', 'components', TRANSLATION.ES );


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
		event.stopPropagation();
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
				overlayTarget: ReactDOM.findDOMNode( this.emailInput ),
				invalidInputMessage: this.props.t( 'enter-email-before-password-reset' )
			});
		} else {
			const session = this.context;
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

	handleKeyPress = ( event ) => {
		event.stopPropagation();
		if ( event.charCode === 13 ) {
			this.handleSubmit( event );
		}
	}

	handleSubmit = ( event ) => {
		event.preventDefault();
		const form = {
			password: this.state.password,
			email: this.state.email
		};
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
			<Modal
				show={this.props.show}
				className="login-modal"
				onHide={this.props.onClose}
			>
				<Modal.Header closeButton >
					<Modal.Title as="h3">{this.props.t( 'login' )}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form horizontal>
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
							/>
						</FormGroup>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<button className="forgot-password-button" onClick={this.handleForgotPassword}>{this.props.t( 'forgot-password' )}</button>
					<Button
						variant="primary"
						type="submit"
						onClick={this.handleSubmit}
					>{this.props.t( 'signin' )}</Button>
					<Button onClick={this.props.onClose}>{this.props.t( 'close' )}</Button>
				</Modal.Footer>
				<Overlay
					show={this.state.showInputOverlay}
					target={this.state.overlayTarget}
					placement="right"
					containerPadding={20}
				>
					<Popover id="popover-contained">
						<PopoverTitle>{this.props.t( 'invalid' )}</PopoverTitle>
						<PopoverContent>{this.state.invalidInputMessage}</PopoverContent>
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

export default withTranslation()( Login );
