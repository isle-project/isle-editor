// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import pick from '@stdlib/utils/pick';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import Modal from 'react-bootstrap/lib/Modal';
import Overlay from 'react-bootstrap/lib/Overlay';
import Popover from 'react-bootstrap/lib/Popover';
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

	handleInputChange = ( event ) => {
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
		if ( password.length < 6 || passwordRepeat.length === 0 ) {
			return 'warning';
		}
		if ( password !== passwordRepeat ) {
			return 'error';
		}
		return 'success';
	}

	render() {
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
								validationState={this.getEmailValidationState()}
							>
								<Col sm={2}>
									<label>Email</label>
								</Col>
								<Col sm={10}>
									<FormControl
										name="email"
										type="email"
										placeholder="Enter Email"
										autocomplete="username"
										onChange={this.handleInputChange}
									/>
									<FormControl.Feedback />
									<small className="form-text text-muted" >Please enter your university email address.</small>
								</Col>
							</FormGroup>
						</Tooltip>
						<Tooltip placement="right" tooltip="Please enter your name (minimum three characters)." >
							<FormGroup
								controlId="signup-form-name"
								validationState={this.getNameValidationState()}
							>
								<Col sm={2}>
									<label>Name</label>
								</Col>
								<Col sm={10}>
									<FormControl
										name="name"
										type="text"
										placeholder="Enter Name"
										onChange={this.handleInputChange}
									/>
									<FormControl.Feedback />
									<small className="form-text text-muted" >Please enter your name.</small>
								</Col>
							</FormGroup>
						</Tooltip>
						<Tooltip placement="right" tooltip="Please enter a password of your choosing with at least six characters" >
							<FormGroup
								controlId="signup-form-password"
								validationState={this.getPasswordValidationState()}
							>
								<Col sm={2}>
									<label>Password</label>
								</Col>
								<Col sm={10}>
									<FormControl
										name="password"
										type="password"
										placeholder="Choose Password"
										autocomplete="new-password"
										onChange={this.handleInputChange}
										maxLength={30}
										minLength={6}
									/>
									<FormControl.Feedback />
								</Col>
							</FormGroup>
						</Tooltip>
						<FormGroup
							controlId="signup-form-password-confirmation"
							validationState={this.getPasswordValidationState()}
						>
							<Col sm={2}></Col>
							<Col sm={10}>
								<FormControl
									name="passwordRepeat"
									type="password"
									placeholder="Confirm Password"
									autocomplete="new-password"
									onChange={this.handleInputChange}
									maxLength={30}
									minLength={6}
								/>
								<FormControl.Feedback />
							</Col>
						</FormGroup>
					</Form>
					<Overlay
						show={this.state.showSubmitOverlay}
						target={this.state.overlayTarget}
						placement="right"
						containerPadding={20}
					>
						<Popover id="popover-contained" title="Input fields are not valid">
							Please make sure that all input values are valid before submitting.
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
