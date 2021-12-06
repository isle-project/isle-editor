// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import PopoverHeader from 'react-bootstrap/PopoverHeader';
import PopoverBody from 'react-bootstrap/PopoverBody';
import pick from '@stdlib/utils/pick';
import Tooltip from '@isle-project/components/tooltip';
import SessionContext from '@isle-project/session/context.js';


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
			session.registerUser( data, ( err ) => {
				if ( !err ) {
					this.props.onClose();
				}
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
	};

	handleInputChange = ( event ) => {
		event.stopPropagation();
		const target = event.target;
		const value = target.value;
		const name = target.name;
		debug( `Update "${name}" state to "${value}"...` );
		this.setState({
			[ name ]: value
		});
	};

	getEmailValidationState = () => {
		const { email } = this.state;
		if ( email.includes( '@' ) ) {
			return 'success';
		}
		return 'warning';
	};

	getNameValidationState = () => {
		const { name } = this.state;
		if ( name.length >= 3 ) {
			return 'success';
		}
		return 'warning';
	};

	getPasswordValidationState = () => {
		const { password, passwordRepeat } = this.state;
		if ( password.length < 6 ) {
			return 'warning';
		}
		if ( password !== passwordRepeat ) {
			return 'error';
		}
		return 'success';
	};

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
				dialogClassName="modal-60w"
			>
				<Modal.Header closeButton >
					<Modal.Title as="h3">{this.props.t( 'create-user' )}</Modal.Title>
				</Modal.Header>
				<Modal.Body >
					<p>{this.props.t( 'opening-paragraph' )}</p>
					<Form horizontal className="d-grid gap-2" >
						<Tooltip placement="right" tooltip={this.props.t( 'enter-valid-email' )} >
							<FormGroup
								controlId="signup-form-email"
							>
								<FormLabel>{this.props.t( 'email' )}</FormLabel>
								<FormControl
									name="email"
									type="email"
									placeholder={this.props.t( 'email-placeholder' )}
									autoComplete="username"
									onChange={this.handleInputChange}
									onKeyPress={this.handleKeyPress}
									isInvalid={invalidEmail}
									value={this.state.email}
								/>
								<FormControl.Feedback type="invalid">
									{this.props.t( 'invalid-email' )}
								</FormControl.Feedback>
								{ !this.state.email ? <small className="form-text text-muted" >{this.props.t( 'enter-email' )}</small> : null}
							</FormGroup>
						</Tooltip>
						<Tooltip placement="right" tooltip={this.props.t( 'name-tooltip' )} >
							<FormGroup
								controlId="signup-form-name"
							>
								<FormLabel>{this.props.t( 'name' )}</FormLabel>
								<FormControl
									name="name"
									type="text"
									placeholder={this.props.t( 'name-placeholder' )}
									onChange={this.handleInputChange}
									onKeyPress={this.handleKeyPress}
									isInvalid={invalidName}
									value={this.state.name}
								/>
								<FormControl.Feedback type="invalid">
									{this.props.t( 'invalid-name' )}
								</FormControl.Feedback>
								{ !this.state.name ? <small className="form-text text-muted" >{this.props.t( 'enter-name' )}</small> : null}
							</FormGroup>
						</Tooltip>
						<Tooltip placement="right" tooltip={this.props.t( 'password-tooltip' )} >
							<FormGroup
								controlId="signup-form-password"
							>
								<FormLabel>{this.props.t( 'password' )}</FormLabel>
								<FormControl
									name="password"
									type="password"
									placeholder={this.props.t( 'password-placeholder' )}
									autoComplete="new-password"
									onChange={this.handleInputChange}
									onKeyPress={this.handleKeyPress}
									maxLength={30}
									minLength={6}
									isInvalid={invalidPassword}
									value={this.state.password}
								/>
								<FormControl.Feedback type="invalid">
									{this.props.t( 'invalid-password' )}
								</FormControl.Feedback>
							</FormGroup>
						</Tooltip>
						<FormGroup
							controlId="signup-form-password-confirmation"
						>
							<FormControl
								aria-label={this.props.t( 'confirm-password' )}
								name="passwordRepeat"
								type="password"
								placeholder={this.props.t( 'confirm-password' )}
								autocomplete="new-password"
								onChange={this.handleInputChange}
								onKeyPress={this.handleKeyPress}
								maxLength={30}
								minLength={6}
								isInvalid={invalidPasswordRepeat}
								value={this.state.passwordRepeat}
							/>
							<FormControl.Feedback type="invalid">
								{this.props.t( 'password-no-match' )}
							</FormControl.Feedback>
						</FormGroup>
					</Form>
					<Overlay
						show={this.state.showSubmitOverlay}
						target={this.state.overlayTarget}
						placement="right"
						containerPadding={20}
					>
						<Popover id="popover-contained" >
							<PopoverHeader>{this.props.t( 'inputs-invalid' )}</PopoverHeader>
							<PopoverBody>{this.props.t( 'inputs-invalid-content' )}</PopoverBody>
						</Popover>
					</Overlay>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="primary"
						className="centered"
						type="submit"
						onClick={this.handleSubmit}
					>{this.props.t( 'signup' )}</Button>
					<Button onClick={this.props.onClose}>{this.props.t( 'close' )}</Button>
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

export default withTranslation( 'internal/signup' )( Signup );
