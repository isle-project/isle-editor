// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import pick from '@stdlib/utils/pick';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import PopoverTitle from 'react-bootstrap/PopoverTitle';
import PopoverContent from 'react-bootstrap/PopoverContent';
import Tooltip from 'components/tooltip';
import SessionContext from 'session/context.js';


// VARIABLES //

const debug = logger( 'isle:signup' );
const FORM_DATA = [ 'name', 'email', 'password', 'passwordRepeat' ];


// MAIN //

/**
* Signup modal window.
*
* @property {boolean} show - controls whether to display the modal window
* @property {Function} onClose - callback invoked when closing the modal window
*/
class Signup extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			name: '',
			email: '',
			password: '',
			passwordRepeat: ''
		};
	}

	handleSubmit = ( event ) => {
		event.preventDefault();
		const session = this.context;
		if (
			this.getEmailValidationState() === 'success' &&
			this.getNameValidationState() === 'success' &&
			this.getPasswordValidationState() === 'success'
		) {
			const data = pick( this.state, FORM_DATA );
			session.registerUser( data, () => {
				this.props.onClose();
			});
		} else {
			this.setState({
				showSubmitOverlay: true,
				overlayTarget: event.target
			}, () => {
				setTimeout( () => {
					this.setState({
						showSubmitOverlay: false
					});
				}, 2000 );
			});
		}
		return false;
	};

	handleKeyPress = ( event ) => {
		event.stopPropagation();
		if ( event.charCode === 13 ) {
			this.handleSubmit( event );
		}
	}

	handleInputChange = ( event ) => {
		event.stopPropagation();
		const target = event.target;
		const value = target.value;
		const name = target.name;
		debug( `Update "${name}" state to "${value}"...` );
		this.setState({
			[ name ]: value
		});
	}

	getEmailValidationState = () => {
		const { email } = this.state;
		if ( email.includes( '@' ) ) {
			return 'success';
		}
		return 'warning';
	}

	getNameValidationState = () => {
		const { name } = this.state;
		if ( name.length >= 3 ) {
			return 'success';
		}
		return 'warning';
	}

	getPasswordValidationState = () => {
		const { password, passwordRepeat } = this.state;
		if ( password.length < 6 ) {
			return 'warning';
		}
		if ( password !== passwordRepeat ) {
			return 'error';
		}
		return 'success';
	}

	render() {
		const invalidEmail = this.state.email && this.getEmailValidationState() !== 'success';
		const invalidName = this.state.name && this.getNameValidationState() !== 'success';
		const passwordValidation = this.getPasswordValidationState();
		const invalidPassword = this.state.password && passwordValidation === 'warning';
		const invalidPasswordRepeat = this.state.passwordRepeat && passwordValidation === 'error';
		return (
			<Modal
				show={this.props.show}
				onHide={this.props.onClose}
				dialogClassName="modal-75w"
			>
				<Modal.Header closeButton >
					<Modal.Title as="h3">Create User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Please fill in the required information to set up an ISLE user account.
						When solving ISLE lessons in the future from the current browser, you will not have to fill out this form again.
						If you are already registered before, supplying your email address suffices.</p>
					<Form horizontal>
						<Tooltip placement="right" tooltip="Please enter a valid email address." >
							<FormGroup
								controlId="formHorizontalEmail"
							>
								<Col sm={2}>
									<FormLabel>Email</FormLabel>
								</Col>
								<Col sm={10}>
									<FormControl
										name="email"
										type="email"
										placeholder="Enter Email"
										autoComplete="username"
										onChange={this.handleInputChange}
										onKeyPress={this.handleKeyPress}
										isInvalid={invalidEmail}
									/>
									<FormControl.Feedback type="invalid">
										Not a valid email address.
									</FormControl.Feedback>
									{ !this.state.email ? <small className="form-text text-muted" >Please enter your university email address.</small> : null}
								</Col>
							</FormGroup>
						</Tooltip>
						<Tooltip placement="right" tooltip="Please enter your name (minimum three characters)." >
							<FormGroup
								controlId="signup-form-name"
							>
								<Col sm={2}>
									<FormLabel>Name</FormLabel>
								</Col>
								<Col sm={10}>
									<FormControl
										name="name"
										type="text"
										placeholder="Enter Name"
										onChange={this.handleInputChange}
										onKeyPress={this.handleKeyPress}
										isInvalid={invalidName}
									/>
									<FormControl.Feedback type="invalid">
										Name must contain four characters.
									</FormControl.Feedback>
									{ !this.state.name ? <small className="form-text text-muted" >Please enter your name.</small> : null}
								</Col>
							</FormGroup>
						</Tooltip>
						<Tooltip placement="right" tooltip="Please enter a password of your choosing with at least six characters" >
							<FormGroup
								controlId="signup-form-password"
							>
								<Col sm={2}>
									<FormLabel>Password</FormLabel>
								</Col>
								<Col sm={10}>
									<FormControl
										name="password"
										type="password"
										placeholder="Choose Password"
										autoComplete="new-password"
										onChange={this.handleInputChange}
										onKeyPress={this.handleKeyPress}
										maxLength={30}
										minLength={6}
										isInvalid={invalidPassword}
									/>
									<FormControl.Feedback type="invalid">
										Please enter a new password with at least six characters.
									</FormControl.Feedback>
								</Col>
							</FormGroup>
						</Tooltip>
						<FormGroup
							controlId="signup-form-password-confirmation"
						>
							<Col sm={2}></Col>
							<Col sm={10}>
								<FormControl
									name="passwordRepeat"
									type="password"
									placeholder="Confirm Password"
									autocomplete="new-password"
									onChange={this.handleInputChange}
									onKeyPress={this.handleKeyPress}
									maxLength={30}
									minLength={6}
									isInvalid={invalidPasswordRepeat}
								/>
								<FormControl.Feedback type="invalid">
									Passwords do not match.
								</FormControl.Feedback>
							</Col>
						</FormGroup>
					</Form>
					<Overlay
						show={this.state.showSubmitOverlay}
						target={this.state.overlayTarget}
						placement="right"
						containerPadding={20}
					>
						<Popover id="popover-contained" >
							<PopoverTitle>Input fields are not valid</PopoverTitle>
							<PopoverContent>Please make sure that all input values are valid before submitting.</PopoverContent>
						</Popover>
					</Overlay>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="primary"
						className="centered"
						type="submit"
						onClick={this.handleSubmit}
					>Sign up</Button>
					<Button onClick={this.props.onClose}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}


// PROPERTIES //

Signup.defaultProps = {
	onClose() {},
	show: false
};

Signup.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool
};

Signup.contextType = SessionContext;


// EXPORTS //

export default Signup;
